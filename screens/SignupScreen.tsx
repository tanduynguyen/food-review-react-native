import { Button, Text, Scaffold, createStyles } from 'lumine';
import { Button as DefaultButton } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import useAuth from '../hooks/useAuth';

const SignUpScreen = (props: any) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const { user, auth } = useAuth()
    const navigation = useNavigation()

    const signUpButtonTapped = async () => {
        setErrorMessage('')

        try {
            await auth().createUserWithEmailAndPassword(email, password)
            navigation.goBack()
        } catch(error: any) {
            console.log(error)
            setErrorMessage(error.message)
        }
    }

    return (
        <Scaffold.View>
            <Text>Sign up screen</Text>
            <AuthForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />

            { errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null }

            <Button text="Sign up" onPress={signUpButtonTapped} style={styles.button} />

            <DefaultButton title="Already have account? Sign in" onPress={props.onSignIn} />
        
        </Scaffold.View>
    )
};

const styles = createStyles({
    button: {
        marginTop: 32,
    },
    error: {
        color: 'red'
    }
});

export default SignUpScreen ;
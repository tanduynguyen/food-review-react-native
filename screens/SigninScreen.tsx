import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button as DefaultButton, KeyboardAvoidingView } from 'react-native';
import { Button, Text, Scaffold, createStyles } from 'lumine';
import AuthForm from '../components/AuthForm';
import useAuth from '../hooks/useAuth';

const SignInScreen = (props: any) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const { user, auth } = useAuth()

    const signInButtonTapped = async () => {
        setErrorMessage('')

        try {
            await auth().signInWithEmailAndPassword(email, password)
            navigation.goBack()
        } catch(error: any) {
            console.log(error)
            setErrorMessage(error.message)
        }
    }
    return (
        <Scaffold.ScrollView>
            <KeyboardAvoidingView>
            <AuthForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />

            { errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null }

            <Button text="Sign in" style={styles.button} onPress={signInButtonTapped} />
            <DefaultButton title="Don't have account? Sign up" onPress={props.onSignUp} />
            </KeyboardAvoidingView>
        </Scaffold.ScrollView>
    )
}

const styles = createStyles({
    button: {
        marginTop: 32
    },
    error: {
        color: 'red'
    }
});

export default SignInScreen
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { Button, Text, Scaffold, createStyles } from 'lumine';
import { StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const SignInScreen = (props: any) => {
    const {token, setToken} = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <Scaffold.View>
            <Text>Sign in screen</Text>
            {token ? <Text>Signed in with token: {token}</Text> : <Text>Not sign in</Text> }

            <Button text="Log in" style={styles.button} onPress={() => {
                setToken('a-token')
                navigation.goBack()
            }} />

            <Button text="Sign up" onPress={props.onSignUp} style={styles.button} />
        </Scaffold.View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 32,
    },    
});

export default SignInScreen;
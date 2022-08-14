import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { Button, Text, View } from 'react-native';

import { AuthContext } from '../context/AuthContext';

const SignInScreen = (props: any) => {
    const {token, setToken} = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <View>
            <Text>Sign in screen</Text>
            {token ? <Text>Signed in with token: {token}</Text> : <Text>Not sign in</Text> }

            <Button title="Log in" onPress={() => {
                setToken('a-token')
                navigation.goBack()
            }} />

            <Button title="Sign up" onPress={props.onSignUp} />
        </View>
    )
}

export default SignInScreen;
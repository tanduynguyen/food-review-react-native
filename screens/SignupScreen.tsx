import { Button, Text, Scaffold } from 'lumine';
import { StyleSheet } from 'react-native';

const SignUpScreen = (props: any) => {
    return (
        <Scaffold.View>
            <Text>Sign up screen</Text>
            <Button text="Sign in" style={styles.button} onPress={props.onSignIn} />
        </Scaffold.View>
    )
};

const styles = StyleSheet.create({
    button: {
        marginTop: 32,
    },    
});

export default SignUpScreen ;
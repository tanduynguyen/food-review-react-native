import { Text, View, Button } from "react-native";

const SignUpScreen = (props: any) => {
    return (
        <View>
            <Text>Sign up screen</Text>
            <Button title="Sign in" onPress={props.onSignIn} />
        </View>
    )
};

export default SignUpScreen ;
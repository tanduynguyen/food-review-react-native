import { StyleSheet } from 'react-native';
import { useLayoutEffect, useState } from 'react';
import SignInScreen from './SigninScreen';
import SignUpScreen from './SignupScreen';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button } from "react-native";

const AuthScreen = (props: any) => {
  const [isSignIn, setIsSignIn] = useState(true)

  useLayoutEffect(() => {
      props.navigation.setOptions({
          headerLeft: () => <Button title='Close' onPress={() => props.navigation.goBack() }></Button>
      })
  }, [props.navigation])

  return (
      <View style={styles.container}>
      { isSignIn ? (
          <SignInScreen onSignUp={ () => setIsSignIn(false) } />
      ) : ( 
          <SignUpScreen onSignIn={ () => setIsSignIn(true) } /> 
      )}
      </View>
  )
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

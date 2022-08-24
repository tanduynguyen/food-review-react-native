import { StyleSheet } from 'react-native';
import { useLayoutEffect, useState } from 'react';
import SignInScreen from './SigninScreen';
import SignUpScreen from './SignupScreen';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text } from '../components/Themed';
import { Button as DefaultButton } from "react-native";
import { Scaffold, Button } from 'lumine';
import useAuth from '../hooks/useAuth';

const AuthScreen = (props: any) => {
  const [isSignIn, setIsSignIn] = useState(true)
  const { user, auth } = useAuth();

  useLayoutEffect(() => {
    if (props.route.params?.isModal) {
      props.navigation.setOptions({
          headerLeft: () => <DefaultButton title='Close' onPress={() => props.navigation.goBack() } />
      })
    }
  }, [props.navigation])

  return (
      <>
        { user == null ? (
          <Scaffold.View>
          { isSignIn ? (
            <SignInScreen onSignUp={ () => setIsSignIn(false) } />
          ) : ( 
            <SignUpScreen onSignIn={ () => setIsSignIn(true) } /> 
          )}
          </Scaffold.View>
          ) : (
                <Scaffold.View style={styles.signedInInfo}>
                    <Text>{user.email}</Text>
                    <Button text='Log out' style={styles.button} onPress={() => auth().signOut() } />
                </Scaffold.View>
            ) }
      </>
  )
}

export default AuthScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    marginTop: 32,
  },
  signedInInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

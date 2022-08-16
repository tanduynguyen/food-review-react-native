import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { Button, Text, Scaffold } from 'lumine';
import useAuth from '../hooks/useAuth';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { user, auth } = useAuth();
  return (
    <Scaffold.View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
      <Scaffold.View style={styles.separator} />
      { user == null ? (
                <Button text='Sign in' style={styles.button} onPress={() => navigation.navigate('Auth') } />
            ) : (
                <Scaffold.View style={styles.signedInInfo}>
                    <Text>{user.email}</Text>
                    <Button text='Log out' style={styles.button} onPress={() => auth().signOut() } />
                </Scaffold.View>
            ) }
   </Scaffold.View>
  );
}

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
  button: {
    marginTop: 32,
  },
  signedInInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

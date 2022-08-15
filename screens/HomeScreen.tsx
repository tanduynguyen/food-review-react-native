import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { Button, Text, Scaffold } from 'lumine';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <Scaffold.View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
      <Scaffold.View style={styles.separator} />
      <Button text='Authen' style={styles.button} onPress={() => navigation.navigate('Auth') } /> 
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
});

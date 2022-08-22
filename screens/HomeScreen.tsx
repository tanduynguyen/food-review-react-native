import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { Button, Text, Scaffold } from 'lumine';
import useAuth from '../hooks/useAuth';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { user, auth } = useAuth();
  return (
    <Scaffold.View>
      
   </Scaffold.View>
  );
}

const styles = StyleSheet.create({
});

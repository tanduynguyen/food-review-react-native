import { StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { Button, Text, Scaffold } from 'lumine';
import useAuth from '../hooks/useAuth';
import ReviewView from '../components/ReviewView';
import FirestoreAPI from '../apis/FirestoreAPI';
import Review from '../models/Review';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { user, auth } = useAuth();
  const [reviews, setReviews] = useState<Review[] | null>(null)

  useEffect(() => {
    FirestoreAPI.getReviews()
      .then(reviews => setReviews(reviews))
  }, [])

  return (
    <Scaffold.View style={styles.container}>
      <Text h1>Reviews</Text>
      <FlatList 
      data={reviews}
      keyExtractor={ item => item.id }
      renderItem={({ item }) => <ReviewView style={styles.reviewItem} review={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
   </Scaffold.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0
  },
  reviewItem: {
    paddingRight: 5,
    width: 240
  }
});

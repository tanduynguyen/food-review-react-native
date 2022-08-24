import firestore from '@react-native-firebase/firestore';
import Review from '../models/Review';
import { plainToClass } from 'class-transformer'

class FirestoreAPI {
    static async getReviews(): Promise<Review[]> {
        let reviews: Review[] = []
        const querySnapshot = await firestore().collection('review').get()

        querySnapshot.forEach(documentSnapshot => {
            const data = documentSnapshot.data()
            const review = plainToClass(Review, data)
            review.id = documentSnapshot.id
            reviews.push(review)
        })

        return reviews
    }
}

export default FirestoreAPI
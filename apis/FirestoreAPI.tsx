import firestore from '@react-native-firebase/firestore';
import Review from '../models/Review';
import { plainToClass } from 'class-transformer'

class FirestoreAPI {
    static async getReviews(): Promise<Review[]> {
        let reviews: Review[] = []
        const querySnapshot = await firestore().collection('review')
            .orderBy('timestamp', 'desc').get()

        querySnapshot.forEach(documentSnapshot => {
            const data = documentSnapshot.data()
            const review = plainToClass(Review, data)
            review.id = documentSnapshot.id
            reviews.push(review)
        })

        return reviews
    }

    static submitReview(title: String, content: String, author?: String): Promise<boolean> {
        return firestore().collection('review').add({
            title: title,
            content: content,
            author: author,
            imageLink: 'https://dainam.edu.vn/img/system/no-image.png',
            timestamp: new Date().getTime()
        }).then(() => {
            return true
        })
    }
}

export default FirestoreAPI
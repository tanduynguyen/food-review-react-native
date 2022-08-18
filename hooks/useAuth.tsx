import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useState, useEffect } from 'react';

export default () => {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(user => {
            setUser(user)
        })
        return subscriber
    }, [])

    return { user, auth }
}
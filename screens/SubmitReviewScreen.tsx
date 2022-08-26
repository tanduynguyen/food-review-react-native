import { Button, Text, Scaffold, TextInput, createStyles } from 'lumine';
import { Button as DefaultButton, ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useState, useLayoutEffect } from 'react';
import useAuth from '../hooks/useAuth';
import FirestoreAPI from '../apis/FirestoreAPI';
import UploadForm from '../components/UploadForm';

const SubmitReviewScreen = (props: any) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const { user, auth } = useAuth()
    const [spinner, setSpinner] = useState(false)
    const navigation = useNavigation()

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => <DefaultButton title='Close' onPress={() => props.navigation.goBack() } />,
            title: 'Submit Review'
        })
    }, [props.navigation])

    const submitButtonTapped = async () => {
        setErrorMessage('')
        if (title.length == 0) {
            setErrorMessage('Must enter the title')
            return
        }
        if (content.length == 0) {
            setErrorMessage('Must enter the content')
            return
        }
        setSpinner(true)
        FirestoreAPI.submitReview(title, content, user?.email)
        .then(result => {
            setSpinner(false)
            navigation.goBack()
        }).catch(errorMessage => { setErrorMessage(errorMessage) })
    }

    return (
        <Scaffold.View>
            <TextInput value={title} onChangeText={setTitle} placeholder='Title' autoFocus={true} />
            <TextInput value={content} onChangeText={setContent} placeholder='Content' />
            <UploadForm></UploadForm>
            { spinner && <ActivityIndicator  />}
            { errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null }

            <Button text="Submit" onPress={submitButtonTapped} style={styles.button} disabled={spinner} />        
        </Scaffold.View>
    )
};

const styles = createStyles({
    button: {
        marginTop: 32,
    },
    error: {
        color: 'red'
    },
});

export default SubmitReviewScreen
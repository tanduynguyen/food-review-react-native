import { Button, Text, Scaffold, createStyles } from 'lumine';
import { ActivityIndicator, Alert, Image, Platform } from "react-native";
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';
import React, { useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import PhotoEditor from "@baronha/react-native-photo-editor";

const UploadForm = (props: any) => {
        const [image, setImage] = useState({uri: ''});
        const [uploading, setUploading] = useState(false);
        const [transferred, setTransferred] = useState(0);
        
        const selectImage = () => {
          const launchImageLibrary = ImagePicker.launchImageLibrary;
          launchImageLibrary({
            maxWidth: 2000,
            maxHeight: 2000,
            mediaType: 'photo'
          }, async response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.assets) {
              const imageURL = response.assets[0].uri
              if (imageURL) {
                const source = { uri: imageURL };
                setImage(source);
                onEdit(imageURL)
              }
            }
          }).then()
          .catch(error => {
            console.log(error)
          });
        };
    
        const onEdit = async (imageURL: string) => { 
          try {
            const path = await PhotoEditor.open({
              path: imageURL,
              stickers: [],
            })
            setImage({ uri: path })
          } catch (e) {
            console.log('e', e);
          }
        };

    const uploadImage = async () => {
        const { uri } = image;
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        setUploading(true);
        setTransferred(0);
        const task = storage()
          .ref(filename)
          .putFile(uploadUri);
        task.on('state_changed', snapshot => {
          setTransferred(
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
          );
        });
        try {
          await task;
        } catch (e) {
          console.error(e);
        }
        setUploading(false);
        Alert.alert(
          'Photo uploaded!',
          'Your photo has been uploaded to Firebase Cloud Storage!'
        );
        setImage({uri: ''});
    };

    return (
    <>
    <Button text='Pick an image' onPress={selectImage} style={styles.selectButton} />
        {image !== null ? (
          <><Image source={{ uri: image.uri }} style={styles.imageBox} />
          <Button text='Upload image' onPress={uploadImage} style={styles.uploadButton} /></>
        ) : null}
        {uploading ? (
          <Scaffold.View style={styles.progressBarContainer}>
            <Progress.Bar progress={transferred} width={300} />
          </Scaffold.View>
        ) : null}
      </>
    );
}

const styles = createStyles({
    button: {
        marginTop: 32,
    },
    selectButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#8ac6d1',
        alignItems: 'center',
        justifyContent: 'center'
      },
      uploadButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#ffb6b9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      },
      progressBarContainer: {
        marginTop: 20
      },
      imageBox: {
        marginTop: 5,
        width: 200,
        height: 200
      }
});

export default UploadForm
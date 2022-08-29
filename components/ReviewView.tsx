import React from 'react';
import { Scaffold, Text, createStyles } from 'lumine';
import { Image } from 'react-native';

const ReviewView = (props: any) => {
    return (
        <Scaffold.View style={props.style}>
            <Text h2>{props.review.title}</Text>
            {props.review.imageLink.length > 0 ? (
            <Image style={styles.image} source={ { uri: props.review.imageLink } } />
            ) : null}
            <Text numberOfLines={3}>{props.review.content}</Text>
        </Scaffold.View>
    )
}

const styles = createStyles({
    image: {
        width: 200,
        height: 110,
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10
    },
})

export default ReviewView
import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {Card} from 'react-native-elements'


const Product = ({price, image, title, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Card containerStyle={styles.cardContainer}>
            <Card.Image 
            source={{uri: image}} 
            PlaceholderContent={<ActivityIndicator />}
             />
        <Card.Divider />

        <Card.Title style={styles.title}>{title}</Card.Title>
        <Card.Title>${price.toFixed(2)}</Card.Title>
        </Card>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
    },
    title : {
        fontSize: 12

    }
})

export default Product;
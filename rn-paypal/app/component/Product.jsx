import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {Card} from 'react-native-elements'

import {product} from './styles'
const Product = ({price, image, title, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Card containerStyle={product.cardContainer}>
            <Card.Image 
            source={{uri: image}} 
            PlaceholderContent={<ActivityIndicator />}
             />
        <Card.Divider />

        <Card.Title style={product.title}>{title}</Card.Title>
        <Card.Title>${price.toFixed(2)}</Card.Title>
        </Card>
        </TouchableWithoutFeedback>
    );
};



export default Product;
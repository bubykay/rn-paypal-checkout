import React from 'react';
import {FlatList, StyleSheet, View } from 'react-native';
import CheckOutItem from './CheckOutItem';

const CheckOutList = ({cart}) => {

    const RenderItem =({item})=>(
        <CheckOutItem 
            price = {item.price * item.quantity}
            title = {item.name}
            image = {item.image}
            qty = {item.quantity}
            total = {cart.total}
        />
    )

    const Separator = () => {
        return (
            <View style={styles.itemSeparator}>

            </View>
        )
    }
    
    return (
        <FlatList 
            data = {cart.items}
            renderItem = {({item})=><RenderItem item={item} />}
            ItemSeparatorComponent = {Separator}
            keyExtractor = {item=>item.sku.toString()}
        />
    );
};

export default CheckOutList;

const styles = StyleSheet.create({
    itemSeparator: {
        padding: 2
    }
})
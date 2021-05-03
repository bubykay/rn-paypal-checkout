import React from 'react';
import { useContext } from 'react';
import {FlatList, StyleSheet, View } from 'react-native';



import CartContext from './CartContext';
import CheckOutItem from './CheckOutItem';
import CheckOutListFooter from './CheckOutListFooter';

const CheckOutList = ({navigation}) => {
    const {cart} = useContext(CartContext)

    const RenderItem =({item})=>(
        <CheckOutItem 
            price = {(item.price * item.quantity).toFixed(2)}
            title = {item.name}
            image = {item.image}
            quatity = {item.quantity}
            total = {cart.total}
            sku = {item.sku}
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
            ListFooterComponent = {<CheckOutListFooter navigation={navigation} />}
        />
    );
};

export default CheckOutList;

const styles = StyleSheet.create({
    itemSeparator: {
        padding: 2
    }
})
import React from 'react';
import { useContext } from 'react';
import {View ,Text, Image, StyleSheet, Button, SafeAreaView, FlatList} from 'react-native';

import CartContext from '../component/CartContext';
import {itemDetails} from './styles'

const ItemDetailScreen = ({route, navigation}) => {
const {category, description, image, price, title, id} = route.params
const {cart, setCart} = useContext(CartContext)

const data = [{category, description, image, price, title, id}]

const addToCart = (oldCart, products) => {
    const {price, title, image, id } = products
    let quantity = 0
    let itemExist = oldCart.items.findIndex(item=>item.sku===id)
    if(itemExist>-1){
        const prev = oldCart.items.splice(itemExist, 1)
        quantity = prev[0].quantity + 1
    }else{
        quantity += 1
    }
    const newCart = {
        items: [...oldCart.items, {price:price, name: title, 
            image, 
            sku:id, quantity: quantity, currency: "USD", description}], 
        total: Number(oldCart.total )+ Number(price)
    }
    setCart(newCart)
}

const RenderItem = ({item}) => (
    <View style={{ flex: 1}}>
    <View style={{padding: 5}}>
    <Image source={{uri:item.image}} style={{height:350}} />
    </View>
        
        <View style={itemDetails.infoContainer}>
         <View>
            <Text style={itemDetails.price}>
                {`US $${item.price}`}
            </Text>
         </View>
         <View style={itemDetails.info}>
            <Text style={itemDetails.title}>{title}</Text>
        </View>
        <View>
            <View style={{marginVertical:10}}>
                <Text style={{
                    fontWeight:'bold', 
                    fontSize:20, color: '#FA1088',
                    }}>
                    Description
                </Text>
            </View>
            <View style={itemDetails.info}>
            <Text style={itemDetails.description}>
                {item.description}
            </Text>
            </View>
        </View>
        </View>
    </View>
)

const Footer = () => (<View style={{padding:100}}></View>)
    return (

        <SafeAreaView style={{flex:1}}>
            <FlatList 
            data={data}
            renderItem = {({item})=><RenderItem item={item} />}
            keyExtractor = {()=>data[0].id.toString()}
            ListFooterComponent = {<Footer />}
            />

            <View style={itemDetails.submitButton}>
                <View style={itemDetails.button}>
                    <Button 
                        title="Add to Cart" 
                        color={'white'} 
                        onPress={()=>addToCart(cart, route.params)} 
                        />
                </View>

                {cart.items.length ? (
                    <View style={itemDetails.checkout}>
                    <Button 
                        disabled = {cart.total?false:true}
                        title={`Checkout US $${parseFloat(cart.total).toFixed(2)}`}
                        color={'white'} 
                        onPress={()=>navigation.navigate('checkout', cart)} 
                        />
                </View>
                ) : null
                
                }
            </View>
        </SafeAreaView>
       
    );
};

export default ItemDetailScreen;


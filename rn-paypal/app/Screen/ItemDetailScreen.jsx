import React from 'react';
import { useContext } from 'react';
import {View ,Text, Image, StyleSheet, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CartContext from '../component/CartContext';

const ItemDetailScreen = ({route, navigation}) => {
const {category, description, image, price, title, id} = route.params
const {cart, setCart} = useContext(CartContext)

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
            items: [...oldCart.items, {price, name: title, 
                // image, 
                sku:id, quantity: quantity, currency: "USD"}], 
            total: Number(oldCart.total) + Number(price)
        }
        setCart(newCart)
}




    return (
        <ScrollView contentContainerStyle={{flex:1}}>
            <View style={{ flex: 1}}>
            <Image source={{uri:image}} style={{height:350}} />
                
                <View style={styles.infoContainer}>
                 <Text style={styles.price}>
                     {`US $${price}`}
                 </Text>
                 <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
    
                    
                </View>
    
                <View style={styles.submitButton}>
                    <View style={styles.button}>
                        <Button 
                            title="Add to Cart" 
                            color={'white'} 
                            onPress={()=>addToCart(cart, route.params)} 
                            />
                    </View>
    
                    <View style={styles.checkout}>
                        <Button 
                            title={`Checkout US $${cart.total}`}
                            color={'white'} 
                            onPress={()=>navigation.navigate('checkout', cart)} 
                            />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
    title :{
       
        fontSize: 15,
        paddingBottom: 10,
        paddingTop: 10
    },
    button:{
        padding: 10,
       marginTop: 10,
        backgroundColor: '#FA1088', 
        borderRadius: 10,
        color: 'white',
        flex: 1
    },
    checkout:{
        padding: 10,
        marginTop: 10,
        backgroundColor: '#450075', 
        borderRadius: 10,
        color: 'white'
    },
    infoContainer: {
        flex: 1,
        padding:10
    
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20
    },
    submitButton: {
        position: 'absolute',
        bottom:10,
        flex: 1,
        width: '100%',
        padding: 10,
        // alignSelf: "flex-start"
       
    }
})
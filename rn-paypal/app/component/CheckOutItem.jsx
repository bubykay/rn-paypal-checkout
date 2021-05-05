import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-native';
import {View, Text} from 'react-native'


import CartContext from './CartContext';
import Quatity from './Quatity';
import {item} from './styles'

const CheckOutItem = ({price, title, image, sku, quatity}) => {
    const {cart, setCart} = useContext(CartContext)



    const decreaseBtn = (sku) => {
        let newcart
        const index = cart.items.findIndex(item=>item.sku ===sku)
        const itemQty = cart.items[index].quantity
        if(itemQty>1){
            const item = cart.items.splice(index, 1)
            const obj = {
                ...item[0],
                quantity: item[0].quantity - 1
            }
            const newTotal = cart.total - item[0].price
            const newItems = [...cart.items, obj]
                newcart = {
                items: newItems,
                total: newTotal.toFixed(2)
            }
        }else if(itemQty===1){
            const item = cart.items.splice(index, 1)
            const newTotal = cart.total - item[0].price
            newcart = {
                ...cart,
                total: newTotal.toFixed(2)
            }  

        }
        setCart(newcart)
    }

    const increaseBtn = (sku) => {
        const index = cart.items.findIndex(item=>item.sku ===sku)
        cart.items[index].quantity += 1
       const newCart = {
           ...cart,
           total: Number(cart.items[index].price) + Number(cart.total)
       }
        setCart(newCart)        
    }

    return (
           <View style={item.container}>
           <Image source={{uri: image}} style={{height:40, width:40}}/>
           <View style={{flex:1, flexDirection:"row"}}>           
           <View style={{paddingLeft: 5, flex:1}}>
                        <View>
                            <Text>
                                {title}
                            </Text>
                        </View>
                        <View style={{
                            flex:1, 
                            flexDirection:"row", 
                            alignItems:"center", 
                            marginTop: 15,
                            }}>
                                <View style={{flex:1}}>
                                    <Quatity quatity={quatity} increaseBtn={increaseBtn} decreaseBtn={decreaseBtn} sku={sku} />   
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={item.text}>
                                        {price}
                                    </Text>
                                </View>
                        </View>
                       
                    </View>              
           </View>
           </View>
    );
};

export default CheckOutItem;
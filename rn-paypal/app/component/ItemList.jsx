import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList, ActivityIndicator} from 'react-native'
import axios from 'axios'
import Product from './Product';
import { StyleSheet } from 'react-native';
import {Icon, withBadge} from 'react-native-elements'
import { useContext } from 'react';
import CartContext from './CartContext';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



const ItemList = ({navigation}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {cart} = useContext(CartContext) 

    const Cart = withBadge(cart.items.length)(Icon)

    useEffect(()=>{
        getProduct()
    },[])


    const getProduct = async() => {
        setLoading(true)
        const result = await axios.get(`https://fakestoreapi.com/products?limit=30`)
        setProducts(result.data)
        setLoading(false)
    }

    const RenderItem = ({item}) => (
    <Product 
        title = {item.title}
        category = {item.category}
        image = {item.image}
        price = {item.price}
        description = {item.description}
        key = {item.id}
        onPress = {()=>navigation.navigate('Detail', item)}
    />
    )

        if(loading){
            return (
                <View style={{flex: 1, alignSelf:"center", alignItems:"center"}}>
                    <ActivityIndicator size='large' color='blue' style={{flex: 1, alignSelf:"center", alignItems:"center"}} />
                </View>
            )
        }

    return (
        <SafeAreaView>
            <FlatList 
            data={products}
            numColumns={2}
            renderItem = {({item})=><RenderItem item={item} />}
            />
            
            <View style={styles.cartMenu}>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('checkout')}>
                <Cart name="shoppingcart" type="antdesign" size={40} color="#9A637F" />
            </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
};

export default ItemList;

const styles = StyleSheet.create({
    cartMenu: {
        position: 'absolute',
        bottom: 10, 
        padding: 10,
    }
})
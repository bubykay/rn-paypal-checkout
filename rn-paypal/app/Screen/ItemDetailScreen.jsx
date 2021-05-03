import React from 'react';
import { useContext } from 'react';
import {View ,Text, Image, StyleSheet, Button, SafeAreaView, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CartContext from '../component/CartContext';

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
        items: [...oldCart.items, {price:price.toFixed(2), name: title, 
            image, 
            sku:id, quantity: quantity, currency: "USD", description}], 
        total:( Number(oldCart.total) + Number(price)).toFixed(2)
    }
    setCart(newCart)
}

const RenderItem = ({item}) => (
    <View style={{ flex: 1}}>
    <Image source={{uri:item.image}} style={{height:350}} />
        
        <View style={styles.infoContainer}>
         <View>
            <Text style={styles.price}>
                {`US $${item.price}`}
            </Text>
         </View>
         <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <View>
            <View style={{marginVertical:10}}>
                <Text style={{fontWeight:'bold', fontSize:20, color: '#FA1088',}}>
                    Description
                </Text>
            </View>
            <View style={styles.info}>
            <Text style={styles.description}>
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
        </SafeAreaView>
       
    );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
    title :{
       
        fontSize: 18,
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
        fontSize: 20,
        paddingVertical: 10,
        color: '#FA1088'
    },
    submitButton: {
        position: 'absolute',
        bottom:10,
        flex: 1,
        width: '100%',
        padding: 10,
       
    },
    description : {
        lineHeight:20
    },
    info: {
        backgroundColor:'white', 
        paddingVertical:10, 
        borderRadius:10, 
        paddingHorizontal:10
    }
})
import React, {useContext} from 'react';
import { Dimensions, 
    SafeAreaView, 
    Text, 
    View, 
    StyleSheet, 
    Modal, 
    TouchableHighlight, 
    ActivityIndicator } from 'react-native';
import { useState } from 'react';
import WebView from 'react-native-webview';
import Constants from 'expo-constants'


import CheckOutList from '../component/CheckOutList';
import CartContext from '../component/CartContext'
import {checkout} from './styles'

const CheckOutScreen = ({navigation, route}) => {
    const {cart, setCart} = useContext(CartContext)
    const [modalVisible, setModalVisible] = useState(false)


    const handleResponse = data => {
        if (data.title === "success") {
            setModalVisible(false)
            setCart({total:0, items:[]})
            navigation.navigate('success')
        } else if (data.title === "cancel") {
            setModalVisible(false)
            navigation.navigate('cancel')
        } else {
            return;
        }
    };

    const items = cart.items.map(item => {
        const {price, name, sku, quantity, currency} = item
        return {price, name, sku, quantity, currency}
    })

    const body = { 
        item_list: { items: [...items] }, 
        amount: {currency: 'USD', total: cart.total},
        description: "Utest Paypal-SDK Checkout"
    }

    console.log(checkout)
  

    const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta)`;
    
        return (
        <SafeAreaView style={{flex:1, flexDirection:"column"}}>

            {cart.items.length===0 && 
            <View>
                <Text style={{paddingTop: 80, alignSelf: 'center'}}>
                    Shopping cart empty...
                </Text>
                </View>
                }
            
            <Modal visible={modalVisible} transparent statusBarTranslucent='true'>
                
                <WebView source={{
                    uri: 'https://utest-backend.herokuapp.com/paypal', 
                    body: JSON.stringify(body), 
                    headers: { 'Content-Type': 'text/plain', }, method:'POST'}} 
                    style={{marginTop:Constants.statusBarHeight}}  
                    onNavigationStateChange={data =>handleResponse(data)}
                    injectedJavaScript={INJECTEDJAVASCRIPT}
                    javaScriptEnabled = {true}
                    renderLoading = {()=><ActivityIndicator size='large' color='red'  
                    style={{
                        flex: 1, 
                        alignSelf: 'center', 
                        alignItems:'center', 
                        color: 'red',
                    }} />}
                    startInLoadingState = {true}
                    /> 

            </Modal>

            <CheckOutList route={route} cart={cart} navigation={navigation}/>

            <View style={checkout.container}>
                <View style={checkout.cell}>
                        <Text style={{
                            alignSelf: "center", 
                            color:"white", 
                            fontWeight:'bold', 
                            fontSize:20, 
                            alignItems:'center'}}>

                            US ${cart.total?Number(cart.total).toFixed(2):0.00}
                        </Text>
                </View>
                <TouchableHighlight 
                    style={[checkout.cell], checkout.button} 
                    disabled= {cart.items.length?false:true}
                    onPress={()=>setModalVisible(true)}>

                    <Text style={checkout.paypalText}>
                        Paypal Pay
                    </Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
        );
};


export default CheckOutScreen;
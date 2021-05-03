import React, {useContext} from 'react';
import CheckOutList from '../component/CheckOutList';
import CartContext from '../component/CartContext'
import { Button, SafeAreaView, Text, View, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import WebView from 'react-native-webview';



const CheckOutScreen = ({navigation, route}) => {
    const {cart, setCart} = useContext(CartContext)
    const [modalVisible, setModalVisible] = useState(false)

    const handleResponse = data => {
        if (data.title === "success") {
            setModalVisible(false)
            setCart({total:0, items:[]})
            navigation.navigate('Home')
        } else if (data.title === "cancel") {
            setModalVisible(false)
            setCart({...cart, status: "Cancelled"})
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
        amount: {currency: 'USD', total: cart.total.toFixed(2)},
        description: "Utest Paypal-SDK Checkout"
    }


  

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
            
            <Modal visible={modalVisible}>
                
                <WebView source={{
                    uri: 'http://192.168.88.77:3000/paypal', 
                    body: JSON.stringify(body), 
                    headers: { 'Content-Type': 'text/plain', }, method:'POST'}} 
                    style={{marginTop:50}}  
                    onNavigationStateChange={data =>handleResponse(data)}
                    injectedJavaScript={INJECTEDJAVASCRIPT}
                    /> 
            </Modal>

            <CheckOutList route={route} cart={cart} navigation={navigation}/>

            <View style={styles.container}>
                <View style={styles.cell}>
                        <Text style={{alignSelf: "center", color:"white", fontWeight:'bold', fontSize:20}}>
                            US ${cart.total}
                        </Text>
                </View>
                <TouchableHighlight style={styles.button} onPress={()=>setModalVisible(true)}>
                    <Text style={styles.paypalText}>
                        Paypal Pay
                    </Text>
                </TouchableHighlight>
            </View>


        </SafeAreaView>
        );
};


export default CheckOutScreen;

const styles = StyleSheet.create({
    cell: {
        flex:1
    },
    button : {
        flex: 1,
        backgroundColor: '#3b7bbf',
        borderRadius: 2,
        height: '100%',
        alignSelf: 'center',
    },
    container: {
        position: "absolute",
        flex:1, 
        flexDirection:"row",
        backgroundColor: '#FA1088',
        bottom: 0,
        width: "100%",
        alignContent: "center",
        alignItems: "center",
        height: 50,
    },
    paypalText : {
        color: 'white',
        // alignItems: 'center',
        alignSelf: 'center',
        // alignContent: 'center',
        fontSize: 20,
    }

})
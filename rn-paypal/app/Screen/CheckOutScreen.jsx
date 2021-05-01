import React, {useContext} from 'react';
import CheckOutList from '../component/CheckOutList';
import CartContext from '../component/CartContext'
import { Button, SafeAreaView, Text, View, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';
import WebView from 'react-native-webview';


// import createOrder from '../paypal/creactOder'

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

    const body = { 
        item_list: { items: [...cart.items] }, 
        amount: {currency: 'USD', total: cart.total},
        description: "From Test website"
    }



    return (
       <SafeAreaView style={{flex:1, flexDirection:"column"}}>
           
           <Modal visible={modalVisible}>
              
               <WebView source={{
                   uri: 'http://192.168.88.77:3000/paypal', body:JSON.stringify(body), headers: { 'Content-Type': 'text/plain', }, method:'POST'}} 
                   style={{marginTop:50}}  
                   onNavigationStateChange={data =>handleResponse(data)}
                   />
              
           </Modal>

           <CheckOutList route={route} cart={cart}/>
           
           
           <View style={styles.container}>
               <View style={styles.cell}>
                    <Text style={{alignSelf: "center", color:"white", fontWeight:'bold', fontSize:20}}>
                        US ${cart.total}
                    </Text>
               </View>
               <View style={styles.button}>
                   <Button title="Paypal Pay" color="white" onPress={()=>setModalVisible(true)} />
               </View>

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
        backgroundColor: '#450075',
        borderRadius: 2,
        padding:10
    },
    container: {
        position: "absolute",
        flex:1, 
        flexDirection:"row",
        backgroundColor: '#FA1088',
        bottom: 0,
        width: "100%",
        alignContent: "center",
        alignItems: "center"
    }

})
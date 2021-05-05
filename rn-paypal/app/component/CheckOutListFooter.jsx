import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


import {footer} from './styles'
const CheckOutListFooter = ({navigation, cart}) => {
   
    return (
       <TouchableWithoutFeedback
        style ={footer.backContainer}
        onPress={()=>navigation.navigate('Home')}>
           {cart.items.length ? (
               <Text style={footer.backText}>
               Continue shopping
           </Text>
            ) : null
           }
       </TouchableWithoutFeedback>
    );
};

export default CheckOutListFooter;



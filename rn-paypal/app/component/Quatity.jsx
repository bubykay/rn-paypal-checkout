import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight } from 'react-native';


import {quantity} from './styles'
const Quatity = ({sku, quatity, increaseBtn, decreaseBtn}) => {

    return (
           <View style={quantity.container}>
            <TouchableHighlight style={quantity.button} onPress={()=>decreaseBtn(sku)}>
                <Text style={quantity.btnText}>-</Text>
            </TouchableHighlight>
                <View  style={quantity.quatity}>
                    <Text style={quantity.qtyText}>{quatity}</Text>
                </View>
                <TouchableHighlight style={quantity.button} onPress={()=>increaseBtn(sku)}>
                <Text style={quantity.btnText}>+</Text>
            </TouchableHighlight>
           </View>
      
    );
};

export default Quatity;


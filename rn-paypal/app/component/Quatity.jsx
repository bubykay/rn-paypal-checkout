import React from 'react';
import { Button, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Quatity = ({sku, price, quatity, increaseBtn, decreaseBtn}) => {
    return (
           <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={()=>decreaseBtn(sku)}>
                <Text style={styles.btnText}>-</Text>
            </TouchableHighlight>
                <View  style={styles.quatity}>
                    <Text style={styles.qtyText}>{quatity}</Text>
                </View>


                <TouchableHighlight style={styles.button} onPress={()=>increaseBtn(sku)}>
                <Text style={styles.btnText}>+</Text>
            </TouchableHighlight>
           </View>
       
    );
};

export default Quatity;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: "row",
        // alignContent: "center",
        alignItems:"center",
        alignSelf: "center"
    },
    button: {
        paddingTop:2,
        paddingBottom: 2,
        paddingHorizontal: 15,
        backgroundColor: '#BDBDBD',
        borderRadius: 5
    },
    btnText: {
        color: 'white',
        fontSize: 20,
    },
    quatity: {
       width:40,
       borderWidth: 1,
       marginHorizontal:2,
       height: '100%',
       borderRadius: 3,
       borderColor: 'grey'
    },
    qtyText: { 
        alignContent: "center",
        alignSelf: "center",
        fontSize: 18
    }
})
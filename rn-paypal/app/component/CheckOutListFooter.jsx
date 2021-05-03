import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const CheckOutListFooter = ({navigation}) => {
   
    return (
       <TouchableWithoutFeedback
        style ={styles.backContainer}
        onPress={()=>navigation.navigate('Home')}>
           <Text style={styles.backText}>
               Continue shopping
           </Text>
       </TouchableWithoutFeedback>
    );
};

export default CheckOutListFooter;


const styles = StyleSheet.create({
    backContainer : {
        flex:1,
        justifyContent: "flex-end"
    },
    backText : {
        color : '#65BEFF',
        alignSelf: "flex-end",
        padding: 5
    }
})
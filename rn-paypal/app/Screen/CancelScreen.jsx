import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CancelScreen = ({navigation}) => {
    return (
       
           <View style={styles.container}>
                <View>
                    <Text style={styles.text}>
                        Payment Cancelled, you are not charged.
                    </Text>
               </View>
               <View style={styles.tryAgain}>
                    <Button 
                        title={`Try Again`} 
                        onPress={()=>navigation.navigate('checkout')} 
                        color='white' />
               </View>
               <View style={styles.goHome}>
                    <Button 
                        title={`Go Home`}
                        color={'white'} 
                        onPress={()=>navigation.navigate('Home')} 
                        />
                </View>
           </View>

    );
};

export default CancelScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    goHome:{
        backgroundColor: '#450075', 
        borderRadius: 5,
        width: '70%',
        paddingVertical: 5
   
    },
    tryAgain:{
        backgroundColor: '#FA1088', 
        borderRadius: 5,
        color: 'white',
        width: '70%',
        marginVertical: 10,
        paddingVertical: 5
    },
    text: {
        fontSize: 18,
        paddingBottom: 20
    }
})
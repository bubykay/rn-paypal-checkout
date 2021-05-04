import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const SuccessScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
                <View>
                    <Text style={styles.text}>
                       Transaction successful. Thank you.
                    </Text>
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

export default SuccessScreen;

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
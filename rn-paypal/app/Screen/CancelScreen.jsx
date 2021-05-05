import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


import {cancel} from './styles'

const CancelScreen = ({navigation}) => {
    return (
       
           <View style={cancel.container}>
                <View>
                    <Text style={cancel.text}>
                        Payment Cancelled, you are not charged.
                    </Text>
               </View>
               <View style={cancel.tryAgain}>
                    <Button 
                        title={`Try Again`} 
                        onPress={()=>navigation.navigate('checkout')} 
                        color='white' />
               </View>
               <View style={cancel.goHome}>
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



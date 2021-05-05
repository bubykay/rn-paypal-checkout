import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import {success} from './styles'
const SuccessScreen = ({navigation}) => {
    return (
        <View style={success.container}>
                <View>
                    <Text style={success.text}>
                       Transaction successful. Thank you.
                    </Text>
               </View>
               <View style={success.goHome}>
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


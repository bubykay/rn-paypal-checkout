import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";


import HomeScreen from '../Screen/HomeScreen'
import ItemDetailScreen from '../Screen/ItemDetailScreen'
import CheckOutScreen from '../Screen/CheckOutScreen';
import SuccessScreen from '../Screen/SuccessScreen';
import CancelScreen from '../Screen/CancelScreen';
import ErrorScreen from '../Screen/ErrorScreen';
const Stack = createStackNavigator();

const ItemListStack = () => {
    
    return (
        <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
                headerStyle:{
                    backgroundColor:'#FA1088',
                },
                headerTintColor: 'white',
                headerBackTitle: 'Back',
                headerTitle: '',
                headerBackTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
                
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={ItemDetailScreen} />
            <Stack.Screen name = "checkout" component={CheckOutScreen} />
            <Stack.Screen name='error' component={ErrorScreen}  />
            <Stack.Screen name='success' component={SuccessScreen} />
            <Stack.Screen name='cancel' component={CancelScreen} /> 

        </Stack.Navigator>
    );
};

export default ItemListStack;

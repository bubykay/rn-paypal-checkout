import React from 'react';
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";


import HomeScreen from '../Screen/HomeScreen'
import ItemDetailScreen from '../Screen/ItemDetailScreen'
import CheckOutScreen from '../Screen/CheckOutScreen';
import PaypalScreen from '../Screen/PaypalScreen';
const Stack = createStackNavigator();

const ItemListStack = () => {
    
    return (
        <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
                headerStyle:{
                    backgroundColor:'#FA1088',
                }   ,
                headerTintColor: 'white',
                headerBackTitle: 'Back',
                headerTitle: ' '
            }}
        
           
            >
                
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                // options={{
                //     title:"Nigeria News", 
                //     headerShown:false
                //     }} 
                    />

            <Stack.Screen name="Detail" 
            component={ItemDetailScreen} 
            options= {{headerTintColor:'white'}}
            // options={({route})=>({title:route.params.title, headerShown:false})} 
            />

            <Stack.Screen 
                name = "checkout"
                component={CheckOutScreen}
            />

            <Stack.Screen 
            name='paypal'
            component={PaypalScreen} 
            />
        </Stack.Navigator>
    );
};

export default ItemListStack;

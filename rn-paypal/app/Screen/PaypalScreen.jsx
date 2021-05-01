import React from 'react';
import {WebView} from 'react-native-webview'

const PaypalScreen = () => {
    return (
        <WebView 
        source={{
            uri: 'localhost:3000'
        }}
        onNavigationStateChange={(event)=>{
            const {url} = event
            console.log(url)
        }} 
        />
       
    );
};

export default PaypalScreen;
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {View, Text} from 'react-native'
import { Icon } from 'react-native-elements';

const CheckOutItem = ({price, title, image, id, qty}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: image}} style={{height:40, width:40}}/>
            <View style={{maxWidth: '70%', paddingLeft: 5}}>
                <Text>
                {title}
                </Text>
            </View>
            <View style={styles.rigth}>
                <Text style={styles.text}>
                    {price}
                </Text>
            </View>
            <Icon name="chevron-right" />
        </View>
    );
};

export default CheckOutItem;

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#FDFDFD',
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: "center",
        // justifyContent: 'center'
       
    },
    rigth: {
        flex: 1,
        width: '10%'
        },
    text : {
        alignSelf: "flex-end",
        
    }
})
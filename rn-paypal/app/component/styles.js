
import {StyleSheet} from 'react-native'

export const product = StyleSheet.create({
    cardContainer: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
    },
    title : {
        fontSize: 12

    }
})

export const quantity = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: "row",
        alignItems:"center",
        alignSelf: "center",
    },
    button: {
        paddingTop:2,
        paddingBottom: 2,
        paddingHorizontal: 15,
        backgroundColor: '#885A5A',
        borderRadius: 5,
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

export const footer = StyleSheet.create({
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

export const item = StyleSheet.create({
    container : {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#FDFDFD',
        paddingHorizontal: 5,
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: "center",
       
       
    },
    text : {
        alignSelf: "flex-end",
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FA1088'
        
    }
})
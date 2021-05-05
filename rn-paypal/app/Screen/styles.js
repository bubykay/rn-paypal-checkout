import {StyleSheet} from 'react-native'
export const checkout = StyleSheet.create({
    cell: {
        flex:1,
        backgroundColor: '#FA1088',
        paddingVertical: 12
    },
    button : {
        flex: 1,
        backgroundColor: '#3b7bbf',
        paddingVertical: 12,
        alignSelf: 'center',
    },
    container: {
        position: "absolute",
        flex:1, 
        flexDirection:"row",
        bottom: 0,
        width: "100%",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: '#FA1088'
    },
    paypalText : {
        color: 'white',
        alignSelf: 'center',
        fontSize: 25,
    }

})

export const success = StyleSheet.create({
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

export const itemDetails = StyleSheet.create({
    title :{
       
        fontSize: 18,
    },
    button:{
        padding: 10,
        marginTop: 10,
        backgroundColor: '#FA1088', 
        borderRadius: 10,
        color: 'white',
        flex: 1
    },
    checkout:{
        padding: 10,
        marginTop: 10,
        backgroundColor: '#450075', 
        borderRadius: 10,
        color: 'white'
    },
    infoContainer: {
        flex: 1,
        padding:10
    
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 10,
        color: '#FA1088'
    },
    submitButton: {
        position: 'absolute',
        bottom:10,
        flex: 1,
        width: '100%',
        padding: 10,
       
    },
    description : {
        lineHeight:20
    },
    info: {
        backgroundColor:'white', 
        paddingVertical:10, 
        borderRadius:10, 
        paddingHorizontal:10
    }
})

export const cancel = StyleSheet.create({
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
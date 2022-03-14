import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1
    },
    parentContainer:{
        flex:1,
        backgroundColor:'aliceblue'
    },
    uprContainer:{
        flex:0.4
    },
    lwrContainer:{
        flex:0.6,
        width:"90%",
        alignSelf:'center',
        
    },
    placeholderStyle:{
        width:'100%',
        height:"10%",
        borderWidth:1.5,
        borderColor:'rgb(245,125,70)',
        alignSelf:'center',
        backgroundColor:'ghostwhite',
        borderRadius:8,
        padding: 10,

    },
    txtUsername:{
        fontWeight:'600',
        paddingVertical:10
    },
    signInBtn:{
        height:'10%',
        width:"100%",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(245,125,70)',
        marginTop:150,
        
        
    },
    txtSignin:{
        fontWeight:'800',
        color:'white'
    },
    txtDont:{
        textAlign:'center',
        margin:10,
        fontWeight:'600'
    },
    txtSignup:{
        color:'rgb(245,125,70)',
        fontWeight:'800'
    }
})
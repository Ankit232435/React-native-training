import { StyleSheet } from "react-native";

export default StyleSheet.create({
    parentContainer:{
        flex:1,
        backgroundColor:'aliceblue'
    },
    gifStyle:{
        flex:0.7,
    },
    btnContainer:{
        flex:0.3,
        
        //  backgroundColor:'red',
        //justifyContent:'space-evenly',
        alignItems:'center'
    },
    signInBtn:{
        height:'20%',
        width:"85%",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(245,125,70)',
        marginTop:60
        //alignSelf:'center'
    },
    txtSignin:{
        fontWeight:'800',
        color:'white'
    },
    txtSignin1:{
        color:'rgb(245,125,70)',
        fontWeight:'800'

    },
    signUpBtn:{
        height:'20%',
        width:"85%",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(235,15,55)',
        marginTop:20

    },
    txtnotacc:{
        fontWeight:'800',
        color:'white',

    }
})
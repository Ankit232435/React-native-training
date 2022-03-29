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
        alignItems:'center'
    },
    signInBtn:{
        height:'20%',
        width:"85%",
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(245,125,70)',
         marginTop:20
    },
    txtSignin:{
        fontSize:18,
        fontWeight:'600',
        color:'white'
    },
    txtSignin1:{
        color:'rgb(245,125,50)',
        fontSize:18,
        fontWeight:'600',
        

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
        fontSize:18,
        fontWeight:'600',
        color:'white'

    }
})
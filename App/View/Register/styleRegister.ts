import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    flex:1
  },
  parentContainer: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  uprContainer: {
    flex: 0.4,
  },
  lwrContainer: {
    flex: 0.6,
    width:'90%',
    alignSelf:'center'
  },
  placeholderStyle:{
    width:'100%',
    borderWidth:2,
    borderColor:'rgb(245,125,70)',
    alignSelf:'center',
    backgroundColor:'ghostwhite',
    borderRadius:8,
    padding: 10,

},
txtUsername:{
    fontWeight:'600',
    paddingVertical:10,
    
},
signInBtn:{
    height:'10%',
    width:"100%",
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(245,125,70)',
    //backgroundColor:'rgb(25,30,150)',
    marginTop:20,
    
},
txtSignin:{
    fontWeight:'600',
    color:'white',
    fontSize:18,
},
txtDont:{
  fontSize:16,
    textAlign:'center',
    margin:10,
    fontWeight:'600'
},
txtSignup:{
    color:'rgb(245,125,70)',
    fontWeight:'800',
    fontSize:18,
}
});

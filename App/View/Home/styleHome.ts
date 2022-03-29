import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  headerContainer: {
    flex: 0.15,
    // backgroundColor: 'red',
    // justifyContent:'center',
    // alignItems:'flex-end',
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 0.85,
    backgroundColor: 'whitesmoke',
  },
  profileContainer: {
    flex: 0.25,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
  },
  txtUserName: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 25,
  },
  imgContainer: {
    height: 45,
    width: 45,
    borderRadius:22.5,
    backgroundColor: 'green',
    marginBottom: 15,
  },
  rightSide: {
    flex: 0.2,
    // backgroundColor: 'white',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  midSide: {
    flex: 0.6,
    // backgroundColor: 'green',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  leftSide: {
    flex: 0.2,
    // backgroundColor: 'white',
  },
  userContainer:{
      flex: 0.15,
    //   backgroundColor:'white',
      borderBottomWidth:0.3,
      borderColor:'grey',
      //margin:5,
      width:"90%",
      alignSelf:'center',
      alignItems:'center',
      //justifyContent:'center',
      flexDirection:'row',
      paddingLeft:10
  },
  imgStyle:{
      height:50,
      width:50,
      borderRadius:25
  },
  txtName:{
     paddingLeft:10,
     fontSize:18,
     fontWeight:'500'
  }
});

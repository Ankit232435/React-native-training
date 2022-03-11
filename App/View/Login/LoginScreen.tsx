import React, { useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Animated
} from 'react-native';
import LottieView from 'lottie-react-native';
import style from './styleLogin';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


interface inputProps {
  navigation: any;
  name:string;
  setName:()=>void;
  pass:number
  setPass:()=>void;
}

const LoginScreen = (newProps: any) => {
    const {navigation,name,setName,pass,setPass} = newProps;
// const pos = new Animated.Value(0)

    const position = useRef(new Animated.Value(0)).current

    Animated.timing(position,{
        toValue:2,
        useNativeDriver:true,
        duration:2000
    }).start()

    const register = async () => {

      // console.log("name",name,pass)

    //  let name = 'ankit221@gmail.com'
    //  let pass = 222222

      try {
        let response = await signInWithEmailAndPassword(auth,name, pass)
        if (response && response.user) {
          console.log("res",response)
          alert("Success ✅", "Authenticated successfully")
        }
      } catch (e) {
        console.error(e.message)
      }
    }

    // const register = () => {
    //   console.log("auth",auth)
    //     auth.createUserWithEmailAndPassword(name, pass)
    //         .then((userCredential) => {
    //             // Signed in 
    //             var user = userCredential.user;
    //             // ...
    //             user.updateProfile({
    //                 displayName: name,
    //                 photoUrl: avatar ? avatar : "https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x",
    //             })
    //                 .catch((error) => {
    //                     alert(error.message)
    //                 })
    //         })
    //         .catch((error) => {
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             // ..
    //             alert(errorMessage);
    //         });
    // }

    // const register = () => {
    //   let avatar = ""
    //   createUserWithEmailAndPassword(auth, name, pass)
    //     .then((userCredential) => {
    //         // Registered
    //         const user = userCredential.user;
    //         console.log("usser",user)
    //         updateProfile(user, {
    //             displayName: name,
    //             photoURL: avatar ? avatar : 'https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x',
    //         })
    //         .then(() => {
    //             alert('Registered, please login.');
    //         })
    //         .catch((error) => {
    //             alert(error.message);
    //         })
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         alert(errorMessage);
    //     });
    // }
   


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.parentContainer}>
        <View style={style.uprContainer}>
          <LottieView
            source={require('../../Assests/Lottie/login.json')}
            autoPlay
            loop
          />
        </View>
        <Animated.View style={[style.lwrContainer,{opacity:position}]}>
          <Text style={style.txtUsername}>Username</Text>
          <TextInput
            placeholder={'enter name'}
            onChangeText={(txt)=>setName(txt)}
            style={style.placeholderStyle}
          />
          <Text style={style.txtUsername}>Password</Text>
          <TextInput
            placeholder={'enter password'}
            onChangeText={(txt)=>setPass(txt)}
            style={style.placeholderStyle}
          />
          <TouchableOpacity 
          onPress={()=>register()}
          style={style.signInBtn}>
            <Text style={style.txtSignin}>Login</Text>
          </TouchableOpacity>
          <Text style={style.txtDont}>
            Do not have account?
            <Text
              onPress={() => navigation.navigate('Register')}
              style={style.txtSignup}>
              {' '}
              Sign Up
            </Text>
          </Text>
      </Animated.View>
        </View>
    </SafeAreaView>
  );
};

export default LoginScreen;






import React from 'react';
import {View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import style from './styleRegister';

interface inputProps {
  navigation: any;
}

const RegisterScreen = (newProps: inputProps) => {
  const {navigation} = newProps;

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
        <View style={style.lwrContainer}>
        <Text style={style.txtUsername}>Email</Text>
          <TextInput
            placeholder={'enter e-mail'}
            style={style.placeholderStyle}
          />
          <Text style={style.txtUsername}>Username</Text>
          <TextInput
            placeholder={'enter name'}
            style={style.placeholderStyle}
          />
          <Text style={style.txtUsername}>Password</Text>
          <TextInput
            placeholder={'enter password'}
            style={style.placeholderStyle}
          />
          <TouchableOpacity style={style.signInBtn}>
            <Text style={style.txtSignin}>Register</Text>
          </TouchableOpacity>
          <Text style={style.txtDont}>
            Already have account?
            <Text 
            onPress={()=>navigation.navigate('Login')}
            style={style.txtSignup}> Sign In</Text>
          </Text>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

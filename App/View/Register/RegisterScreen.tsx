import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import style from './styleRegister';
import {LOTTIE, STRINGS} from '../../Constants';

interface inputProps {
  navigation: any;
  HandleRegister: () => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  pass: string;
  setPass: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterScreen = (newProps: inputProps) => {
  const {
    navigation,
    HandleRegister,
    email,
    setEmail,
    userName,
    setUsername,
    pass,
    setPass,
  } = newProps;

  return (
    <SafeAreaView style={style.container}>
      <View style={style.parentContainer}>
        <View style={style.uprContainer}>
          <LottieView source={LOTTIE.login} autoPlay loop />
        </View>
        <View style={style.lwrContainer}>
          <Text style={style.txtUsername}>{STRINGS.email}</Text>
          <TextInput
            placeholder={STRINGS.enterEmail}
            style={style.placeholderStyle}
            onChangeText={(item)=>setEmail(item)}
          />
          <Text style={style.txtUsername}>{STRINGS.userName}</Text>
          <TextInput
            placeholder={STRINGS.enterName}
            style={style.placeholderStyle}
            onChangeText={(item)=>setUsername(item)}

          />
          <Text style={style.txtUsername}>{STRINGS.password}</Text>
          <TextInput
            placeholder={STRINGS.enterPassword}
            style={style.placeholderStyle}
            onChangeText={(item)=>setPass(item)}

          />
          <TouchableOpacity onPress={HandleRegister} style={style.signInBtn}>
            <Text style={style.txtSignin}>{STRINGS.register}</Text>
          </TouchableOpacity>
          <Text style={style.txtDont}>
            {STRINGS.alreadyHaveAccount}
            <Text
              onPress={() => navigation.navigate('Login')}
              style={style.txtSignup}>
              {' '}
              {STRINGS.signIn}
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

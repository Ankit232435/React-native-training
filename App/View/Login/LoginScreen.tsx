import React, {useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';
import LottieView from 'lottie-react-native';
import style from './styleLogin';
import {auth} from '../../../firebase';
import {
  signInWithEmailAndPassword,
} from 'firebase/auth';

import {LOTTIE, STRINGS} from '../../Constants';
import { useSelector,useDispatch } from 'react-redux';
import { SaveData } from '../../Redux/Actions/ActionCreators';

interface inputProps {
  navigation: any;
  name: string;
  setName: (item: string) => void;
  pass: string;
  setPass: (item: string) => void;
  route: any;
}

const LoginScreen = (newProps: inputProps) => {
  const {navigation, name, setName, pass, setPass, route} = newProps;

  console.log('route', route);

const data = useSelector((state:any)=>state.count)
const Dispatch = useDispatch()
console.log("data",data)

  const position = useRef(new Animated.Value(0)).current;

  

  Animated.timing(position, {
    toValue: 2,
    useNativeDriver: true,
    duration: 2000,
  }).start();

  const register = async () => {
    try {
      let response = await signInWithEmailAndPassword(auth, name, pass);
      if (response && response.user) {
        console.log('res', response);
        let data = {email:response?.user?.email,uid:response?.user?.uid};
        console.log('data', data);

        navigation.navigate('Customtab', {
          data: data,
        });
        Dispatch(SaveData(data))
        Alert.alert('Success ✅', 'Authenticated successfully');
      }
    } catch (e: any) {
      console.error(e.message);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.parentContainer}>
        <View style={style.uprContainer}>
          <LottieView source={LOTTIE.login} autoPlay loop />
        </View>
        <Animated.View style={[style.lwrContainer, {opacity: position}]}>
          <Text style={style.txtUsername}>{STRINGS.userName}</Text>
          <TextInput
            placeholder={STRINGS.enterName}
            onChangeText={txt => setName(txt)}
            style={style.placeholderStyle}
          />
          <Text style={style.txtUsername}>{STRINGS.password}</Text>
          <TextInput
            placeholder={STRINGS.enterPassword}
            onChangeText={txt => setPass(txt)}
            style={style.placeholderStyle}
          />
          <TouchableOpacity onPress={() => register()} style={style.signInBtn}>
            <Text style={style.txtSignin}>{STRINGS.logIn}</Text>
          </TouchableOpacity>
          <Text style={style.txtDont}>
            {STRINGS.doNotHaveAccount}
            <Text
              onPress={() => navigation.navigate('Register')}
              style={style.txtSignup}>
              {' '}
              {STRINGS.signUp}
            </Text>
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

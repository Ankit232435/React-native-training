import React, {useRef} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import style from './styleSplash';

interface inputProps {
  navigation: any;
}

const SplashScreen = (newProps: inputProps) => {
  const {navigation} = newProps;

  const position = useRef(new Animated.Value(-1)).current;
  const position1 = useRef(new Animated.Value(1)).current;

  Animated.timing(position, {
    toValue: 0,
    useNativeDriver: true,
    duration: 1000,
  }).start();

  Animated.timing(position1, {
    toValue: 0,
    useNativeDriver: true,
    duration: 1000,
  }).start();

  return (
    <View style={style.parentContainer}>
      <View style={style.gifStyle}>
        <LottieView
          source={require('../../Assests/Lottie/chat.json')}
          autoPlay
          loop
        />
      </View>
      <View style={style.btnContainer}>
        <Animated.View
          style={[
            style.signInBtn,
            {
              transform: [
                {
                  translateX: position.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={style.txtSignin}>Go to Sign In</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            style.signUpBtn,
            {
              transform: [
                {
                  translateX: position.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -100],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={style.txtnotacc}>
              Not account yet?
              <Text style={style.txtSignin1}> Sign up</Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default SplashScreen;

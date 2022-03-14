import React, {useRef} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styleSplash';
import {LOTTIE, STRINGS} from '../../Constants/index';
interface inputProps {
  navigation: any;
}

const SplashScreen = (props: inputProps) => {
  const {navigation} =props;
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
    <View style={styles.parentContainer}>
      <View style={styles.gifStyle}>
        <LottieView
          source={LOTTIE.chat}
          autoPlay
          loop
        />
      </View>
      <View style={styles.btnContainer}>
        <Animated.View
          style={[
            styles.signInBtn,
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
            <Text style={styles.txtSignin}>{STRINGS.goToSignIn}</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            styles.signUpBtn,
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
            <Text style={styles.txtnotacc}>
              {STRINGS.noAccountYet}
              <Text style={styles.txtSignin1}>{STRINGS.signUp}</Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default SplashScreen;

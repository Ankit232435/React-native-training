import React from 'react';
import SplashScreen from '../View/Splash/SplashScreen';

interface InputProps {
    navigation:any
}

const SplashViewModel = (props:InputProps) => {
    const {navigation} = props
    const newProps = {navigation}
  return (
    <SplashScreen {...newProps} />
  )
}

export default SplashViewModel;
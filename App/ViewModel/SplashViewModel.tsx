import React from 'react'
import SplashScreen from '../View/Splash/SplashScreen'


interface inputProps {
    navigation:any
}

const SplashViewModel = (props:inputProps) => {

    const {navigation} = props


    const newProps = {navigation}

    console.log(navigation)

  return (
    <SplashScreen {...newProps} />
  )
}

export default SplashViewModel
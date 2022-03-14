import React from 'react';
import RegisterScreen from '../View/Register/RegisterScreen';

interface inputProps { 
    navigation:any
}

const RegisterViewModel = (props:inputProps) => {
    const {navigation} = props;
    const newProps = {navigation}
  return (
    <RegisterScreen {...newProps}/>
  )
}

export default RegisterViewModel;
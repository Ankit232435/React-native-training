import React, { useState } from 'react';
import LoginScreen from '../View/Login/LoginScreen';

interface inputProps {
  navigation: any;
  name:string;
  setName:()=>void;
  pass:number;
  setPass:()=>void
}

const LoginViewModel = (props: inputProps) => {

  const [name,setName] = useState('')
  const [pass,setPass] = useState('')

  const {navigation} = props;

  const newProps = {navigation,name,setName,pass,setPass};

  console.log(name,pass)

  return <LoginScreen {...newProps} />;
};

export default LoginViewModel;

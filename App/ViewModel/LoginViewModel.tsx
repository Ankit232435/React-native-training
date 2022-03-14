import React, { useState } from 'react';
import LoginScreen from '../View/Login/LoginScreen';

interface inputProps {
  navigation: any;
  name:string;
  setName:()=>void;
  pass:number;
  setPass:()=>void;
  route:any;
}

const LoginViewModel = (props: inputProps) => {

  const [name,setName] = useState('')
  const [pass,setPass] = useState('')

  const {navigation,route} = props;

  const newProps = {navigation,route,name,setName,pass,setPass};

  console.log(name,pass)

  return <LoginScreen {...newProps} />;
};

export default LoginViewModel;

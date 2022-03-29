import React, {useState} from 'react';
import RegisterScreen from '../View/Register/RegisterScreen';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import {auth, db} from '../../firebase';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
interface inputProps {
  navigation: any;
}

const RegisterViewModel = (props: inputProps) => {
  const [email, setEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const {navigation} = props;

  const HandleRegister = () => {
    console.log('email', email);
    console.log('username', userName);
    console.log('pass', pass);

    if (email == '' && userName == '' && pass == '') {
      alert('please enter cred');
    } else {
      register();
    }
  };

  const register = () => {
    let avatar = '';
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential: any) => {
        // Registered
        const user = userCredential?.user?.auth?.currentUser;
        const email = user?.email;
        const uID = userCredential?.user?.uid

        console.log('usser', uID);
        console.log('email', email);

        updateProfile(user, {
          displayName: userName,
          photoURL: avatar
            ? avatar
            : 'https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x',
        })
          .then(() => {
            alert('Registered, please login.');
          
            addDoc(collection(db, 'users'), {
              id: email,
              name: userName,
              photoURL:
                'https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x',
                uid:uID
            });

          })
          .catch(error => {
            alert(error.message);
          });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const newProps = {
    navigation,
    HandleRegister,
    email,
    setEmail,
    userName,
    setUsername,
    pass,
    setPass,
  };

  return <RegisterScreen {...newProps} />;
};

export default RegisterViewModel;

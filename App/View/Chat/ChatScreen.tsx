import React, {useCallback, useState, useLayoutEffect, useEffect,} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {auth, db} from '../../../firebase';
import {signOut} from 'firebase/auth';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styleChat'
import { useSelector } from 'react-redux';
 import  firestore  from '@react-native-firebase/firestore'


import uuid from 'react-native-uuid';


interface inputProps {
    navigation:any;
    route:any,
    uid:any
}

const ChatScreen = (newProps: inputProps) => {
  const {navigation,route,uid} = newProps;

  const {name} = route.params

  const user =  useSelector((state:any)=>state.data)

  // console.log("name",name)
  // console.log("user",user)

  let dbName = name + " " +  user

  // const {email,id} = user

  console.log("dbname",user)


  const [messages, setMessages] = useState<any>([]);
  const signOutNow = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.replace('Login');
      })
      .catch(error => {
        // An error happened.
      });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View
          style={{
            height: 100,
            width: 100,
            marginLeft: 20,
            backgroundColor: 'green',
          }}>
          {/* <Avatar
                        rounded
                        source={{
                            uri: auth?.currentUser?.photoURL,
                        }}
                    /> */}
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
            padding: 10,
            backgroundColor: 'red',
          }}
          onPress={signOutNow}>
          <Text>logout</Text>
        </TouchableOpacity>
      ),
    });

 


    const q = query(collection(db, dbName), orderBy('id'));
    const unsubscribe = onSnapshot(q, snapshot =>
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        })),
      ),
    );

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSend = useCallback((messages = []) => {

    // const id = uuid.v4(); // ⇨ '11edc52b-2918-4d71-9058-f7285e29d894'
    // console.log('roomid', id);

    // addDoc(collection(db,dbName),{})



    // console.log('msg', messages);
    // setMessages((previousMessages: IMessage[] | undefined) =>
   
    // const {_id, createdAt, text, user} = messages[0];

    // addDoc(collection(db, dbName), {_id, createdAt,id ,text, user});


    const msg = messages[0]

    const tempMsg = {
      ...msg,
      sentBy:user.uid,
      sentForm:uid,
      createdAt:new Date()
    }

      setMessages((previousMessages : IMessage[] | undefined ) => GiftedChat.append(previousMessages,tempMsg))
    const docId = uid > user.uid ? user.uid + "-" + uid : uid + "-"+ user.uid
      // firestore().collection('chatrooms')
      // .doc(docId)
      // .collection('messages')
      // .add(tempMsg)
          const {_id, createdAt, text, user} = messages[0];


          addDoc(collection(db, "messages"), { _id,createdAt,text, user,    sentBy:user.uid,
            sentForm:uid,
            createdAt:new Date()});


    console.log("msg",msg)

  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);



  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.childContainer}>
        <GiftedChat
          messages={messages.reverse()}
          showAvatarForEveryMessage={true}
          onSend={messages => onSend(messages)}
          user={{
            _id: auth?.currentUser?.email||'',
            name: auth?.currentUser?.displayName||'',
            avatar: auth?.currentUser?.photoURL||'',
          }}
          isTyping={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

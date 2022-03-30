import React, {useCallback, useState, useLayoutEffect, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { auth,db, firebaseConfig} from '../../../firebase';
import {signOut} from 'firebase/auth';
// import  firebase from '@react-native-firebase/app';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  
} from 'firebase/firestore';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styleChat';
import {useSelector} from 'react-redux';
import firestore, { firebase } from '@react-native-firebase/firestore'


interface inputProps {
  navigation: any;
  route: any;
  uid: any;
}

const ChatScreen = (newProps: inputProps) => {
  const {navigation, route, uid} = newProps;
  const [mydb, setDb] = useState('');
  const [roomData, setRoomData] = useState([{}]);

  const {name} = route.params;

  const user1 = useSelector((state: any) => state.data);

  // console.log("name",name)
  // console.log("user",user)

  // let dbName = name + " " +  user

  // const {email,id} = user

  // console.log("dbname",user)

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

    const q = query(collection(db, 'messages'));
    const unsubscribe = onSnapshot(q, snapshot =>
      setMessages(
        snapshot.docs.map(doc => ({
          //roomId: doc.data().roomId,
          _id: doc.data().tempMsg._id,
          createdAt: doc.data().tempMsg.createdAt,
          text: doc.data().tempMsg.text,
          user: doc.data().tempMsg.user,
        })),
      ),
    );

    console.log('rooomsDB', roomData);

    // const q = query(collection(db, "TC5CXyY4BoShQWbhh0l41rVxHDx1f146st7ZWFXpgIMbTsYPuDI2Z472"));
    // const unsubscribe = onSnapshot(q, snapshot =>
    //   setMessages(
    //     snapshot.docs.map(doc => ({
    //       _id: doc.data().tempMsg._id,
    //       createdAt: doc.data().tempMsg.createdAt,
    //       text: doc.data().tempMsg.text,
    //       user: doc.data().tempMsg.user,
    //     })),
    //   ),
    // );

    return () => {
      unsubscribe();
    };
  }, [navigation]);


  useEffect(() => {


    

  //  let data = getFirestore()
  //  console.log("daaaaa",data)
  
   
  }, [])
  

  const onSend = useCallback((messages = []) => {



    

    // const id = uuid.v4(); // ⇨ '11edc52b-2918-4d71-9058-f7285e29d894'
    // console.log('roomid', id);

    // addDoc(collection(db,dbName),{})

    // console.log('msg', messages);
    // setMessages((previousMessages: IMessage[] | undefined) =>

    const {_id, createdAt, text, user} = messages[0];

    // addDoc(collection(db, dbName), {_id, createdAt,id ,text, user});

    const msg = messages[0];
    // let  user1 =  useSelector((state:any)=>state.data)
    // console.log("asdsadas")

    const tempMsg = {
      ...msg,
      sentBy: user1.uid,
      sentForm: uid,
      createdAt: new Date(),
    };



    console.log('newMsg', tempMsg);

    setMessages((previousMessages: IMessage[] | undefined) =>
      GiftedChat.append(previousMessages, {_id, createdAt, text, user}),
    );
    const docId =
      uid > user1.uid ? user1.uid + '-' + uid : uid + '-' + user1.uid;
    

      firebase.initializeApp(firebaseConfig)
      
      firestore().collection("chatrooms").doc(docId).collection('messages').add(tempMsg)

    // let to = user1.uid;
    // let from = uid;

    // let roomId = to + from;
    // console.log('roomid', mydb);
    // let reverseid = from + to;

    // roomData.map(item => {
    //   console.log("idd==>",roomId)
    //   console.log("rId",reverseid)
    //   if (item == roomId || item == reverseid) {
    //     console.log('db hai');
    //   } else {
    //     console.log('not exist');
    //   }
    // });

    // addDoc(collection(db, "messages"), {tempMsg});
    // addDoc(collection(db, 'roomId'), {docId});

    // console.log("msg",msg)
  }, []);



  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.childContainer}>
        <GiftedChat
          messages={messages.reverse()}
          showAvatarForEveryMessage={true}
          onSend={messages => onSend(messages)}
          user={{
            _id: auth?.currentUser?.uid || '',
            name: auth?.currentUser?.displayName || '',
            avatar: auth?.currentUser?.photoURL || '',
            //uid:auth?.currentUser?.uid || ''
          }}
          isTyping={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;





import React, {useCallback, useState, useLayoutEffect, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {auth, db} from '../../../firebase';
import {signOut} from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import {GiftedChat} from 'react-native-gifted-chat';
import {SafeAreaView} from 'react-native-safe-area-context';

const ChatScreen = (newProps: any) => {
  const {navigation} = newProps;

  const [messages, setMessages] = useState([]);
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

    const q = query(collection(db, 'chats'), orderBy('createdAt'));
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
      console.log("msg",messages)
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    const {_id, createdAt, text, user} = messages[0];

    addDoc(collection(db, 'chats'), {_id, createdAt, text, user});
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
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.05, backgroundColor: 'ghostwhite',alignItems:'flex-end'}}>
          <TouchableOpacity 
          onPress={()=>signOutNow()}
          style={{height:40,width:50,backgroundColor:'red',justifyContent:'center'}}
          >
        <Text>signout</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.95, backgroundColor: 'lightgrey'}}>
          <GiftedChat
            messages={messages.reverse()}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
              _id: auth?.currentUser?.email,
              name: auth?.currentUser?.displayName,
              avatar: auth?.currentUser?.photoURL,
            }}
          />
        </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

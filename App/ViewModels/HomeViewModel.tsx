import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { db } from '../../firebase'
import HomeScreen from '../View/Home/HomeScreen'

interface inputProps {
    navigation:any,
    route:any
}

const HomeViewModel = (props:inputProps) => {
    const [user,setUser] = useState([{}])
    const [count,setCount] = useState(0)
 
    const data = useSelector((state:any)=>state.data)


    const {navigation,route} = props
    
    const handleUser = (item:any) => {
      alert("hi",item)
      console.log("hi",item)
        navigation.navigate('Chat',{
          name:item,
          uid:item.uid
        })
    }
    const newProps = {user,data,route,setUser,navigation,setCount,handleUser}


    useLayoutEffect( () => {
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
              //   onPress={signOutNow}
            >
              <Text>logout</Text>
            </TouchableOpacity>
          ),
        });
    
        const q = query(collection(db, 'users'), orderBy('name'));
        onSnapshot(q, snapshot =>
          setUser(
            snapshot.docs.map(doc => ({
              id: doc.data().id,
              name: doc.data().name,
              photo:doc.data().photoURL,
              uid:doc.data().uid
            }))
          ),
        );
    
        // console.log('usersssss', user);
    
      }, [navigation]);
    
    //   useEffect(  () => {

    

    //       let tempCount = 1
    //       setCount(tempCount+1)
    //       console.log("hii")
    //       const q = query(collection(db, 'users'), orderBy('name'));
    //       const unsubscribe = onSnapshot(q, snapshot =>
    //         setUser(
    //           snapshot.docs.map(doc => ({
    //             id: doc.data().id,
    //             name: doc.data().name,
    //           }))
    //         ),
    //       );
    
    //       console.log("hii",user)
    
    
    //     // setMessages([
    //     //   {
    //     //     _id: 1,
    //     //     text: 'Hello developer',
    //     //     createdAt: new Date(),
    //     //     user: {
    //     //       _id: 2,
    //     //       name: 'React Native',
    //     //       avatar: 'https://placeimg.com/140/140/any',
    //     //     },
    //     //   },
    //     // ]);
    //   }, []);

      useEffect(()=>{
        console.log("onReRender",user)
      },[user])

  return (
  <HomeScreen
  {...newProps}
  />
  )
}

export default HomeViewModel
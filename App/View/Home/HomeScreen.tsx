import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styleHome';

interface inputProps {
  navigation: any;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  handleUser:()=>void,
  route:any,
  data:any
}

interface itemObject {
  id: string;
  name: string;
  photo: string;
}

const HomeScreen = (props: inputProps) => {
  const {user,data, setUser, navigation,route, setCount,handleUser} = props;




  // const {data } = route.params

  console.log('data', data);
  console.log('user', user);


  const RenderUser = () => {
    return user.map((item: itemObject, index: number) => (
      <TouchableOpacity 
      onPress={()=>handleUser(item)}
      style={styles.userContainer}>
        <Image
          source={{uri: item.photo}}
          style={styles.imgStyle}
          resizeMode="contain"
        />
        <Text style={styles.txtName}>{item.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftSide}></View>
        <View style={styles.midSide}>
          <Text style={styles.txtUserName}>Messages</Text>
        </View>
        <View style={styles.rightSide}>
          <TouchableOpacity style={styles.imgContainer}></TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}></View>
        <RenderUser />
      </View>
    </View>
  );
};

export default HomeScreen;




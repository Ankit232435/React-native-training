import React from "react";
import StackNav from "./StackNav";
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);



const MainApp =()=>{
    return(
        <StackNav/>
    )

}

export default MainApp;
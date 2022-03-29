import React from 'react';

import ChatScreen from '../View/Chat/ChatScreen';

interface inputProps { 
  navigation:any;
  route:any;
}

const ChatViewModel = (props:inputProps) => {
  const {navigation,route} = props

  const {uid} = route.params
  console.log("uid",uid)

  const newProps = {navigation,route,uid}
  return (
   <ChatScreen
   {...newProps}
   />
  )
}

export default ChatViewModel;
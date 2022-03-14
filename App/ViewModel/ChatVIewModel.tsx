import React from 'react'
import ChatScreen from '../View/Chat/ChatScreen'

interface inputProps { 
  navigation:any;
  route:any
}

const ChatVIewModel = (props:inputProps) => {

  const {navigation,route} = props

  const newProps = {navigation,route}


  return (
   <ChatScreen
   {...newProps}
   />
  )
}

export default ChatVIewModel
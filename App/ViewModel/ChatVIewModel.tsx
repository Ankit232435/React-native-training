import React from 'react'
import ChatScreen from '../View/Chat/ChatScreen'

interface inputProps { 
  navigation:any
}

const ChatVIewModel = (props:inputProps) => {

  const {navigation} = props

  const newProps = {navigation}


  return (
   <ChatScreen
   {...newProps}
   />
  )
}

export default ChatVIewModel
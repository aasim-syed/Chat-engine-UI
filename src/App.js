import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import DirectChat from './DirectChat';
//Using arrow function component
const App = () => {
  return (
    <>
    <ChatEngine
      userName='Dwight'//Put your userName instead
      projectID = 'a70b353c-a97d-427d-9643-307d8fc5bba8'// Your project id goes here
      userSecret='1234fb'// Replace with your secret key
    />
    <DirectChat/>
    </>
  )
}
export default App
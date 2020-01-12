import React,{useState, useEffect, useContext} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'
import InfoBar from '../infoBar/InfoBar'
import Input from '../input/Input'
import Messages from '../messages/Messages'
import TextContainer from '../textContainer/TextContainer'
import ColorContext from '../join/theme/Color'

import SelectColors from '../join/theme/SelectColors'

let socket;
const Chat = ({ location }) => {
  const{state}=useContext(ColorContext)
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT ='https://realtimechatapp123.herokuapp.com/';
  

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message ]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    })

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (

  <div style={{display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
    backgroundColor:state.color}}> 
        
      <div className="container">
<SelectColors />
          <InfoBar room={room}/>
          <Messages messages={messages} name={name} /> 
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
     
  </div>
  );
}
export default Chat;
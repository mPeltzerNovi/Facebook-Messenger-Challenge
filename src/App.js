import React, {useEffect, useState} from 'react';
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import './App.css';
import Message from "./Message";
import db from './firebase'; //Dit is de config
import firebase from 'firebase'; //!!(deze in anders dan './firebase')-->Dit is de firebase-module
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from "@material-ui/core";


function App() {
    //State aanmaken
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([

    ]);
    //Stukje state om de user te onthouden
    const [username, setUsername] = useState('');

    //Geheugensteuntje:
    // useState = variable in REACT
    // useEffect = run code on a condition in REACT

    //Tweede UseEffects maken die de messages uit de database trekt:
    useEffect(() => {
        //run once when the app component loads -->Dit haalt de messages op
        //-->!!!Dit is echt goed multi bruikbaar (uitleg rond 1:32:00) mappen van database docs en dar de data uit teruggeven
        //in de vorm van een object!!! (dit is een listener!!!). useEffect is Listener maar dit is daarbinnen weer een Listener.
        //UseEffect runs code on a condition dus.
        db.collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}))) //key toegevoegd 1:56:09!!!
        });
    }, [])


    useEffect(() => {
        setUsername(prompt('Please enter your name'))
    }, []) //(de condition)
    //(If its blank inside [], this code runs ONCE when the app component loads)


    const sendMessage = (event) => {
        //All the logic to send a message goes here
        event.preventDefault(); //(zorgt ervoor dat het niet refreshed)

        db.collection('messages').add({
            //Timestamp toevoegen:
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        //Deze code voor localhost, buiten database
        /*setMessages([
            ...messages, {username: username, text: input}
            ]);*/
        setInput('');

    }

  return (
    <div className="App">
      <h1>Hallo Messenger-CLONE gebruikers!</h1>
        <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />

      <h2>Welcome {username}</h2>

      <form className="app__form">
          <FormControl className="app__formControl">
              <InputLabel>Enter a message...</InputLabel>
              <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
              <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
                  <SendIcon />
              </IconButton>
          </FormControl>

      </form>
        <FlipMove>
            {
                messages.map(({id, message}) => (
                    <Message key={id} username={username} message={message} />

                ))
            }
        </FlipMove>



    </div>
  );
}

export default App;

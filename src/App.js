import React, {useEffect, useState} from 'react';
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import './App.css';
import Message from "./Message";
import db from './firebase'; //Dit is de config
import firebase from 'firebase'; //!!(deze in anders dan './firebase')-->Dit is de firebase-module


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
            setMessages(snapshot.docs.map(doc => doc.data()))
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
      <h1>Startpunt!</h1>
      <h2>Welcome {username}</h2>

      <form>
          <FormControl>
              <InputLabel>Enter a message...</InputLabel>
              <Input value={input} onChange={event => setInput(event.target.value)} />
              <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
          </FormControl>

      </form>

        {
            messages.map(message => (
                <Message username={username} message={message} />

            ))
        }

    </div>
  );
}

export default App;

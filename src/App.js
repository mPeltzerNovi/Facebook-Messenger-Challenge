import React, {useEffect, useState} from 'react';
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import './App.css';
import Message from "./Message";


function App() {
    //State aanmaken
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {username: 'Monique', text: 'hey guys'},
        {username: 'Lise', text: 'Whats up'}
    ]);
    //Stukje state om de user te onthouden
    const [username, setUsername] = useState('');

    //Geheugensteuntje:
    // useState = variable in REACT
    // useEffect = run code on a condition in REACT

    useEffect(() => {
        setUsername(prompt('Please enter your name'))
    }, []) //(de condition)
    //(If its blank inside [], this code runs ONCE when the app component loads)


    const sendMessage = (event) => {
        //All the logic to send a message goes here
        event.preventDefault(); //(zorgt ervoor dat het niet refreshed)
        setMessages([
            ...messages, {username: username, text: input}
            ]);
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

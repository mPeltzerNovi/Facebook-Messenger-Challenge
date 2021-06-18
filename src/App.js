import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import './App.css';
import Message from "./Message";


function App() {
    //State aanmaken
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState(['Hey!', 'Thanks', 'voor je Post!']);

    console.log(input);
    console.log(messages);

    const sendMessage = (event) => {
        //All the logic to send a message goes here
        event.preventDefault(); //(zorgt ervoor dat het niet refreshed)
        setMessages([...messages, input]);
        setInput('');

    }

  return (
    <div className="App">
      <h1>Startpunt!</h1>

      <form>
          <FormControl>
              <InputLabel>Enter a message...</InputLabel>
              <Input value={input} onChange={event => setInput(event.target.value)} />
              <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
          </FormControl>



      </form>


      {/* messages themselves */}

        {
            messages.map(message => (
                <Message text={message} />

            ))
        }

    </div>
  );
}

export default App;

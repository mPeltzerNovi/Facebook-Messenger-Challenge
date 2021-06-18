import React, { useState } from 'react';
import './App.css';


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
          <input value={input} onChange={event => setInput(event.target.value)} />
          <button type='submit' onClick={sendMessage}>Send Message</button>
      </form>


      {/* messages themselves */}

        {
            messages.map(message => (
                <p>{message}</p>
            ))
        }

    </div>
  );
}

export default App;

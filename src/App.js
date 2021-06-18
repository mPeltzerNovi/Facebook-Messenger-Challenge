import React, { useState } from 'react';
import './App.css';

//initial

function App() {
    //State aanmaken
    const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1>Startpunt!</h1>

      <input />
      <button>Send Message</button>
      {/* input field */}
      {/* button */}

      {/* messages themselves */}
    </div>
  );
}

export default App;

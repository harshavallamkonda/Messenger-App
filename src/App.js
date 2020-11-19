import React, { useState, useEffect  } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hi','nameste','yobro' ]);
  const [username, setUsername] = useState('');

  //useState = variable in React
  //useeffect = run code on a condition in React
  useEffect(() => {
   setUsername(prompt('Please enter ur name'))
}, [] )

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault(); //Used to prevent refresh the page automatically when we typed into message dabba
    // Logic to send the message
    setMessages([...messages, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1> hello Harshavallamkonda</h1>
      <h2> Welcome {username}</h2>
      
      <form>
       {/* here after Button disabled means when we keep empty field button will not work to submit */} 
      <FormControl>
  <input value= {input} onChange={event => setInput(event.target.value)}/>
  <Button disabled={!input} variant="contained" color="secondary" type= 'submit' onClick={sendMessage}>Send Message</Button>
</FormControl>
</form>
     

      {
        messages.map(message => (
          <Message text={message}/>
         
        ))
      }

      </div>
  );
}

export default App;

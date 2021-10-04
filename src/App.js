import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["hi", "nameste", "yobro"]);
  const [username, setUsername] = useState("");

  //useState = variable in React
  //useeffect = run code on a condition in React
  useEffect(() => {
    setUsername(prompt("Please enter your Name"));
  }, []);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault(); //Used to prevent refresh the page automatically when we typed into message dabba
    // Logic to send the message
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1> hello Harshavallamkonda</h1>
      <h2> Welcome {username} Hope You are Doing Great Today</h2>
      <ChatWindow sendMessage={sendMessage}/>
      {messages.map((message) => (
        <Message text={message} />
      ))}
    </div>
  );
}

export default App;

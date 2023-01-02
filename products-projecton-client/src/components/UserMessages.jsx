import React, { useState } from "react";
import {PostMessage} from "../services/ServerConect"


export const UserMessages = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const addNewMessage = async (event) => {
    event.preventDefault();
    const userMessage = {firstName,lastName,message,email};
    if (firstName.length === 0 || lastName.length === 0 || email.length === 0 ||message.length ===0) {
      alert("Please enter all required");
    } 
    else {
      alert(`Thank you for Contact us`);
      console.log(userMessage);
      await PostMessage(userMessage);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <form className="container" onSubmit={addNewMessage}>
      <div className="form-group space">
        <label for="exampleInputEmail1">First name</label>
        <input
          className="form-control space"
          id="FirstName"
          aria-describedby="emailHelp"
          placeholder="First name"
          value={firstName}
          onChange={(event)=> setFirstName(event.target.value)}
        />
      </div>
      <div className="form-group space">
        <label for="exampleInputEmail1">Last Name</label>
        <input
          className="form-control space"
          id="LastName"
          aria-describedby="emailHelp"
          placeholder="Last Name"
          value={lastName}
          onChange={(event)=>setLastName(event.target.value)}
        />
      </div>
      <div className="form-group space">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control space"
          id="Email1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange = {(event)=>setEmail(event.target.value)}
        />
        <small
          id="emailHelp"
          className="form-text text-muted"
        >
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group space">
        <label for="exampleFormControlTextarea1">User message</label>
        <textarea
          className="form-control space"
          id="Message"
          rows="3"
          value={message}
          onChange={(event)=>setMessage(event.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary space"
        
      >
        Submit
      </button>
    </form>
  );
};
import './App.css';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged,
        signOut, signInWithEmailAndPassword
} from "firebase/auth";
import {auth} from './firebase-config';

function App() {
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");
console.log(registerEmail, registerPassword);

const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
console.log(loginEmail, loginPassword);

const [user, setUser] = useState({});
console.log(user);
onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser)
})


const register = async () => {
  try {
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    console.log("clicked", user);
  } catch (error) {
    console.log(error.message);
  }
};

const login = async () => {
  try {
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log("clicked", user);
  } catch (error) {
    console.log(error.message);
  }
}

const logout = async () => {
  await signOut(auth)
}

  return (
    <div className="App">

      <div className="register">
        <h1>Register User</h1>
      <input type="text" onChange={(e) => {setRegisterEmail(e.target.value)}} placeholder="Your name"/> <br />
      <input type="password" onChange={(e) => {setRegisterPassword(e.target.value)}} placeholder="Your password"/> <br /> <br />
      <button onClick={register}> Create User</button>
      </div>

      <div className="login">
        <h1>Login</h1>
      <input type="text" onChange={(e) => {setLoginEmail(e.target.value)}} placeholder="Your name"/> <br />
      <input type="password" onChange={(e) => {setLoginPassword(e.target.value)}} placeholder="Your password"/> <br /> <br />
      <button onClick={login}>Login</button>
      </div> 
      <br /> <br />
      <h4>User LoggedIn :{user?.email} </h4>
      <button onClick={logout}>Log Out</button>

    </div>
  );
}

export default App;

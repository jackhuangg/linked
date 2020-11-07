import React, { useState } from "react";
import '../Styles/App.css';
import firebase from "firebase"
import "../firebase.js"
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Homepage from "./Homepage"

function App() {
  const [dashboard, setRedirect] = useState(false);
  const onSubmit = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
      var token = result.credential.accessToken;
      setRedirect(true);
    }).catch(function(error){
      console.log(error);
    })
  }
  if(dashboard){
    return <Homepage/>
  }
  else{
    return <div className="App">
    <h1>Welcome To Our App</h1>
    <button onClick={onSubmit}>Login with Google</button>
  </div>
  }
}

export default App;

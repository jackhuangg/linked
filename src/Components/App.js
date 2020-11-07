import React, { useEffect, useState } from "react";
import '../Styles/App.css';
import firebase from "firebase"
import "../firebase.js"
import Homepage from "./Homepage"

function App() {
  // Logic state that indicates whether
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [waitingForAuth, setWaitingForAuth] = useState(false);

  // Only run once on page load
  useEffect(() => {
    const storedCredential = localStorage.getItem("userCredential");

    if(storedCredential != null) {
      setWaitingForAuth(true);
      const authCredential = firebase.auth.AuthCredential.fromJSON(storedCredential);
      firebase.auth().signInWithCredential(authCredential)
      .then((result) => {
        setWaitingForAuth(false);
        setLoggedIn(true);
      })
      .catch(error => console.log(error));
    }
  }, []);

  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      localStorage.setItem("userCredential", JSON.stringify(result.credential.toJSON()));
      setLoggedIn(true);
    }).catch(function (error) {
      console.log(error);
    })
  }

  if(waitingForAuth) {
    return <h3>Waiting for auth...</h3>
  }
  else if (isLoggedIn) {
    return <Homepage />
  }
  else {
    return <div className="App">
      <h1>Welcome To Our App</h1>
      <button onClick={onSubmit}>Login with Google</button>
    </div>
  }
}

export default App;

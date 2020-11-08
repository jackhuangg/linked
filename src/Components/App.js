import React, { useEffect, useState } from "react";
import '../Styles/App.css';
import firebase from "firebase"
import "../firebase.js"
import Homepage from "./Homepage"

const CREDENTIAL_KEY = "userCredential";

function App() {
  const titleStyle = {
    color: "#204051",
    backgroundColor: "#E7DFD5",
    textAlign: "center"
};
  // Logic state that indicates whether
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [waitingForAuth, setWaitingForAuth] = useState(false);

  // Only run once on page load
  useEffect(() => {
    const storedCredential = localStorage.getItem(CREDENTIAL_KEY);

    if(storedCredential != null) {
      setWaitingForAuth(true);
      const authCredential = firebase.auth.AuthCredential.fromJSON(storedCredential);
      firebase.auth().signInWithCredential(authCredential)
      .then((result) => {
        setWaitingForAuth(false);
        setLoggedIn(true);
      })
      .catch(error => {
        console.log("Error signing in with credentials!");
        localStorage.removeItem(CREDENTIAL_KEY);
        setWaitingForAuth(false);
        setLoggedIn(false);
      });
    }
  }, []);

  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      localStorage.setItem(CREDENTIAL_KEY, JSON.stringify(result.credential.toJSON()));
      setLoggedIn(true);
    }).catch(function (error) {
      console.log(error);
    })
  }

  if(waitingForAuth) {
    return <h1 style={titleStyle} >
              Waiting for Authentication...
          </h1>
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

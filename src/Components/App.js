import React, { useEffect, useState } from "react";
import '../Styles/App.css';
import firebase from "firebase"
import "../firebase.js"
import Homepage from "./Homepage"

const CREDENTIAL_KEY = "userCredential";

const HeadingStyle = {
  fontStyle: "bold",
  fontWeight: "normal",
  fontSize: "50px",
  lineHeight: "57px",
  marginTop: "10px",
  marginLeft: "10px",
  color: "#204051",
  textAlign: "center"
}

const TitleStyle = {
  fontFamily: "Rock Salt",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "100px",
  lineHeight: "60px",
  marginTop: "10px",
  marginLeft: "10px",
  color: "#84A9AC",
  textAlign: "center"
}

const QuoteStyle = {
  fontWeight: "normal",
  fontSize: "20px",
  lineHeight: "40px",
  marginTop: "30px",
  marginBottom: "30px",
  color: "#204051",
  textAlign: "center"
}

function App() {
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
    return <h3>Waiting for auth...</h3>
  }
  else if (isLoggedIn) {
    return <Homepage />
  }
  else {
    return <div className="App">
      <h1 style= {HeadingStyle}>WELCOME TO</h1>
      <h1 style= {TitleStyle}>Linked</h1>
      <button onClick={onSubmit}>Login with Google</button>
      <h1 style= {QuoteStyle}>“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney</h1>
      <h1 style= {QuoteStyle}>“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers</h1>
      <h1 style= {QuoteStyle}>“The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.” – Franklin D. Roosevelt</h1>
      <h1 style= {QuoteStyle}>“Creativity Is Intelligence Having Fun.” – Albert Einstein</h1>
      <h1 style= {QuoteStyle}>“You Are Never Too Old To Set Another Goal Or To Dream A New Dream.” – C.S. Lewis</h1>
      <h1 style= {QuoteStyle}>“Today’s Accomplishments Were Yesterday’s Impossibilities.” – Robert H. Schuller</h1>
      
    </div>
  }
}

export default App;

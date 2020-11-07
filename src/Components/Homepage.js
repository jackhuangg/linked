import React from 'react'
import firebase from "firebase"
import "../firebase.js"
import ZoomLinks from "./ZoomLinks"
require('typeface-rock-salt') 

function Homepage() {
    var user = firebase.auth().currentUser.displayName;
    const mystyle = {
        color: "#204051",
        backgroundColor: "#E7DFD5",
        padding: "36px",
        fontFamily: "Rock Salt",
        textAlign: "center"
      };
    return (
        <h1 style= {mystyle} >
            <p>Linked</p>
            <ZoomLinks user={user.uid}/>
        </h1>
    )
}
export default Homepage

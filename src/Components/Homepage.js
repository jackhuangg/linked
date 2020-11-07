import React from 'react'
import firebase from "firebase"
import "../firebase.js"
import "../Styles/App.css"

function Homepage() {
    var user = firebase.auth().currentUser.displayName;
    return (
        <>
        <body>
        <div>
            <h1 style={{"textAlign":"center"}}>Linked</h1>
            <p>{user}</p>
        </div>
        </body>
        </>
    )
}
export default Homepage

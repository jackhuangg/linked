import React from 'react'
import firebase from "firebase"
import "../firebase.js"

function Homepage() {
    var user = firebase.auth().currentUser.displayName;
    return (
        <div>
            <p>{user}</p>
        </div>
    )
}
export default Homepage

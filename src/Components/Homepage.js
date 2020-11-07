import React from 'react'
import firebase from "firebase"
import "../firebase.js"
import ZoomLinks from "./ZoomLinks"

function Homepage() {
    var user = firebase.auth().currentUser;
    console.log(user.displayName);
    console.log(firebase.auth().currentUser.uid)
    return (
        <div>
            <p>{user.displayName}</p>
            <ZoomLinks user={user.uid}/>
        </div>
    )
}
export default Homepage

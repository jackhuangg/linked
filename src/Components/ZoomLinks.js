import React, { useState, useEffect } from "react";
import db from "../firebase.js"
import AddForm from "./AddForm"

function ZoomLinks(props) {
    const firebasevar = props.user+"zoomlinks"
    const [ZoomLinks, setZoomLinks] = useState([]);
    useEffect(() => {
    db.collection(firebasevar)
        .orderBy("createdAt")
        .onSnapshot((snapshot) =>
        setZoomLinks(snapshot.docs.map((doc) => doc.data()))
      );
    }, [firebasevar]);
    console.log(ZoomLinks)
    return (
        <div>
           {ZoomLinks.map((zoomlink) => (
                <p>{zoomlink.event}</p>
            ))} 
            <AddForm collection={firebasevar}/>
        </div>
    )
}

export default ZoomLinks

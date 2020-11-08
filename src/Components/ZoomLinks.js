import React, { useState, useEffect } from "react";
import db from "../firebase.js"
import AddForm from "./AddForm"

const ZoomLinksStyle = {
    backgroundColor: "#3B6978",
    border: "4px solid #204051",
    boxSizing: "border-box",
    borderRadius: "18px",
}

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
        <div style={ZoomLinksStyle}>
           {ZoomLinks.map((zoomlink) => (
                <p>{zoomlink.event}</p>
            ))} 
            <AddForm collection={firebasevar}/>
        </div>
    )
}

export default ZoomLinks

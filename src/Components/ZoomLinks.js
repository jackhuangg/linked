import React, { useState, useEffect } from "react";
import db from "../firebase.js"
import AddForm from "./AddForm"

const ZoomLinksStyle = {
    height: "500px",
    width: "300px",
    backgroundColor: "#84A9AC",
    border: "4px solid #84A9AC",
    boxSizing: "border-box",
    borderRadius: "18px",
}

const HeadingStyle = {
    fontFamily: "Rock Salt",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "57px",
    marginTop: "0px",
    marginLeft: "10px",
    color: "#E7DFD5"
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
        <div>
            <div style={ZoomLinksStyle}>
                <h1 style={HeadingStyle}>Zoom Links</h1>
                {ZoomLinks.map((zoomlink) => (
                    <p>{zoomlink.event}</p>
                ))} 
                <AddForm collection={firebasevar}/>
            </div>
        </div>
    )
}

export default ZoomLinks

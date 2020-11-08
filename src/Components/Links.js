import React, { useState, useEffect } from "react";
import db from "../firebase.js"
import AddForm from "./AddForm"

const LinksStyle = {
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

function Links(props) {
    const firebasevar = props.user+"links"
    const [Links, setLinks] = useState([]);
    useEffect(() => {
    db.collection(firebasevar)
        .orderBy("createdAt")
        .onSnapshot((snapshot) =>
        setLinks(snapshot.docs.map((doc) => doc.data()))
      );
    }, [firebasevar]);
    console.log(Links)
    return (
        <div>
            <div style={LinksStyle}>
                <h1 style={HeadingStyle}>Links</h1>
                {Links.map((link) => (
                    <p>{link.event}</p>
                ))} 
                <AddForm collection={firebasevar}/>
            </div>
        </div>
    )
}

export default Links

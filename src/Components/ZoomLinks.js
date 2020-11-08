import React, { useState, useEffect } from "react";
import db from "../firebase.js"
import AddForm from "./AddForm"

const ZoomLinksStyle = {
    backgroundColor: "#3B6978",
    border: "4px solid #204051",
    boxSizing: "border-box",
    borderRadius: "18px",
    width: "448px",
    height: "376px"
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
    return (
        <div style={ZoomLinksStyle}>
        <h1 style={HeadingStyle}>Zoom Links</h1>
           {props.user.zoomlinks.map((zoomlink) => (
                <p>{zoomlink}</p>
            ))} 
            <AddForm updateUser={props.updateUser} user={props.user}/>
        </div>
    )
}

export default ZoomLinks

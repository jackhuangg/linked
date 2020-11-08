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
    return (
        <div style={ZoomLinksStyle}>
           {props.user.zoomlinks.map((zoomlink) => (
                <p>{zoomlink}</p>
            ))} 
            <AddForm updateUser={props.updateUser} user={props.user}/>
        </div>
    )
}

export default ZoomLinks

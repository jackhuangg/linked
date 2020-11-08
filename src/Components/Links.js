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
    marginLeft: "0%",
    marginRight: "0%"
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

function Links({ user, updateUser }) {
    return (
        <div style={LinksStyle}>
            <div>
                <h1 style={HeadingStyle}>Links</h1>
            </div>
            { user.links.map(link => {
                return (<p>{link}</p>);
            }) }
            <AddForm user={user} updateUser={updateUser} updateType="links" />
        </div>
    )
}

export default Links

import React, { useState, useEffect } from "react";
import AddForm from "./AddForm"

const LinksStyle = {
    height: "103%",
    width: "450px",
    backgroundColor: "#84A9AC",
    border: "4px solid #84A9AC",
    boxSizing: "border-box",
    borderRadius: "18px",
    marginTop:"8.5%",
    marginBottom: "14%",
    marginRight: "1%",


}

const HeadingStyle = {
    fontFamily: "Rock Salt",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "57px",
    marginTop: "10px",
    marginLeft: "0px",
    color: "#E7DFD5"
}

function Goals({user, updateUser}) {
    return (
        <div>
            <div style={LinksStyle}>
                <h1 style={HeadingStyle}>Goals</h1>
                {user.goals.map((goal) => (
                    <p>{goal}</p>
                ))} 
                <AddForm user={user} updateUser={updateUser} updateType={"goals"} />
            </div>
        </div>
    )
 }

 export default Goals

import React from 'react'
import AddForm from "./AddForm"
import db from "../firebase.js"

const LinksStyle = {
    height: "230px",
    width: "383px",
    backgroundColor: "#84A9AC",
    border: "4px solid #204051",
    boxSizing: "border-box",
    
    marginTop:"37%",
    marginBottom: "14%",

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

function Goals() {
    return (
        <div>
            <div style={LinksStyle}>
                <h1 style={HeadingStyle}>Goals</h1>
                {user.goals.map((goal) => (
                    <p>{goal}</p>
                ))} 
                <AddForm user={user} updateUser={goal} updateType={"goal"} />
            </div>
        </div>
    )
 }

 export default Goals

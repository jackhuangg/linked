import React from 'react'
import AddForm from "./AddForm"
import db from "../firebase.js"

const LinksStyle = {
    height: "230px",
    width: "383px",
    backgroundColor: "#84A9AC",
    border: "4px solid #204051",
    boxSizing: "border-box",
    borderRadius: "14px",
    marginTop:"77%",
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
            
            <h1 style={HeadingStyle}>Goals</h1>
            <div style={LinksStyle}>
                {Goals.map((goal) => (
                    <p>{goal.event}</p>
                ))} 
                <AddForm collection={firebasevar}/>
            </div>
        </div>
    )
 }

 export default Goals

import React, { useState, useEffect } from "react";
import AddForm from "./AddForm"

const ListStyle = {
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

function TodoList({ user, updateUser }) {
    return (
        <div>
            <div style={ListStyle}>
                <h1 style={HeadingStyle}>To Do List</h1>
                {user.todolist.map((todo) => (
                    <p>{todo}</p>
                ))} 
                <AddForm user={user} updateUser={updateUser} updateType={"todolist"} />
            </div>
        </div>
    )
}
export default TodoList

import React, { useState, useEffect } from "react";
import db from "../firebase.js"
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

function TodoList(props) {
    const firebasevar = props.user+"todolist"
    const [TodoList, SetTodoList] = useState([]);
    useEffect(() => {
    db.collection(firebasevar)
        .orderBy("createdAt")
        .onSnapshot((snapshot) =>
        SetTodoList(snapshot.docs.map((doc) => doc.data()))
      );
    }, [firebasevar]);
    console.log(TodoList)
    return (
        <div>
            <div style={ListStyle}>
                <h1 style={HeadingStyle}>To Do List</h1>
                {TodoList.map((todolist) => (
                    <p>{todolist.event}</p>
                ))} 
                <AddForm collection={firebasevar}/>
            </div>
        </div>
    )
}
export default TodoList

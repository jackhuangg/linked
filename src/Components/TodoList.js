import React, { useState, useEffect } from "react";
import AddForm from "./AddForm";
import LinkDisplay from "./LinkDisplay";
import { Container } from "react-grid-system";

const ListStyle = {
    position: "relative",
    height: "665px",
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
    marginLeft: "1%",
    color: "#E7DFD5"
}

function TodoList({ user, updateUser }) {
    const onDelete = (index) => () => {
        user.todolist.splice(index, 1);
        updateUser(user);
    };

    return (
        <div>
            <div style={ListStyle}>
                <h1 style={HeadingStyle}>To Do List</h1>
                <Container>
                    {user.todolist.map((list, index) => {
                        return (<LinkDisplay link={list} onDelete={onDelete(index)} />);
                    })}
                </Container>
                <AddForm user={user} updateUser={updateUser} updateType={"todolist"} />
            </div>
        </div>
    )
}
export default TodoList

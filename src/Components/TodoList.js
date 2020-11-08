import React from 'react'

const data = {
    todos: ["do homework", "study"]
};

const ListStyle = {
    height: "787px",
    width: "383px",
    color: "#E7DFD5",
    backgroundColor: "#84A9AC",
    border: "4px solid #84A9AC",
    boxSizing: "border-box",
    borderRadius: "14px",
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

function TodoList() {
    return (
       /* <div style= {ListStyle}>
            {data.todos.map(todos => <ul style= {mystyle}>{todos}</ul>)}

        </div>*/
        <div style={ListStyle}>
            <div>
                <h1 style={HeadingStyle}>To Do List</h1>
            </div>
            <ul>
                {data.todos.map(todos => <ul>{todos}</ul>)}   
            </ul>
        </div>
    )
}
export default TodoList

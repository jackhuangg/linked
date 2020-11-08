import React, { useState, useEffect } from 'react'
import firebase from "firebase"
import "../firebase.js"
import db from "../firebase.js"
import ZoomLinks from "./ZoomLinks"
import Links from "./Links";
import TodoList from "./TodoList";
import Goals from "./Goals";
import { Container, Row, Col } from 'react-grid-system';

require('typeface-rock-salt')

function Title() {
    const titleStyle = {
        color: "#204051",
        backgroundColor: "#E7DFD5",
        fontFamily: "Rock Salt",
        textAlign: "center"
    };
    return (
        <h1 style={titleStyle} >
            Linked
        </h1>
    )
}

function Homepage() {
    const user = firebase.auth().currentUser;

    // Firebase User to pass down to the props
    const [firebaseUser, setFireBaseUser] = useState({
        goals: [],
        zoomlinks: [],
        links: [],
        todolist: []
    });

    // Load the firebase user from firestore
    useEffect(() => {
        const userRef = db.collection("users").doc(user.uid);

        userRef.get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    const userData = snapshot.data();
                    // Check if user data exists
                    if (!userData["todolist"])
                        userData["todolist"] = [];
                    setFireBaseUser(userData);
                }
                else {
                    updateUser(firebaseUser);
                }
            });
    },);

    // Update user to update the user on firestore
    const updateUser = (object) => {
        const userRef = db.collection("users").doc(user.uid);
        userRef.set(object).then();
        const userClone = { ...object };
        setFireBaseUser(userClone);
    };

    return (
        <>
            <Title />
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <ZoomLinks user={firebaseUser} updateUser={updateUser} />
                        </Row>
                        <Row>
                            <Goals user={firebaseUser} updateUser={updateUser} />
                        </Row>
                    </Col>
                    <Col>
                        <Links user={firebaseUser} updateUser={updateUser} />
                    </Col>
                    <Col>
                        <TodoList user={firebaseUser} updateUser={updateUser} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Homepage

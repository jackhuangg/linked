import React from 'react'
import firebase from "firebase"
import "../firebase.js"
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
    return (
        <>
            <Title />
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <ZoomLinks />
                        </Row>
                        <Row>
                            <Goals />
                        </Row>
                    </Col>
                    <Col>
                        <Links />
                    </Col>
                    <Col>
                        <TodoList />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Homepage

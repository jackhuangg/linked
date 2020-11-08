import React, { useState, useEffect } from "react";
import { Container } from "react-grid-system";
import AddForm from "./AddForm";
import LinkDisplay from "./LinkDisplay";

const LinksStyle = {
    position: "relative",
    height: "94%",
    width: "300px",
    backgroundColor: "#84A9AC",
    border: "4px solid #84A9AC",
    boxSizing: "border-box",
    borderRadius: "18px",
    marginLeft: "4%",
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
    const onDelete = (index) => () => {
        user.links.splice(index, 1);
        updateUser(user);
    };

    return (
        <div style={LinksStyle}>
            <div>
                <h1 style={HeadingStyle}>Links</h1>
            </div>
            <Container>
            { user.links.map((link, index) => {
                return (<LinkDisplay link={link} onDelete={onDelete(index)} />);
            }) }
            </Container>
            <AddForm user={user} updateUser={updateUser} updateType="links" />
        </div>
    )
}

export default Links

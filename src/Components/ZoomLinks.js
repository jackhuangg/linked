import React, { useState, useEffect } from "react";
import AddForm from "./AddForm"
import { Container } from "react-grid-system";
import LinkDisplay from "./LinkDisplay";

const ZoomLinksStyle = {
    position: "relative",
    height: "500px",
    width: "300px",
    backgroundColor: "#84A9AC",
    border: "4px solid #84A9AC",
    boxSizing: "border-box",
    borderRadius: "18px",
    width: "448px",
    height: "376px"
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

function ZoomLinks(props) {
    const onDelete = (index) => () => {
        props.user.zoomlinks.splice(index, 1);
        props.updateUser(props.user);
    };

    return (
        <div style={ZoomLinksStyle}>
        <h1 style={HeadingStyle}>Zoom Links</h1>
        <Container>
            { props.user.zoomlinks.map((link, index) => {
                return (<LinkDisplay link={link} onDelete={onDelete(index)} isHref={true} />);
            }) }
        </Container>
        <AddForm updateUser={props.updateUser} user={props.user} updateType="zoomlinks" />
        </div>
    )
}

export default ZoomLinks

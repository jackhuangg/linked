import React from 'react'

const LinksStyle = {
    height: "787px",
    width: "383px",
    backgroundColor: "#3B6978",
    border: "4px solid #204051",
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

function Links() {
    return (
        <div style={LinksStyle}>
            <div>
            <h1 style={HeadingStyle}>Links</h1>
            </div>
        </div>
    )
}

export default Links

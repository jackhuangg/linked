import React from "react";
import { Row, Col } from "react-grid-system";

function LinkDisplay({ link, onDelete, isHref }) {

    return (
    <Row>
        <Col>
            { isHref ? <a href={"http://" +  link} target="_blank">{link}</a> : <p>{link}</p> }
        </Col>
        <Col>
            <button style={{ position: "absolute", right: "5%", top: "25%" }}
             onClick={onDelete}
             >Delete</button>
        </Col>
    </Row>
    );
}

export default LinkDisplay
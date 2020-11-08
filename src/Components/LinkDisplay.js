import React from "react";
import { Row, Col } from "react-grid-system";

function LinkDisplay({ link, onDelete }) {

    return (
    <Row>
        <Col>
            <p>{link}</p>
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
import React from "react";
import "../styles/Aurora.css";
import "../styles/fonts.css";
import { Container, Row, Col } from "react-bootstrap";

const Origin = () => {
  return (
    <div className="content font1">
      <h3 className="title">
        Origen de una noche en la tecnica
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </h3>
      <Container>
        <Row>
          <Col>
            <br></br>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Origin;

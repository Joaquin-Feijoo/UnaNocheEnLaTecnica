import React from "react";
import "../styles/Aurora.css";
import { Container, Row, Col } from "react-bootstrap";
import MyCarousel from "./MyCarousel";
import "../styles/fonts.css";

const Images = () => {
  return (
    <div className="content">
      <h3 className="title font1">
        Imagenes de una noche en la tecnica
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
            <MyCarousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Images;

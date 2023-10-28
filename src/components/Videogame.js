import React from "react";
import "../styles/Aurora.css";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/fonts.css";

const Videogame = () => {
  return (
    <div className="content font1">
      <h3 className="title">
        Juego una noche en la tecnica
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
            <iframe
              height="167"
              frameborder="0"
              src="https://itch.io/embed/2140562"
              width="552"
            >
              <a href="https://winonarider.itch.io/the-catcher">
                The Watcher by WinonaRider
              </a>
            </iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Videogame;

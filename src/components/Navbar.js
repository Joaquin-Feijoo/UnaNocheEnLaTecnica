import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Alert,
} from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import "../styles/fonts.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const searchMap = {
    inicio: "/",
    Inicio: "/",
    principal: "/",
    Principal: "/",
    origen: "/Origin",
    Origen: "/Origin",
    imagenes: "/Images",
    Imagenes: "/Images",
    imágenes: "/Images",
    Imágenes: "/Images",
    fotos: "/Images",
    Fotos: "/Images",
    juego: "/Videogame",
    Juego: "/Videogame",
    jueguito: "/Videogame",
    Jueguito: "/Videogame",
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const path = searchMap[searchQuery.toLowerCase()];

    if (path) {
      navigate(path);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div className="navbar-container font2">
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Ha ocurrido un error</Alert.Heading>
          <p>No se ha encontrado el resultado. Por favor, intente de nuevo.</p>
        </Alert>
      )}
      <BootstrapNavbar
        bg="transparent"
        variant="dark"
        expand="lg"
        className="justify-content-center"
      >
        <BootstrapNavbar.Brand as={Link} to="/">
          <img
            src={
              "https://img.itch.zone/aW1nLzEyNjIxNTczLmpwZw==/32x32%23/hovlpf.jpg"
            }
            width="30"
            height="30"
            className="d-inline-block align-top rounded-logo logo-margin"
            alt="Logo"
          />
          Una noche en la tecnica
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Mas informacion" id="basic-nav-dropdown">
              <CSSTransition
                in={true}
                timeout={300}
                classNames="my-node"
                unmountOnExit
              >
                <>
                  <NavDropdown.Item as={Link} to="/Origin">
                    Origen
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Images">
                    Imagenes
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Videogame">
                    Juego
                  </NavDropdown.Item>
                </>
              </CSSTransition>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
        <Form
          inline
          onSubmit={handleSearchSubmit}
          className="search-form justify-content-between"
        >
          <FormControl
            type="text"
            placeholder="Buscar"
            className="mr-sm-2"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </Form>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;

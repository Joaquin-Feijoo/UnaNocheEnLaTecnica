import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <body>
        <AppRoutes />
      </body>
    </Router>
  );
};

export default App;

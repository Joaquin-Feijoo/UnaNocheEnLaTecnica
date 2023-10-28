import React from "react";
import "../styles/Aurora.css";
import "../styles/fonts.css"

const Home = () => {
  return (
    <div className="content font1">
      <h1 className="title">
        Una noche en la tecnica
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </h1>
    </div>
  );
};

export default Home;

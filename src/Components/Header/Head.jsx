import React from "react";
import logo from "../../images/logo.png";
import logo1 from "../../images/headerb.png";
import "./Header.css";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="ad">
            <img src={logo1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;

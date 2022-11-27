import React, { useState } from "react";
import Head from "./Head";
import "./Header.css";
import { a } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <a to="/">Home</a>
              </li>
              <li>
                <a to="/culture">Culture</a>
              </li>
              <li>
                <a to="/politics">Politics</a>
              </li>
              <li>
                <a to="/memes">Memes</a>
              </li>
              <li>
                <a to="/sports">Sports</a>
              </li>
              <li>
                <a to="/boxed">Boxed</a>
              </li>
              <li>
                <a to="/reviews">Reviews</a>
              </li>
            </ul>
            {/* <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import techlogo from "../../images/tech-logo-footer.png";
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import hero3 from "../../images/hero3.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src={techlogo} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              beatae soluta voluptatem aperiam magni corrupti?
            </p>
            <i className="fa fa-envelope"></i>
            <span>hello@gmail.com</span>
            <br />
            <i className="fa fa-headphones"></i>
            <span>+9779898989898</span>
          </div>
          <div className="box">
            <h3>Sports</h3>
            <div className="item">
              <img src={hero1} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="item">
              <img src={hero2} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="box">
            <h3>Cricket</h3>
            <div className="item">
              <img src={hero3} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="item">
              <img src={hero1} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="box">
            <h3>Labels</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <div className="container flexSB">
          <p> &copy; all right reserved</p>
          <p>
            made with <i className="fa fa-heart"></i> by the help of youtube
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

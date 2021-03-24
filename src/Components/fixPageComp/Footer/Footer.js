import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
import "./Footer.css";
import { useAuth } from "../../../Context/AuthContext";

const Footer = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <footer className="footer_part">
        <div className="footer_top">
          <div className="footer_nav">
            <div className="foot_logo">
              <Logo />
            </div>
            <div className="foot_nav">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/product">Products</Link>
              {currentUser?.uid ? null : <Link to="/login">Login</Link>}
              {currentUser?.uid ? <Link to="/profile">Profile</Link> : null}
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer_social">
              <Link to="/">
                {" "}
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="/">
                {" "}
                <i className="fa fa-instagram"></i>
              </Link>
              <Link to="/">
                {" "}
                <i className="fa fa-google-plus"></i>
              </Link>
              <Link to="/">
                {" "}
                <i className="fa fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="bottom_contain">
            <div>Terms and Conditions</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";

const NavigationItems = (props) => {
  const { currentUser } = useAuth();
  return (
    <span>
      <ul className="NavigationItems">
        <NavigationItem>
          <Link to="/">Home</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/about">About</Link>
        </NavigationItem>
        <div className="product_nav">
          <NavigationItem>
            <Link to="/product">Product</Link>
          </NavigationItem>
        </div>
        <div className="nav-category-option">
          <div onClick={() => {}} className="option-nav">
            <button value="pillow">Pillow</button>
            <button value="mattress">Mattress</button>
            <button value="bed">Bed</button>
            <button value="night lamp">Night Lamp</button>
          </div>
        </div>

        {currentUser?.uid ? null : (
          <NavigationItem>
            <Link to="/login">Login</Link>
          </NavigationItem>
        )}
        {currentUser?.uid ? (
          <NavigationItem>
            <Link to="/profile">Profile</Link>
          </NavigationItem>
        ) : null}

        <NavigationItem>Contact</NavigationItem>
      </ul>
    </span>
  );
};

export default NavigationItems;

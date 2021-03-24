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
            <button value="Low to High">Category 1</button>
            <button value="High to Low">Category 2</button>
            <button value="High to Low">Category 3</button>
            <button value="High to Low">Category 4</button>
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

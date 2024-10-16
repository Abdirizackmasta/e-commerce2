import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import { UseShopContext } from "../../contexts/ShopContext";

import { IoIosArrowDropdown } from "react-icons/io";

function Navbar() {
  const [openMenu, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = UseShopContext();
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>Masta</p>
        <NavLink to={"/"}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <IoIosArrowDropdown onClick={dropdown_toggle} className="nav-dropdown" />
      <ul
        className="nav-menu"
        ref={menuRef}
        style={{ right: `${openMenu ? "10px" : "-200px"}` }}
      >
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/">
            Shop
          </NavLink>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/mens">
            Mens
          </NavLink>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/women">
            Women
          </NavLink>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/kids">
            Kids
          </NavLink>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {
          localStorage.getItem('auth-token') ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button> : <Link to="login">
          <button>Login</button>
        </Link>
        } 
        <Link to="cart">
          <img src={cart_icon} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;

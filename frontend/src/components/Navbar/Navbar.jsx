import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("");
  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout =()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
  }
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact Us")}
          className={menu === "contact Us" ? "active" : ""}
        >
          {" "}
          contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" className="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {
          !token? <button onClick={() => setShowLogin(true)}>Sign In</button>
          : <div className="navbar-profile">
            <img src={assets.profile_icon} alt=""  />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" className="" /><p>Orders</p> </li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" className="" /> <p>Logout</p> </li>
            </ul>
          </div>
        }
       
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
/* import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; */
/* import SearchIcon from "@mui/icons-material/Search"; */
/* import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"; */
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          {/* <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div> */}
          <div className="item">
            <NavLink className ="link" to="/products/1">Women</NavLink>
          </div>
          <div className="item">
            <NavLink className ="link" to="/products/2">Men</NavLink>
          </div>
          <div className="item">
            <NavLink className ="link" to="/products/3">Children</NavLink>
          </div>
        </div>
        <div className="center">
          <NavLink className ="link" to="/">SHESHOP</NavLink>
        </div>
        <div className="right">
          <div className="item">
            <NavLink className ="link" to="/">Home</NavLink>
          </div>
{/*        <div className="item">
            <NavLink className ="link" to="/">About</NavLink>
          </div> */}
          <div className="item">
            <NavLink className ="link" to="/ContactPage">Contact</NavLink>
          </div>
        {/* <div className="item">
            <NavLink className ="link" to="/">Stores</NavLink>
          </div> */}
          <div className="icons">
          {/* <SearchIcon/> */}
          {/*<PersonOutlineOutlinedIcon/> */}
            <NavLink to="/Wishlist"> <FavoriteBorderOutlinedIcon/> </NavLink>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;

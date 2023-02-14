import { SlBag } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlMagnifier } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Nav() {
  const [menuShown, setMenuShown] = useState(false);
  const [formShown, setFormShown] = useState(false);
  const showMenu = () => setMenuShown((prevMenuShown) => !prevMenuShown);
  const showForm = () => {
    setMenuShown(false);
    setFormShown((prevFormShown) => !prevFormShown);
  };
  return (
    <>
      <div className="nav">
        <div className="icons">
          {!menuShown ? (
            <RxHamburgerMenu onClick={showMenu} className="icon" />
          ) : (
            <GrClose onClick={showMenu} className="icon" />
          )}
          <SlMagnifier className="icon-magnifier" />
        </div>
        <p className="logo-img">YourLogo</p>
        <Link className="cartLink" to="/cart">
          <SlBag className="icon" />
        </Link>
      </div>
      <div className={!menuShown ? "menu" : "menu menu-active"}>
        <ul className="menu-items">
          <li className="menu-item">All brands</li>
          <li className="menu-item">About us</li>
          <li className="menu-item">Contacts</li>
          <li onClick={showForm} className="menu-item">
            Account
          </li>
        </ul>
      </div>
      <div className={!formShown ? "form-cont" : "form-cont form-active"}>
        <form>
          <GrClose onClick={showForm} className="icon icon-form" />
          <input
            className="form-text"
            type="text"
            placeholder="Login / Phone number"
          />
          <input className="form-text" type="text" placeholder="Password" />
          <button className="form-btn">Login</button>
        </form>
      </div>
    </>
  );
}

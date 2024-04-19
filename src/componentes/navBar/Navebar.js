import React from "react";
import logo from "../../images/logopng 2.png";
import style from "./navbar.module.css";
import { Link, NavLink } from "react-router-dom";
function Navebar() {
  return (
    <nav className={`navbar navbar-expand-lg ${style.navBar} `}>
      <div className="container">
        <a className={`navbar-brand ${style.navBrand}`} href="#">
          <img
            src={logo}
            className={`${style.logo} img-fluid`}
            alt="logo"
          ></img>
        </a>
        {/* <img src={logo} className={`${style.logo}`} alt="logo"></img> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={`/`}>
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                من نحن
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                اتصل بنا{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                الدعم الفني{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                أرقام التشغيل{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                سياسة الخصوصية{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navebar;

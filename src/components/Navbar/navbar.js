import React from "react";
import Profile from "./assets/img/Wensy2.jpg";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Wensy Sompa</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-20"
            src={Profile}
            alt="profile"
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              about
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#Experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interest">
              Interests
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
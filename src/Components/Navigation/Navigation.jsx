import React, { useState } from "react";
import logonav from "../../../src/assets/nbglogo.jpg";
import search from "../../assets/search.png";
import nav from "../../assets/nav.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navLinks = [
    { path: "/", text: <b>Home</b> },
    { path: "/about", text: <b>About</b> },
    { path: "/practice", text: <b>Practice Areas</b> },
    { path: "/how", text: <b>How We Do it</b> },
    { path: "/contact", text: <b>Contact</b> },
  ];

  const preventDefault = (event) => {
    event.preventDefault();
  };

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const path = navLinks.find(
      (link) => link.text.props.children === searchValue
    )?.path;
    if (path) {
      window.location.pathname = path;
    }
  };

  return (
    <div className="container-fluid bg-light">
      <div className="row align-items-center">
        <div className="col-4 col-md-2">
          <Link to="/">
            <img
              src={logonav}
              alt=""
              className="img-fluid p-3"
              style={{ maxWidth: "100px" }}
              onContextMenu={preventDefault}
            />
          </Link>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <ul
            className="nav justify-content-center"
            style={{ fontSize: "18px" }}
          >
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link"
                  to={link.path}
                  style={{ color: "black" }}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-8 col-md-4">
          <div className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="d-flex">
              <div className="col-10">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                  list="suggestions"
                  value={searchValue}
                  onChange={handleInputChange}
                />
                <datalist id="suggestions">
                  {navLinks.map((link, index) => (
                    <option key={index} value={link.text.props.children} />
                  ))}
                </datalist>
              </div>
              <div className="col-2">
                <button
                  type="submit"
                  style={{ border: "none", background: "none" }}
                >
                  <img
                    src={search}
                    alt=""
                    style={{
                      height: "25px",
                      width: "20px",
                      marginLeft: "25px",
                      marginTop: "25px",
                    }}
                    onContextMenu={preventDefault}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Swift bar for smaller screens */}
        <div className="col-12 d-md-none">
          <div className="nav-divider">
            <button className="nav-toggle" onClick={toggleNav}>
              <img src={nav} alt="" style={{ height: "25px", width: "20px" }} />
            </button>
            {isNavVisible && (
              <ul className="nav flex-column">
                {navLinks.map((link, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      className="nav-link"
                      to={link.path}
                      style={{ color: "black" }}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

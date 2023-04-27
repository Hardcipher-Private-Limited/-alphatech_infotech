import React, { useCallback, useState } from "react";
import "../UIStyle/NavBar.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

function NavBar() {
  const Navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(true);

  function handleOpen() {
    setMenuOpen(menuOpen);
  }
  function handleHome() {
    Navigate("/");
  }

  function HandleAbout() {
    window.scrollTo(0, 0);
    Navigate("./About");
  }
  function handleProduct() {
    Navigate("./product");
  }
  function handleFranchise() {
    Navigate("./franchise");
  }
  function handleContect() {
    Navigate("./contect");
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light NavBarColor">
        <div class="container-fluid">
          <a href="#" class="navbar-brand">
            <img
              src="/Images/LOGO.png"
              alt="image-fluid"
              style={{ width: 290, height: 90 }}
              onClick={handleHome}
            />
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span
              class="navbar-toggler-icon"
              onClick={() => setMenuOpen(!menuOpen)}
            ></span>
          </button>
          {menuOpen && (
            <div
              class="collapse navbar-collapse middleNavBar   InLineCenter"
              id="navbarCollapse"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div class="navbar-nav">
                <a
                  href="#"
                  onClick={handleHome}
                  className="nav-item nav-link active boxmodels"
                >
                  HOME
                </a>
                <a
                  href="#"
                  class="nav-item nav-link active boxmodels"
                  onClick={HandleAbout}
                >
                  ABOUT
                </a>
                <a
                  href="#"
                  class="nav-item nav-link active boxmodels"
                  onClick={handleProduct}
                >
                  PRODUCTS
                </a>
                <a
                  href="#"
                  class="nav-item nav-link active boxmodels"
                  tabindex="-1"
                  onClick={handleFranchise}
                >
                  FRANCHISE
                </a>
                <a
                  href="#"
                  class="nav-item nav-link active boxmodels"
                  tabindex="-1"
                  onClick={handleContect}
                >
                  CONTACT
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

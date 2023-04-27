import React from "react";
import "../UIStyle/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();
  function HandleAbout() {
    window.scrollTo(0, 0);
    Navigate("./About");
  }
  function handleProduct() {
    window.scrollTo(0, 0);
    Navigate("./product");
  }
  function handleFranchise() {
    window.scrollTo(0, 0);
    Navigate("./franchise");
  }
  return (
    <>
      <footer className="bg-dark text-muted p-5">
        <div className="container">
          <div className="footer_">
            <div className="footer_1">
              <div>
                <h4 className="text-white">About us</h4>
                <p>
                  At Inspirox India we are fulfilling our clients with our
                  non-disappointment conveying thoughts.
                </p>
                <div className="iconss" data-aos="fade-up">
                  <div className="facebook_icon">
                    <img src="./Images/facebook-app-symbol.png" />
                  </div>
                  <div className="facebook_icon ">
                    <img src="./Images/twitter.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_2">
              <h4 className="text-white">Links</h4>
              <div className="LInks">
                <p onClick={HandleAbout}>About</p>
                <p onClick={handleProduct}>Product</p>
                <p onClick={handleFranchise}>Franchise</p>
              </div>
            </div>
            <div className="footer_2">
              <h4 className="text-white">Privacy</h4>
              <div className="LInks">
                <p>Terms</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="CopyRight">
          <p>Copyright ©2023 All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

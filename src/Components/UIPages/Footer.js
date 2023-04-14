import React from "react";
import "../UIStyle/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-muted p-5">
        <div className="container">
          <div className="col-lg-12 row">
            <div className="col-lg-6">
              <div>
                <h4 className="text-white">About us</h4>
                <p>
                  At Inspirox India we are fulfilling our clients with our
                  non-disappointment conveying thoughts.
                </p>
                <div className="">
                  <span className="facebook_icon">
                    <img src="./Images/facebook-app-symbol.png" />
                  </span>
                  <span className="facebook_icon m-3">
                    <img src="./Images/twitter.png" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h4 className="text-white">Links</h4>
              <div className="LInks">
                <span>About</span>
                <span>Product</span>
                <span>Franchise</span>
              </div>
            </div>
            <div className="col-lg-3">
              <h4 className="text-white">Privacy</h4>
              <div className="LInks">
                <span>Terms</span>
                <span>Privacy Policy</span>
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

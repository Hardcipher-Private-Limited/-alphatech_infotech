import React, { useEffect } from "react";
// import "../UIStyle/Home.css";
import "../UIStyle/Home.css";
import Product from "../UIPages/Product";
import Aos from "aos";
import "aos/dist/aos.css";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 500,
    });
  }, []);

  function handleContact() {
    window.scrollTo(0, 0);
    Navigate("/contect");
  }
  return (
    <div>
      <div></div>
      <div className="MobileImage">
        <div className="MobileImage">
          <img
            src="https://inspiroxindia.in/images/bg_1.jpg"
            alt="image-fluid"
            style={{ width: "100%" }}
          />
          <div className="Mobiel_info">
            <h1 data-aos="fade-up">Get Yourself Known</h1>
            <span
              className="btn bg-white color-dark"
              data-aos="fade-up"
              onClick={handleContact}
            >
              CONNECT WITH US
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-12 pt-5   row conectcall">
        <div className="col-lg-4 d-flex">
          <div className="">
            <span className=" callcon">
              <img src="/Images/call (1).png" alt="image-fluid " />
            </span>
          </div>
          <div>
            <h6 className="text-muted">
              {" "}
              Call us: +91-11-4750-3156, +91-11-4370-9278, +91-9990111730,
              +91-828764939
            </h6>
            <span>Delhi | Mumbai | Ahmedabad | Jaipur</span>
          </div>
        </div>
        <div className="col-lg-4 d-flex">
          <div className="">
            <span className=" callcon">
              <img
                src="/Images/call (1).png"
                alt="image-fluid "
                // className="callcon"
              />
            </span>
          </div>
          <div>
            <h6 className="text-muted">Opening Hours</h6>
            <p className="ps-2">Mon - Fri 10:00 AM - 6:00 PM</p>
            <p className="ps-2">Saturday & Sunday closed</p>
          </div>
        </div>
        <div className="col-lg-4 buttonmake">
          <button className="makebutton">MAKE AN ENQUIRT</button>
        </div>
      </div>
      {/* about us start  */}

      <div className="d-flex justify-content-center aboutus" data-aos="fade-up">
        <h1>About Us</h1>
      </div>
      <div className="container    ">
        <div className="col-lg-12 row responsive_4card" data-aos="fade-up">
          <div className="col-lg-3 ">
            <div>
              <div class=" bankIcon text-center ">
                <img src="./Images/bank.png" alt="" className="bankimg" />
              </div>
              <div class="card-body pt-5 company">
                <h5 class="card-title text-center">Company</h5>
                <p class="card-text pt-3">
                  Inspirox India assist you with seeing your possibilities and
                  there by convert them to clients in since a long time ago run.
                  We are additionally useful for brand building and brand
                  advancement procedures.
                </p>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div>
              <div
                class=" bankIcon text-center
              "
              >
                <img src="./Images/bank.png" alt="" className="bankimg" />
              </div>
              <div class="card-body pt-5 company">
                <h5 class="card-title text-center">Products</h5>
                <p class="card-text pt-3">
                  Our product/tool will assist your business with penetrating
                  your multi area showcase proficiently. we give a tool with the
                  goal that you can accomplish total you work without dependency
                  on anyone.
                </p>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div>
              <div class=" bankIcon text-center">
                <img src="./Images/bank.png" alt="" className="bankimg" />
              </div>
              <div class="card-body pt-5 company">
                <h5 class="card-title text-center">Team</h5>
                <p class="card-text pt-3">
                  We have incredible group inclusion. The entirety of our
                  colleagues have great experience of involvement with their
                  field. Their criticism is the most capable that we have.
                </p>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div>
              <div
                class=" bankIcon text-center
              "
              >
                <img src="./Images/bank.png" alt="" className="bankimg" />
              </div>
              <div class="card-body pt-5 company">
                <h5 class="card-title text-center">Vision</h5>
                <p class="card-text pt-3">
                  We accept we are on the substance of the earth to make
                  incredible technologies and that is not evolving. We are
                  continually centre around improving.
                </p>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;

import React from "react";
// import "../UIStyle/Home.css";
import "../UIStyle/Home.css";
import Product from "../UIPages/Product";

const Home = () => {
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
            <h1>Get Yourself Known</h1>
            <span className="btn bg-white color-dark">CONNECT WITH US</span>
          </div>
        </div>
      </div>
      <div className="col-lg-12 pt-5   row conectcall">
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
            <h5 className="text-muted">
              {" "}
              Call us: +91-11-4750-3156, +91-11-4370-9278, +91-9990111730,
              +91-828764939
            </h5>
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
            <h5 className="text-muted">Opening Hours</h5>
            <span>Mon - Fri 10:00 AM - 6:00 PM</span>
            <p>Saturday & Sunday closed</p>
          </div>
        </div>
        <div className="col-lg-4 buttonmake">
          <button className="makebutton">MAKE AN ENQUIRT</button>
        </div>
      </div>
      {/* about us start  */}

      <div className="d-flex justify-content-center aboutus">
        <h1>About Us</h1>
      </div>
      <div className="container p-5 ">
        <div className="col-lg-12 row ">
          <div className="col-lg-3 ">
            <div>
              <span
                class=" bankIcon text-center
              "
              >
                <img src="./Images/bank.png" alt="" className="bankimg" />
              </span>
              <div class="card-body pt-5 company">
                <h5 class="card-title text-center">Card title</h5>
                <p class="card-text pt-3">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div>
              <span
                class=" bankIcon text-center
              "
              >
                <img src="./Images/bank.png" alt="" className="bankimg" />
              </span>
              <div class="card-body pt-5 company">
                <h5 class="card-title text-center">Card title</h5>
                <p class="card-text pt-3">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div>
              <span class=" bankIcon text-center">
                <img src="./Images/bank.png" alt="" className="bankimg" />
              </span>
              <div class="card-body pt-5 company">
                <h5 class="card-title text-center">Card title</h5>
                <p class="card-text pt-3">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div>
              <span
                class=" bankIcon text-center
              "
              >
                <img src="./Images/bank.png" alt="" className="bankimg" />
              </span>
              <div class="card-body pt-5 company">
                <h5 class="card-title text-center">Card title</h5>
                <p class="card-text pt-3">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
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

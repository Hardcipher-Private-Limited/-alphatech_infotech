import React from "react";
import "../UIStyle/Contect.css";

const Contect = () => {
  return (
    <>
      <div className="body">
        <div className="container" style={{ paddingBottom: 100 }}>
          <div className="Contect-heading text-center p-5" data-aos="fade-up">
            <h3>CONTACT US</h3>
          </div>
          <div className="col-lg-12 row">
            <div
              className="col-lg-4 p-4 text-white"
              style={{ backgroundColor: "#8BC34A" }}
            >
              <div className="all_text_color">
                <h4 className=" text-center text_fontt">Let's get in touch</h4>
                <p className=" text-center">
                  We're open for any suggestion or just to have a chat
                </p>
                <div className="d-flex" style={{ gap: 20 }}>
                  <div className="pt-3">
                    <span className="location_icon">
                      <img src="./Images/pin.png" />
                    </span>
                  </div>
                  <div>
                    <h6>Location:</h6>
                    <p>Jhajjar, HARYANA 124507</p>
                  </div>
                </div>
                <div className="d-flex pt-3" style={{ gap: 20 }}>
                  <div className="pt-2">
                    <span className="location_icon">
                      <img src="./Images/pin.png" />
                    </span>
                  </div>
                  <div>
                    <h6>Phone:</h6>
                    <p>+91 9868260340</p>
                  </div>
                </div>
                <div className="d-flex pt-3" style={{ gap: 20 }}>
                  <div className="pt-3">
                    <span className="location_icon">
                      <img src="./Images/pin.png" />
                    </span>
                  </div>
                  <div>
                    <h6>Location:</h6>
                    <p>info@elphatech.com</p>
                  </div>
                </div>
                <div className="d-flex pt-3" style={{ gap: 20 }}>
                  <div className="pt-3">
                    <span className="location_icon">
                      <img src="./Images/pin.png" />
                    </span>
                  </div>
                  <div>
                    <h6>Career: Send resume to</h6>
                    <p>info@elphatech.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 bg-white">
              <div className="getiN-heading pt-5">
                <h4>CONTACT US</h4>
              </div>
              <div>
                <form className="p-4">
                  <div className="d-flex">
                    <div class="form-group col-md-6">
                      <label
                        for="inputPassword4"
                        className="pl-3"
                        style={{ paddingLeft: 0 }}
                      >
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        className="inputs"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">EMAIL ADDRESS</label>
                      <input
                        type="text"
                        className="inputs"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">MOBILE</label>
                      <input
                        type="text"
                        className="inputs"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4" className="pl-5">
                        SUBJECT
                      </label>
                      <input
                        type="text"
                        className="inputs"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="form-group col-md-12">
                    <label for="inputPassword4">MESSAGE</label>
                    <textarea
                      type="text"
                      className="inputss"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <button className="btn  sendmessage">SEND MESSAGE</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contect;

import React from "react";
import "../UIStyle/Franchise.css";

const Franchise = () => {
  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="text-center franchise_heading">
          <h3> FRANCHISE</h3>
        </div>
        <div>
          <p>
            Save time, money and manpower resources with a platform designed by
            Inspirox India. We offer designed to grow your revenue.
          </p>
          <p>Fill following form to follow you.</p>
        </div>
        <div className="col-lg-12 row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 text-muted pb-5">
            <form>
              <div class="form-group p-3">
                <label>Company Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group p-3">
                <label for="inputAddress2">Contact Person</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-row  d-flex p-4" style={{ gap: 20 }}>
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Mobile</label>
                  <input type="password" class="form-control" />
                </div>
              </div>
              <div class="form-row d-flex p-4" style={{ gap: 20 }}>
                <div class="form-group col-md-6">
                  <label for="inputEmail4">City</label>
                  <input type="email" class="form-control" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">State</label>
                  <input type="password" class="form-control" />
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-outline-success form-control text-center text-dark m-3"
              >
                SUMBIT
              </button>
            </form>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
};

export default Franchise;

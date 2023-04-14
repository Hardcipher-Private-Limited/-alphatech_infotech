import React from "react";
import "../UIStyle/Product.css";
import WorkFlow from "../UIPages/WorkFlow";
const Product = () => {
  return (
    <>
      <div className="container ">
        <div className="col-lg-12 pb-5 row">
          <div className="col-lg-1"></div>
          <div className="col-lg-4 customers">
            <h1>1,437</h1>
            <span className="text-muted">HAPPY CUSTOMERS</span>
          </div>
          <div className="col-lg-4 customers">
            <h1>1,437</h1>
            <span className="text-muted">HAPPY CUSTOMERS</span>
          </div>
          <div className="col-lg-3 customers">
            <h1>1,437</h1>
            <span className="text-muted">HAPPY CUSTOMERS</span>
          </div>
        </div>
      </div>

      {/* product start  */}
      <div className="containers ">
        <div className="Company">
          <h3>PRODUCTS</h3>
        </div>
        <div className="container position-relative">
          <div className="col-lg-12 row">
            <div className="col-lg-3">
              <div class="card p-4">
                <img
                  class="card-img-top"
                  src="	https://inspiroxindia.in/images/products/p1.png"
                  alt="Card image cap"
                />
                <div className="card_postion">
                  <div class="card-body text-center">
                    <h6 class="card-title text-center text-muted">
                      Inspirox E Catalogue
                    </h6>
                    <p class="card-text text-muted">✔ Self/Auto SEO</p>
                    <p class="card-text text-muted">✔ Unlimited Keywords</p>
                    <p class="card-text text-muted">✔ Auto Social Sharing</p>
                    <p class="card-text text-muted">✔ Cust-Categorized Page</p>
                    <p class="card-text text-muted">✔ Real-Time Analytics</p>
                    <p class="card-text text-muted">✔ Handle Panel</p>
                  </div>
                </div>
                <div class="card-bottom">
                  <button class="button-half-outside">KNOW MORE</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card p-4">
                <img
                  class="card-img-top"
                  src="	https://inspiroxindia.in/images/products/p1.png"
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h6 class="card-title text-center text-muted">
                    Inspirox E Catalogue
                  </h6>
                  <p class="card-text text-muted">✔ Self/Auto SEO</p>
                  <p class="card-text text-muted">✔ Unlimited Keywords</p>
                  <p class="card-text text-muted">✔ Auto Social Sharing</p>
                  <p class="card-text text-muted">✔ Cust-Categorized Page</p>
                  <p class="card-text text-muted">✔ Real-Time Analytics</p>
                  <p class="card-text text-muted">✔ Handle Panel</p>
                </div>
                <div class="card-bottom">
                  <button class="button-half-outside">KNOW MORE</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card p-4">
                <img
                  class="card-img-top"
                  src="	https://inspiroxindia.in/images/products/p1.png"
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h6 class="card-title text-center text-muted">
                    Inspirox E Catalogue
                  </h6>
                  <p class="card-text text-muted">✔ Self/Auto SEO</p>
                  <p class="card-text text-muted">✔ Unlimited Keywords</p>
                  <p class="card-text text-muted">✔ Auto Social Sharing</p>
                  <p class="card-text text-muted">✔ Cust-Categorized Page</p>
                  <p class="card-text text-muted">✔ Real-Time Analytics</p>
                  <p class="card-text text-muted">✔ Handle Panel</p>
                </div>
                <div class="card-bottom">
                  <button class="button-half-outside">KNOW MORE</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="card p-4">
                <img
                  class="card-img-top"
                  src="	https://inspiroxindia.in/images/products/p1.png"
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h6 class="card-title text-center text-muted">
                    Inspirox E Catalogue
                  </h6>
                  <p class="card-text text-muted">✔ Self/Auto SEO</p>
                  <p class="card-text text-muted">✔ Unlimited Keywords</p>
                  <p class="card-text text-muted">✔ Auto Social Sharing</p>
                  <p class="card-text text-muted">✔ Cust-Categorized Page</p>
                  <p class="card-text text-muted">✔ Real-Time Analytics</p>
                  <p class="card-text text-muted">✔ Handle Panel</p>
                </div>
                <div class="card-bottom">
                  <button class="button-half-outside">KNOW MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WorkFlow />
    </>
  );
};

export default Product;

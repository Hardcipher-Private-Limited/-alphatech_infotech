import React, { useEffect, useState } from "react";
import "../UIStyle/Product.css";
import WorkFlow from "../UIPages/WorkFlow";
import CountUp from "react-countup";

const Product = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const h1 = document.querySelector("h1");

    function handleScroll() {
      if (window.pageYOffset + window.innerHeight >= h1.offsetTop) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="container ">
        <div className="col-lg-12 pb-5 row number_reading" data-aos="fade-up">
          <div className="col-lg-4 customers">
            <h1>{isVisible && <CountUp end={1470} duration={2} />}</h1>
            <span className="text-muted">HAPPY CUSTOMERS</span>
          </div>
          <div className="col-lg-4 customers">
            <h1>{isVisible && <CountUp end={978} duration={2} />}</h1>
            <span className="text-muted">E - CATALOGUE CUSTOMERS</span>
          </div>
          <div className="col-lg-4 customers">
            <h1>{isVisible && <CountUp end={482} duration={2} />}</h1>
            <span className="text-muted">E - PLUGIN CUSTOMERS</span>
          </div>
        </div>
      </div>

      {/* product start  */}
      <div className="containers ">
        <div className="Company" data-aos="fade-up">
          <h3>PRODUCTS</h3>
        </div>
        <div className="container position-relative">
          <div className=" row products_card" data-aos="fade-up">
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
              <div class="card p-3">
                <img
                  class="card-img-top"
                  src="	https://inspiroxindia.in/images/products/p1.png"
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h6 class="card-title text-center text-muted">
                    Inspirox E Plug-in
                  </h6>
                  <p class="card-text text-muted">✔ Self/Auto SEO</p>
                  <p class="card-text text-muted">✔ Our E - Plug-in Support</p>
                  <p class="card-text text-muted">✔ Html PHP .Net WordPress</p>
                  <p class="card-text text-muted">✔ Any Open Framework</p>
                  <p class="card-text text-muted">✔ Auto Social Sharing</p>
                  <p class="card-text text-muted">✔ WhatsApp integration</p>
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
                    Inspirox E Multi-Location
                  </h6>
                  <p class="card-text text-muted">✔ Self/Auto SEO</p>
                  <p class="card-text text-muted">✔ Global Discovery</p>
                  <p class="card-text text-muted">✔ Auto Social Sharing</p>
                  <p class="card-text text-muted">✔ Cust-Categorized Page</p>
                  <p class="card-text text-muted">✔ Real-Time Analytics</p>
                  <p class="card-text text-muted">✔ One Enterprise Handle</p>
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
                    Inspirox E Content
                  </h6>
                  <p class="card-text text-muted">✔ Unique Content</p>
                  <p class="card-text text-muted">✔ Regular Update</p>
                  <p class="card-text text-muted">✔ Quarterly (45) Update</p>
                  <p class="card-text text-muted">✔ Half Yearly (90) Update</p>
                  <p class="card-text text-muted">✔ Yearly (135) Update</p>
                  <p class="card-text text-muted">✔ Exp. Content Writer</p>
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

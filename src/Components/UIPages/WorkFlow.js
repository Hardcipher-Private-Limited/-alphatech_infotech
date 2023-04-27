import React from "react";
import "../UIStyle/Footer.css";

const WorkFlow = () => {
  return (
    <>
      <div className="containerss">
        <div className="text-center workFlow" data-aos="fade-up">
          <h4>Work Flow</h4>
          <p> Our Working Process</p>
        </div>

        <div
          className="col-lg-12 row p-0 responsive_WorkFlow"
          data-aos="fade-up"
        >
          <div className="lgoos">
            <span className="planning">
              <img src="./Images/list.png" />
            </span>
            <div className="palling_text">
              <h4>Planning</h4>
            </div>
          </div>

          <div className="lgoos">
            <span className="planning">
              <img src="./Images/bulb.png" className="planning_img" />
            </span>
            <div className="palling_text">
              <h4>Research</h4>
            </div>
          </div>
          <div className="lgoos">
            <span className="planning">
              <img src="./Images/refreshing.png" alt=".." />
            </span>
            <div className="palling_text">
              <h4>Optimizing</h4>
            </div>
          </div>
          <div className="lgoos">
            <span className="planning">
              <img src="./Images/profile.png" />
            </span>
            <div className="palling_text">
              <h4>Results</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkFlow;

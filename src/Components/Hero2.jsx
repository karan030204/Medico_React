import React from "react";
import "../Elements/Hero2.css";

const Hero2 = () => {
  return (
    <>
      <div className="hero2-details">
        <div className="title-details">
          <h3>
            Experience Relief with
            <br />
            <span className="span-flex">
              
              <span>Diabetic Shoes &nbsp; </span> 
              <span>
                <img src={require('../images/beat.png')} alt="" />
              </span>
            </span>
          </h3>
          <h4>AT NO COST TO YOU*</h4>
          <p>
            Medical Outcome Solutions is committed to assisting patience that
            have been diagnosed with shoes and inserts designed to bring comfort
            and relief for many. If you are diabetic and have Medicare and
            Medicaid, you could be eligible for a pair of shoes and 3 pairs of
            moldable insoles.
          </p>
        </div>
        <div className="works">
          <div className="works-title">
            <h1>HOW IT WORKS</h1>
          </div>
          <p>
            For the Diabetic Shoes to be covered by your Medicare or Medicaid
            plan, it must be considered “medically necessary” and a prescription
            to be written by the  proper medical professional. Products deemed
            medically necessary are those considered essential to the treatment
            or management of the patient’s particular  condition. Each Medicare
            and Medicaid program has different policies about which incontinence
            products are considered medically necessary.
          </p>
          <h6>
            If you need help understanding your product coverage for your
            Medicare or Medicaid benefits. Please contact us,  and we can
            provide you with more information.
          </h6>
        </div>
      </div>
    </>
  );
};

export default Hero2;

import React, { useEffect, useState, useRef } from "react";
import "../Elements/Hero.css";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Hero = () => {
  const captchaRef = useRef(null);

  const [myData, setMyData] = React.useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    checkbox: "",
    doctor_name: "",
    best_day: "",
    best_time: "",
    _Email: "",
  });

  const handleInput = (e) => {
    const newData = { ...myData };
    newData[e.target.id] = e.target.value;
    setMyData(newData);
  };

  const handleSubmit = (e) => {
    // console.log(myData);
    // e.preventDefault();
    // // // const token = captchaRef.current.getValue();
    // // // captchaRef.current.reset();
    // // console.log(token);
    // axios({
    //   method: "post",
    //   headers: { 'content-type': 'application/json' },
    //   url: "http://triguns-php8/php/reactAPI/thanks-request.php",
    //   // body: `${myData}`,
    //   data: `${myData}`
    // })
    //   .then((res) => {
    //     if(res.status == 200){
    //       console.log(res.data.msg);
    //       alert(res.data.msg);
    //     }else{
    //       alert('ERROR!!!!!!')
    //     }
    //   })
    //   .catch((err) => console.log(err.message));
    e.preventDefault();
  
    axios({
      method: "post",
      url: "http://www.trigunsdev.com/clients/dp/react/thanksAPI/",
      headers: { "content-type": "application/json" },
      data: myData,
      //  crossdomain: true
    })
      .then((result) => {
        console.log("in result", result.data.msg);
      })
      .catch((error) => this.setState({ error: error.msg }));
  };

  return (
    <>
      <div className="hero">
        <div className="hero-img">
          <img src={require('../images/bg.png')} alt="" />
        </div>

        <div className="hero-box">
          <div className="box-navbar">
            <h3>REQUEST SIZING APPOINTMENT</h3>
          </div>
          <div className="box-fields">
            {/* first-name and last-name */}
            <div className="name-field">
              <div className="firstName">
                <input
                  onChange={(e) => handleInput(e)}
                  type="text"
                  id="first_name"
                  name="first-name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="lastName">
                <input
                  onChange={(e) => handleInput(e)}
                  type="text"
                  id="last_name"
                  name="last-name"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            {/* phone and email */}
            <div className="info-field">
              <div className="phoneField">
                <input
                  onChange={(e) => handleInput(e)}
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="emailField">
                <input
                  onChange={(e) => handleInput(e)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            {/* checkbox */}
            <div className="checkbox">
              <input
                onChange={(e) => handleInput(e)}
                type="checkbox"
                id="checkbox"
                name="checkbox"
                required
              />
              <label htmlFor="checkbox">
                I have been diagnosed with diabetes
              </label>
            </div>

            {/* doctor's name */}
            <div className="doctorName">
              <input
                onChange={(e) => handleInput(e)}
                type="text"
                id="doctor_name"
                name="doctor-name"
                placeholder="Doctor's Name"
                required
              />
            </div>

            {/* best day and time to contact */}
            <div className="contactDetails">
              <div className="bestDay">
                <input
                  onChange={(e) => handleInput(e)}
                  type="date"
                  name="best_day"
                  id="best_day"
                  placeholder="Best Day"
                  required
                />
                <h2></h2>
              </div>
              <div>
                <input
                  onChange={(e) => handleInput(e)}
                  type="time"
                  name="best_time"
                  id="best_time"
                  placeholder="Time to Contact"
                  required
                />
                <h2></h2>
              </div>
            </div>

            {/* Hidden Field */}
            <div className="hidden_field">
              <input type="hidden" id="_Email" name="_Email" />
            </div>

            {/* ReCaptcha and submit button */}
            <div className="validation">
              <div>
                <ReCAPTCHA
                  sitekey="6Lfd1gsTAAAAACygL0rnEyeeAYX2BtB1j4NctIcL"
                  ref={captchaRef}
                />
              </div>

              {/* <ReCAPTCHA sitekey=""/> */}
              <div className="submit-btn">
                <button onClick={(e) => handleSubmit(e)} type="submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

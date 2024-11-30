import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSkype } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/nav.css';
import Phone from "../assets/img/icons/wired-outline-2720-logo-viber (1).gif"
import mail from "../assets/img/icons/wired-outline-177-envelope-send (1).gif"
import location from "../assets/img/icons/wired-outline-18-location-pin (1).gif"


const SubNavbar = () => {
  return (
    <div className="container-fluid bg-dark mainSubNav">
      <div className="container">
        <div className="row">
          <div className="ContactUsNav col-lg-8 text-white ">
            <img
             src={Phone}
              alt="" className="p-2"
            />
            <span>(000)967-237-96</span>
            <img
              src={mail}
              alt=""className="p-2"
            />
            <span>toures@info</span>
            <img
                src={location}
              alt=""className="p-2"
            />
            <span>290 Grand Aveune, Maitland, FL 32751</span>
          </div>
          <div className="SocialMediaNav col-lg-3 col-md-6 d-flex justify-content-center align-items-center ">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebookF color="#ffffff" size={20} />
            </a>
            <a href="https://x.com/?lang=ar" target="_blank" rel="noreferrer">
              <FaTwitter color="#ffffff" size={20} />
            </a>
            <a href="https://www.linkedin.com/home" target="_blank" rel="noreferrer">
              <FaLinkedinIn color="#ffffff" size={20} />
            </a>
            <a href="https://www.skype.com/ar/" target="_blank" rel="noreferrer">
              <FaSkype color="#ffffff" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;

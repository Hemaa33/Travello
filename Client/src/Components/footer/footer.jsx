
import React from "react";
import "./assets/css/footerStyle.css"
import whiteLogo from "./assets/images/white-logo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import { faFacebookF, faXTwitter, faLinkedinIn, faSkype } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row d-flex justify-content-md-between pb-5">
          <div className="col-xl-3 col-md-6 col-sm-12 mb-5">
            <img src={whiteLogo} alt="Logo" className="footLogo mb-4"/>
            <p className="footParagraph mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at
              ipsum beatae voluptates
              consequuntur, vero voluptatibus eos.</p>
            <div className="row d-flex justify-content-xl-evenly ">
              <div className=" col-sm-6 me-xxl-2 footerSocialLinksContainer"><a href="" className="footerSocialLinks">
                <FontAwesomeIcon icon={faFacebookF} size={"xl"} />
              </a></div>
              <div className=" col-sm-6 me-xxl-2 footerSocialLinksContainer"><a href="" className="footerSocialLinks">
                <FontAwesomeIcon icon={faXTwitter} size="xl" />
              </a></div>
              <div className=" col-sm-6 me-xxl-2 footerSocialLinksContainer"><a href="" className="footerSocialLinks">
                <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
              </a></div>
              <div className=" col-sm-6           footerSocialLinksContainer"><a href="" className="footerSocialLinks">
                <FontAwesomeIcon icon={faSkype} size="xl" />
              </a></div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-sm-12 mb-5">
            <p className="footerTitle mb-5">COMPANY:</p>
            <a href="">
              <li className="footerUl mb-4">Home</li>
            </a>
            <a href="">
              <li className="footerUl mb-4">About us</li>
            </a>
            <a href="">
              <li className="footerUl mb-4">Blog update</li>
            </a>
            <a href="">
              <li className="footerUl mb-4">Our services</li>
            </a>
            <a href="">
              <li className="footerUl mb-4">Testimonial</li>
            </a>
          </div>
          <div className="col-xl-2 col-md-6 col-sm-12 mb-5">
            <p className="footerTitle mb-5">QUICK LINKS:</p>
            <a href="">
              <li className="footerUl mb-4">Privacy & policy</li>
            </a>
            <a href="">
              <li className="footerUl mb-4">Terms & conditions</li>
            </a>
            <a href="">
              <li className="footerUl mb-4">FAQ</li>
            </a>
            <a href="">
              <li className="footerUl mb-4">Hydropower plants</li>
            </a>
            <a href="">
              <li className="footerUl mb-4">Customer support</li>
            </a>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 ">
            <p className="footerTitle mb-5">SUBSCRIBE NEWSLETTER:</p>
            <form action="">
              <input type="email" className="form-control mb-3 footerEmail" placeholder="Enter Your Email:"/>
              <button type="button" className="btn btn-success footerSubscribe">Subscribe Now</button>
            </form>
          </div>
        </div>
        <div className="container-fluid footEnd mt-4">
          <div className="row py-4 px-0 px-sm-5">
            <div className="col-xl col-sm-12 mb-xl-0 mb-2 d-flex justify-content-xl-start justify-content-center">
              Copyrights © 2024 <span className="mx-1 text-success">Travello</span> All Right Reserved
            </div>
            <div className="col-xl col-sm-12 mb-0 d-flex  justify-content-xl-end justify-content-center">
              Privacy & Policy || Terms & Conditions
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
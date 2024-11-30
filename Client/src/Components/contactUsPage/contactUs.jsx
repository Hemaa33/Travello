import React from "react";
import './assets/css/contactUsStyle.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import {faPhoneVolume, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-regular-svg-icons';

function ContactUs()
{
  return(
    <>
      <div className="container-fluid contactUs">
        <div className="row contactUsLanding d-flex">
          <div className="col d-flex justify-content-center align-items-center">
            <p className="contactUsLandingTitle display-2 font-weight-bold">CONTACT US</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-6 d-flex justify-content-center">
            <button type="button" className="btn btn-success contactUsLandingBtn"><span className="homeContactBtnTxt">Home // Contact</span>
            </button>
          </div>
        </div>
        <div className="row contactUs2ndSection d-flex justify-content-around ">
          <div className="col-lg-6 col-xs-12  me-lg-5">
            <div className="row p-0">
              <div className="col-sm-6 col-xs-12  mb-3 me-0"><input type="text"
                                                                    className="form-control contactUsInputHalf ps-4 "
                                                                    placeholder="First Name:"/></div>
              <div className="col-sm-6 col-xs-12  mb-3 me-0"><input type="text"
                                                                    className="form-control contactUsInputHalf ps-4 "
                                                                    placeholder="Last Name:"/></div>
              <div className="col-sm-6 col-xs-12  mb-3 me-0"><input type="email"
                                                                    className="form-control contactUsInputHalf ps-4 "
                                                                    placeholder="Email:"/></div>
              <div className="col-sm-6 col-xs-12  mb-3 me-0"><input type="number"
                                                                    className="form-control contactUsInputHalf ps-4 "
                                                                    placeholder="Phone:"/></div>
              <div className="col-12 mb-3 me-lg-1"><input type="text" className="form-control contactUsInputFull ps-4"
                                                          placeholder="Subject:"/></div>
              <div className="col-12 mb-3 me-lg-1"><input type="text" className="form-control contactUsTxtArea   ps-4"
                                                          placeholder="Write A Message..."/></div>
              <div className="col-12 mb-3 mt-3">
                <button type="button" className="btn btn-success contactUsInputSendMsg "><span
                  className="">Send Message</span></button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xs-12 bg-success contactUsInfo text-white">
            <div className="row my-0 px-5">
              <div
                className="col-2 contactUsIcon d-flex  justify-content-center align-items-center align-self-start ms-sm-0 ms-2 mt-1 mb-2 mb-sm-0">
                <FontAwesomeIcon icon={faClock} size="xl" /></div>
              <div className="col-sm col-12 ms-sm-2">
                <p className="contactUsInfoTitle mb-2">Hours:</p> <b>
                <p className="my-0">Monday 8 - Friday:8 AM - 5:30 PM</p>
                <p className="mt-1">Saturday - Sunday: Closed</p></b>
              </div>
            </div>
            <div className="row my-2 px-5">
              <div
                className="col-1 contactUsIcon d-flex justify-content-center align-items-center align-self-start ms-sm-0 ms-2 mt-1 mb-2 mb-sm-0">
                <FontAwesomeIcon icon={faPhoneVolume} size="xl" /></div>
              <div className="col-sm col-12 ms-sm-2">
                <p className="contactUsInfoTitle mb-2">Call Us:</p> <b>
                <p className="my-0">+(000) 987-3267</p>
                <p className="mt-1">+88 568 956 238</p></b>
              </div>
            </div>
            <div className="row my-0 px-5">
              <div
                className="col-1 contactUsIcon d-flex justify-content-center align-items-center align-self-start ms-sm-0 ms-2 mt-1 mb-2 mb-sm-0">
                <FontAwesomeIcon icon={faLocationDot} size="xl" /></div>
              <div className="col-sm col-12 ms-sm-2">
                <p className="contactUsInfoTitle mb-2">Location:</p> <b>
                <p className="my-0">242 Carlyle RdZebulun, North Carolina(NC), 27597</p></b>
              </div>
            </div>
          </div>
        </div>
        <div className="row contactUsMap d-flex justify-content-center">
          <div className="col d-flex justify-content-center">
            <iframe className="contactUsIframneGmap"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/"></a></iframe>
          </div>
        </div>


      </div>
    </>
  );
}

export default ContactUs;
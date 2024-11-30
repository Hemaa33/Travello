import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/nav.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "../assets/img/white-logo.png"
import Phone from "../assets/img/icons/wired-outline-2720-logo-viber (1).gif"
import mail from "../assets/img/icons/wired-outline-177-envelope-send (1).gif"
import location from "../assets/img/icons/wired-outline-18-location-pin (1).gif"
import Destenation from "../DestinationPage/Destenation";
import AboutUs from "../AboutUsPage/AboutUs";
import ContactUs from "../contactUsPage/contactUs";
import Home from "../home/Home";
import ToursDetails from "../toursDetails/toursDetails";
import TourComponent from "../tour/tour";
import BlogComponent from "../blog/blog";
import BlogPage from "../BlogDetails/BlogDetails";
const MainNav = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center text-center align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0" style={{ gap: '15px' }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  <Link className="navLink" to="/">
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tours
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" >
                      <Link className="navLink" to="/Tours">
                        Tours
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" >
                      <Link className="navLink" to="/ToursDetails">
                        Tours Details
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link className="navLink" to="/Destenation">
                    Destination
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Aboutus.html">
                  <Link className="navLink" to="/AboutUs">
                    About Us
                  </Link>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="blogPage.html">
                      <Link className="navLink" to="/blog">
                        Blog
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blogdetails.html">
                      <Link className="navLink" to="/blogDetails">
                        Blog Details
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="subNav-item">
                <img src={Phone} />
                <span>(000)967-237-96</span>
              </li>
              <li className="subNav-item">
                <img src={mail} />
                <span>touresinfo</span>
              </li>
              <li className="subNav-item">
                <img src={location} />
                <span>290 Grand AveuneMatiland,FL32751</span>
              </li>
              <li className="subNav-item">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
                    <path
                      fill="#000000"
                      d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
                    ></path>
                  </svg>
                </a>
                <a href="https://x.com/?lang=ar" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
                    <path
                      fill="#000000"
                      d="M50.0625 10.4375C48.214844 11.257813 46.234375 11.808594 44.152344 12.058594C46.277344 10.785156 47.910156 8.769531 48.675781 6.371094C46.691406 7.546875 44.484375 8.402344 42.144531 8.863281C40.269531 6.863281 37.597656 5.617188 34.640625 5.617188C28.960938 5.617188 24.355469 10.21875 24.355469 15.898438C24.355469 16.703125 24.449219 17.488281 24.625 18.242188C16.078125 17.8125 8.503906 13.71875 3.429688 7.496094C2.542969 9.019531 2.039063 10.785156 2.039063 12.667969C2.039063 16.234375 3.851563 19.382813 6.613281 21.230469C4.925781 21.175781 3.339844 20.710938 1.953125 19.941406C1.953125 19.984375 1.953125 20.027344 1.953125 20.070313C1.953125 25.054688 5.5 29.207031 10.199219 30.15625C9.339844 30.390625 8.429688 30.515625 7.492188 30.515625C6.828125 30.515625 6.183594 30.453125 5.554688 30.328125C6.867188 34.410156 10.664063 37.390625 15.160156 37.472656C11.644531 40.230469 7.210938 41.871094 2.390625 41.871094C1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563C4.488281 44.648438 9.894531 46.347656 15.703125 46.347656C34.617188 46.347656 44.960938 30.679688 44.960938 17.09375C44.960938 16.648438 44.949219 16.199219 44.933594 15.761719C46.941406 14.3125 48.683594 12.5 50.0625 10.4375Z"
                    ></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/home" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
                    <path
                      fill="#000000"
                      d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2.06-0.81-4-3-4s-4,2.06-4,4v10h-6V20h6v3c1.2-2.35,3.72-3,6-3c5,0,7,3.16,7,8V39z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
            <form className="contactUsfrm d-flex">
              <button className="btn mx-4 text-white" type="button">
                <a style={{ textDecoration: 'none', color: 'white' }}>
                  <Link className="navLink" to="/ContactUs">
                    Contact Us
                  </Link>
                  {/* Contact Us */}
                </a>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="mainContent">
        {/* <div className="container-fluid"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogComponent />} />
          <Route path="/blogDetails" element={<BlogPage />} />
          <Route path="/Destenation" element={<Destenation />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ToursDetails" element={<ToursDetails />} />
          <Route path="/Tours" element={<TourComponent />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        {/* </div> */}
      </div>
    </Router>
  );
};
export default MainNav
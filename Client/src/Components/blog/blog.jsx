import React from "react";
import "./assets/css/styleBlogPage.css";
import blog1 from "./assets/img/blog-1.jpg";
import blog2 from "./assets/img/blog-2.jpg";
import blog3 from "./assets/img/blog-3.jpg";
import SubNavbar from "../Nav/subNav";
import MainNav from "../Nav/mainNav";
import FooterNav from "../footer/footer";

function BlogComponent() {
  return (
    <>
    {/* <SubNavbar/>
    <MainNav/> */}
      <div className="blog-container">
        <div className="blog">
          <h1>BLOG</h1>
          <div>Home // BLOG</div>
        </div>

        <div className="blog-cards-container">
          <div className="blog-card">
            <img src={blog1} alt="Adventure Image" />
            <div className="blog-content">
              <span className="blog-labels adventure">Adventure</span>

              <span className="blog-date">
                <i className="fa-regular fa-calendar-days"></i>March 28, 2023
              </span>
              <h4>You should See things when visiting Japan</h4>
              <a href="#" className="explore-button">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="blog-card">
            <img src={blog2} alt="City Tours Image" />
            <div className="blog-content">
              <span className="blog-labels city-tours">City Tours</span>
              <span className="blog-date">
                <i className="fa-solid fa-calendar-days"></i>March 28, 2023
              </span>
              <h4>A place where start new life with adventure travel</h4>
              <a href="#" className="explore-button">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="blog-card">
            <img src={blog3} alt="City Tours Image" />
            <div className="blog-content">
              <span className="blog-labels city-tours">City Tours</span>
              <span className="blog-date">
                <i className="fa-solid fa-calendar-days"></i>March 28, 2023
              </span>
              <h4>A place where start new life with adventure Dhaka</h4>
              <a href="#" className="explore-button">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="blog-card">
            <img src={blog3} alt="City Tours Image" />
            <div className="blog-content">
              <span className="blog-labels city-tours">City Tours</span>
              <span className="blog-date">
                <i className="fa-solid fa-calendar-days"></i>March 28, 2023
              </span>
              <h4>A place where start new life with adventure Dhaka</h4>
              <a href="#" className="explore-button">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="blog-card">
            <img src={blog1} alt="City Tours Image" />
            <div className="blog-content">
              <span className="blog-labels city-tours">City Tours</span>
              <span className="blog-date">
                <i className="fa-solid fa-calendar-days"></i>March 28, 2023
              </span>
              <h4>A place where start new life with adventure Dhaka</h4>
              <a href="#" className="explore-button">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="blog-card">
            <img src={blog2} alt="City Tours Image" />
            <div className="blog-content">
              <span className="blog-labels city-tours">City Tours</span>
              <span className="blog-date">
                <i className="fa-solid fa-calendar-days"></i>March 28, 2023
              </span>
              <h4>A place where start new life with adventure Dhaka</h4>
              <a href="#" className="explore-button">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterNav/> */}
    </>
  );
}

export default BlogComponent;

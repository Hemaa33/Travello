import React from "react";
import "./assets/css/styleBlogSec.css"
import blog1 from "./assets/img/blog-1.jpg";
import blog2 from "./assets/img/blog-2.jpg";
import blog3 from "./assets/img/blog-3.jpg";
import ticket from "./assets/img/ticket.png";

function AmazingNewsComponent() {
  return (
    <>
      <section className="blog-section">
        <div className=" blogcontainer container">
          <div className="blog-header">
            <div className="blog-header-img">
              <img src={ticket} alt="ticket" />
            </div>
            <div className="blog-header-title">
              <h2>Our Recent Blog</h2>
              <h3>Amazing news & blog for every update</h3>
            </div>
          </div>
          <div className="blog-cards">
            <div className="blog-card">
              <img src={blog1} alt="Adventure Image" />
              <div className="blog-content">
                <span className="blog-label adventure">Adventure</span>

                <span className="blog-date">
                  <i className="fa-regular fa-calendar-days"></i>March 28, 2023
                </span>
                <h4>You should See things when visiting Japan</h4>
                <a href="#" className="explore-button">
                  Explore More
                </a>
              </div>
            </div>
            <div className="blog-card">
              <img src={blog2}alt="City Tours Image" />
              <div className="blog-content">
                <span className="blog-label city-tours">City Tours</span>
                <span className="blog-date">
                  <i className="fa-solid fa-calendar-days"></i>March 28, 2023
                </span>
                <h4>A place where start new life with adventure travel</h4>
                <a href="#" className="explore-button">
                  Explore More
                </a>
              </div>
            </div>
            <div className="blog-card">
              <img src={blog3} alt="City Tours Image" />
              <div className="blog-content">
                <span className="blog-label city-tours">City Tours</span>
                <span className="blog-date">
                  <i className="fa-solid fa-calendar-days"></i>March 28, 2023
                </span>
                <h4>A place where start new life with adventure Dhaka</h4>
                <a href="#" className="explore-button">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AmazingNewsComponent;

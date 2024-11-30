import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/cards.css';
import CardImage1 from "../assets/img/beautiful-water-villas-tropical-maldives-island-sunset-time.jpg"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cards  = () => {
 
        const tours = [
          {
            id: 1,
            
            location: "traford Park Lexington,40507",
            title: "Cuba Sailing Adventure",
            price: { current: "$116.10", original: "$116.10" },
            rating: { score: 4.5, reviews: "1.5k review" },
            duration: "5 Days",
            discount: "10% off",
          },
          // You can add more tour objects here
          {
            id: 2,
            image: "../assets/img/rest-sunshine-atoll-bungalow-holiday.jpg",
            location: "traford Park Lexington,40507",
            title: "Cuba Sailing Adventure",
            price: { current: "$116.10", original: "$116.10" },
            rating: { score: 4.5, reviews: "1.5k review" },
            duration: "5 Days",
            discount: "10% off",
          },
          {
            id: 3,
            image: "../assets/img/rest-sunshine-atoll-bungalow-holiday.jpg",
            location: "traford Park Lexington,40507",
            title: "Cuba Sailing Adventure",
            price: { current: "$116.10", original: "$116.10" },
            rating: { score: 4.5, reviews: "1.5k review" },
            duration: "5 Days",
            discount: "10% off",
          }
        ];
      
        return (
          <div className="popular_places_area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section_title text-center mb_70">
                    <h3 style={{ fontFamily: 'Gloss And Bloom', color: '#e06c00' }}>Featured Tours</h3>
                    <p style={{ fontSize: '60px', fontWeight: 700 }}>Tours Packages</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {tours.map(tour => (
                  <div key={tour.id} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single_place">
                      <div className="thumb">
                        <img src={CardImage1} alt={tour.title} />
                        <div className="it-featured-react-box d-flex align-items-center">
                          <div className="it-featured-react">
                            <a href="#"><span><i className="fa-solid fa-heart"></i></span></a>
                          </div>
                          <div className="it-featured-react">
                            <a href="#"><span><i className="fa-solid fa-camera"></i></span></a>
                          </div>
                        </div>
                        <a href="#" className="prise">{tour.discount}</a>
                        <a href="#" className="featured">featured</a>
                      </div>
                      <div className="place_info">
                        <div className="it-featured-meta mb-2">
                          <a href="https://www.google.com/maps">
                          <FontAwesomeIcon icon={faLocationDot} /> {tour.location}
                          </a>
                        </div>
                        <a href="destination_details.html">
                          <h3><b>{tour.title}</b></h3>
                        </a>
                        <br />
                        <div className="it-featured-price d-flex align-items-center">
                          <i className="fa-solid fa-dollar-sign"></i>
                          <p>From <span>{tour.price.current}</span> <del>{tour.price.original}</del></p>
                          <div className="it-featured-review d-flex align-items-center">
                            <i className="fa-solid fa-star"></i>
                            <p><span>{tour.rating.score}</span> ({tour.rating.reviews})</p>
                          </div>
                        </div>
                        <div className="rating_days d-flex justify-content-between mt-3">
                          <div className="days">
                            <i className="fa fa-clock-o"></i>
                            <a href="#">{tour.duration}</a>
                          </div>
                          <form className="d-flex justify-content-center align-items-center">
                            <button className="btn me-2 text-white" type="button">Explore More</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      };

export default Cards 
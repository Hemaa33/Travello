import React, { useState } from 'react';
import './TourDetailsStyle.css'
import tourImg from "../assets/img/img-1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';
import {
  faStar,
  faPlaneDeparture,
  faWifi,
  faUtensils,
  faGears,
  faCheckDouble,
  faArrowRight,
  faCar,
  faLocationDot, faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { faClock, faMap } from "@fortawesome/free-regular-svg-icons";
// Custom hook for managing form state
const useBookingForm = () => {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [children, setChildren] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [additionalServices, setAdditionalServices] = useState({
    guide: false,
    internet: false,
    photography: false,
  });

  const calculateTotalCost = () => {
    const baseCost = 800; // Base cost per person
    const additionalServiceCost = (additionalServices.guide ? 420 : 0) +
      (additionalServices.internet ? 420 : 0) +
      (additionalServices.photography ? 420 : 0);
    const total = (baseCost + additionalServiceCost) * (adults + kids + children);
    return total.toFixed(2);
  };

  return {
    adults,
    setAdults,
    kids,
    setKids,
    children,
    setChildren,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    additionalServices,
    setAdditionalServices,
    calculateTotalCost,
  };
};



function ToursDetails() {
  const {
    adults,
    setAdults,
    kids,
    setKids,
    children,
    setChildren,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    additionalServices,
    setAdditionalServices,
    calculateTotalCost,
  } = useBookingForm();

  return (
    <>
      {/* <SubNavbar/>
    <MainNav/> */}
      <div className="container-fluid ">
        <div className="row TourDetailsLanding d-flex">
          <div className="col d-flex justify-content-center align-items-center">
            <p className="TourDetailsLandingTitle display-2 font-weight-bold">Discovery Island Kayak Tour</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col d-flex justify-content-center">
            <button type="button" className="btn btn-success TourDetailsLandingBtn"><span className="TourDetailsBtnTxt">home
                        // Discovery Island Kayak Tour</span></button>
          </div>
        </div>
        <div className="row TourDetailsMain">
          <div className="col-lg-8 col-xs-12 TourDetailsMainBlog">
            <div className="d-flex align-items-center">
              <p className="TourDetailsAddress"><FontAwesomeIcon icon={faLocationDot} className={"TourDetailsIconGrn me-2"} />
                ptrafor Park Lexington,40507</p>
            </div>
            <h1 className="TourDetailsSecTitle mt-2 mb-5">Discovery island kayak..</h1>
            <div className=" d-flex flex-row justify-content-start flex-wrap">
              <div className=" mb-4  d-flex  me-4">
                <FontAwesomeIcon icon={faDollarSign} size={"lg"} className={"TourDetailsIconGrn align-self-center mb-3 me-3"} />
                <div className="TourDetailsInfo">
                  <span className="TourDetailsFrom">From</span><br /><span>$116.10</span>
                </div>
              </div>
              <div className="mb-4  d-flex  me-4">
                <FontAwesomeIcon icon={faClock} size={"lg"} className={"TourDetailsIconGrn align-self-center mb-3 me-3"} />
                <div className="TourDetailsInfo">
                  <span className="TourDetailsFrom">Duration</span><br /><span>3 days</span>
                </div>
              </div>
              <div className="mb-4  d-flex  me-4">
                <FontAwesomeIcon icon={faMap} size={"lg"} className={"TourDetailsIconGrn align-self-center mb-3 me-3"} />
                <div className="TourDetailsInfo">
                  <span className="TourDetailsFrom">Tour Type</span><br /><span>3 days</span>
                </div>
              </div>
            </div>
            <div className="row">
              <img src={tourImg} alt="Tour Image" className="TourDetailsMainImg" />
            </div>
            <div className="row">
              <h2 className="mt-4 ">Tour Overview</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima vitae sequi assumenda
                ipsa sit nam tenetur incidunt obcaecati quae explicabo similique, maxime aliquam id. Natus,
                recusandae? Molestias non eos ipsum repellendus. Quam sapiente tenetur minima commodi quos
                consequatur, est voluptatem sed soluta quasi beatae corporis nisi harum a itaque provident ex
                dignissimos, aliquam quis doloribus quia odio corrupti! Accusantium incidunt sequi magnam
                provident accusamus officiis, culpa libero suscipit, saepe architecto consequatur tenetur? Odio
                illo deleniti quaerat perferendis ad dolore aliquid accusantium atque rem? Temporibus eveniet
                ipsum aliquam esse deserunt nesciunt, voluptates illo alias, culpa et harum omnis quo tempora.
              </p>
            </div>
            <div className="row">
              <h2 className="mt-4">Tour Amenties</h2>
              <div
                className="ms-2 px-4 pt-4 pb-2 mt-3 TourDetailsAmenties d-flex flex-row justify-content-start flex-wrap">
                <div className=" mb-4  d-flex  me-4">
                  <FontAwesomeIcon icon={faStar} className={"TourDetailsAmentiesIcons align-self-center me-2"} />

                  <div className="">
                    <span className="">4.9 Accommdation</span>
                  </div>
                </div>
                <div className=" mb-4  d-flex  me-4">
                  <FontAwesomeIcon icon={faPlaneDeparture}
                    className={"TourDetailsAmentiesIcons align-self-center me-2"} />
                  <div className="">
                    <span className="">4.9 Airport</span>
                  </div>
                </div>
                <div className=" mb-4  d-flex  me-4">
                  <FontAwesomeIcon icon={faWifi} className={"TourDetailsAmentiesIcons align-self-center me-2"} />
                  <div className="">
                    <span className="">wi-fi</span>
                  </div>
                </div>
                <div className=" mb-4  d-flex  me-4">
                  <FontAwesomeIcon icon={faUtensils} className={"TourDetailsAmentiesIcons align-self-center me-2"} />
                  <div className="">
                    <span className="">4.9 Dinner & Snacks</span>
                  </div>
                </div>
                <div className=" mb-4  d-flex  me-4">
                  <FontAwesomeIcon icon={faGears} className={"TourDetailsAmentiesIcons align-self-center me-2"} />
                  <div className="">
                    <span className="">Additional Services</span>
                  </div>
                </div>
                <div className=" mb-4  d-flex  me-4">
                  <FontAwesomeIcon icon={faCheckDouble} className={"TourDetailsAmentiesIcons align-self-center me-2"} />
                  <div className="">
                    <span className="">Insurance</span>
                  </div>
                </div>
                <div className=" mb-4  d-flex  me-4">
                  <FontAwesomeIcon icon={faCar} className={"TourDetailsAmentiesIcons align-self-center me-2"} />
                  <div className="">
                    <span className="">Transport</span>
                  </div>
                </div>
              </div>
              <h2 className="mt-5 mb-4">Location</h2>
              <div className="row contactUsMap d-flex justify-content-center mb-5 mb-lg-3">
                <div className="col d-flex justify-content-center">
                  <iframe className="contactUsIframneGmap m-0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a
                      href="https://www.gps.ie/"></a></iframe>
                </div>
              </div>

            </div>
          </div>
          {/* <div className="col-lg-4 col-xs-12 mb-4">
            <div className="packagecontainer">
              <section className="package-details">
                <h2>Package Details</h2>
                <form>
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" />

                  <label htmlFor="time">Time</label>
                  <select id="time">
                    <option>Default sorting</option>
                  </select>

                  <div className="tickets">
                    <div>
                      <label>Adults (18+ years)</label>
                      <input type="number" value="1" min="1" />
                    </div>
                    <div>
                      <label>Kids (13+ years)</label>
                      <input type="number" value="1" min="0" />
                    </div>
                    <div>
                      <label>Children (5+ years)</label>
                      <input type="number" value="1" min="0" />
                    </div>
                  </div>

                  <div className="additional-services">
                    <label>Additional Services</label>
                    <div>
                      <input type="checkbox" /> Additional Guide ($420)
                    </div>
                    <div>
                      <input type="checkbox" /> Internet ($420)
                    </div>
                    <div>
                      <input type="checkbox" /> Photography ($420)
                    </div>
                  </div>

                  <p>Total Cost: <strong>$800.00 / person</strong></p>
                  <button type="submit">Proceed To Book</button>
                </form>
              </section>

              <section className="tour-info">
                <h2>Tour Information</h2>
                <ul>
                  <li>Max Guests: Date</li>
                  <li>Min Age: 12+</li>
                  <li>Tour Location: America</li>
                  <li>Languages Support: Global</li>
                </ul>
              </section>
            </div>
          </div> */}
          <div className="col-lg-4 col-xs-12 mb-4">
            <div className="packagecontainer">
              <section className="package-details">
                <h2>Package Details</h2>
                <form>
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

                  <label htmlFor="time">Time</label>
                  <select id="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                    <option value="">Select a time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>

                  <div className="passenger-count">
                    <label>Adults (12+ years)</label>
                    <input type="number" value={adults} min="1" onChange={(e) => setAdults(Math.max(1, Number(e.target.value)))} />
                  </div>

                  <div className="passenger-count">
                    <label>Kids (0-11 years)</label>
                    <input type="number" value={kids} min="0" onChange={(e) => setKids(Math.max(0, Number(e.target.value)))} />
                  </div>

                  <div className="passenger-count">
                    <label>Children (5+ years)</label>
                    <input type="number" value={children} min="0" onChange={(e) => setChildren(Math.max(0, Number(e.target.value)))} />
                  </div>

                  <div className="additional-services">
                    <label>Additional Services</label>
                    <div>
                      <input type="checkbox" checked={additionalServices.guide} onChange={(e) => setAdditionalServices({ ...additionalServices, guide: e.target.checked })} /> Additional Guide ($420)
                    </div>
                    <div>
                      <input type="checkbox" checked={additionalServices.internet} onChange={(e) => setAdditionalServices({ ...additionalServices, internet: e.target.checked })} /> Internet ($420)
                    </div>
                    <div>
                      <input type="checkbox" checked={additionalServices.photography} onChange={(e) => setAdditionalServices({ ...additionalServices, photography: e.target.checked })} /> Photography ($420)
                    </div>
                  </div>

                  <p>Total Cost: <strong>${calculateTotalCost()} / person</strong></p>
                  <button type="submit">Proceed To Book</button>
                </form>
              </section>

              <section className="tour-info">
                <h2>Tour Information</h2>
                <ul>
                  <li>Max Guests: Date</li>
                  <li>Min Age: 12+</li>
                  <li>Tour Location: America</li>
                  <li>Languages Support: Global</li>
                </ul>
              </section>
            </div>
          </div>
          <div className="row   mb-5">
            <div className="d-flex flex-wrap">
              <button type="button"
                className="btn TourDetailsPageNumbers text-dark        me-3 mt-3">1
              </button>
              <button type="button"
                className="btn TourDetailsPageNumbers text-dark        me-3 mt-3">2
              </button>
              <button type="button"
                className="btn TourDetailsPageNumbers text-dark        me-3 mt-3">3
              </button>
              <button type="button" className="btn btn-success TourDetailsPageNumbersNext  me-3 mt-3"
              ><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
          </div>
        </div>

        {/* <FooterNav/> */}
      </div>
    </>
  );
}

export default ToursDetails
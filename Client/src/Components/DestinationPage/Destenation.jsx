import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/destenation.css';
import imagecard1 from "../assets/img/blog-1.jpg"
import imagecard2 from "../assets/img/blog-2.jpg"
import imagecard3 from "../assets/img/blog-3.jpg"
import MainNav from '../Nav/mainNav';
import SubNavbar from '../Nav/subNav';
import Footer from '../footer/footer';
const Destenation = () => {
  return (
    <div>
      {/* <SubNavbar />
      <MainNav /> */}
      <div className="pageHeader">
        <div className="pageTitle">
          <h1>Destination</h1>
          <div>Home // Destination</div>
        </div>

        {/* Start cards */}
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={imagecard1} alt="" style={{ borderRadius: '15px', width: '100%' }} />
              <div>
                <h2 style={{ color: 'black' }}>Discovery Islands</h2>
                <p style={{ color: '#11bb67', fontWeight: '500' }}>Adventure</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={imagecard2} alt="" style={{ borderRadius: '15px', width: '100%' }} />
              <div>
                <h2 style={{ color: 'black' }}>Cuba Sailing Adventure</h2>
                <p style={{ color: '#11bb67', fontWeight: '500' }}>Adventure</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={imagecard3} alt="" style={{ borderRadius: '15px', width: '100%' }} />
              <div>
                <h2 style={{ color: 'black' }}>Tour In New York</h2>
                <p style={{ color: '#11bb67', fontWeight: '500' }}>Adventure</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={imagecard3} alt="" style={{ borderRadius: '15px', width: '100%' }} />
              <div>
                <h2 style={{ color: 'black' }}>Dhaka Bangladesh</h2>
                <p style={{ color: '#11bb67', fontWeight: '500' }}>Adventure</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={imagecard2} alt="" style={{ borderRadius: '15px', width: '100%' }} />
              <div>
                <h2 style={{ color: 'black' }}>San Martens</h2>
                <p style={{ color: '#11bb67', fontWeight: '500' }}>Adventure</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={imagecard1} alt="" style={{ borderRadius: '15px', width: '100%' }} />
              <div>
                <h2 style={{ color: 'black' }}>Swizer Lands</h2>
                <p style={{ color: '#11bb67', fontWeight: '500' }}>Adventure</p>
              </div>
            </div>
          </div>
        </div>
        {/* End cards */}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Destenation
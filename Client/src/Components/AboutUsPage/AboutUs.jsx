import React from 'react';
import './aboutus.css'; 
import img1 from "../assets/img/blog-1.jpg"
import img2 from "../assets/img/blog-2.jpg"
import img3 from "../assets/img/blog-3.jpg"


// import styles from './style.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS import
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS import
// import './aboutUsWhatWeDoStyle.css'

// Main Section Component
const MainSection = () => (
  <section className="main-section">
    <div className="content">
      <h1>ABOUT US</h1>
      <a href="#" className="mainbtn">Home // About Us</a>
    </div>
  </section>
);
// About Us Section Component
const AboutUsSection = () => (
  <section className="about-us-section">
    <div className="image-grid">
      <img src={img1} alt="Travel Image 1" />
      <img src={img2} alt="Travel Image 2" />
      <img src={img3} alt="Travel Image 3" />
    </div>
    <div className="text-content">
      <span className="section-subtitle">About Us</span>
      <h2>Sollicitudin Vestibulum Vulputate Ipsum.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
      <div className="stats">
        <div className="stat-item">
          <h3>25 +</h3>
          <p>Our Explorers</p>
        </div>
        <div className="stat-item">
          <h3>300 +</h3>
          <p>Destinations</p>
        </div>
        <div className="stat-item">
          <h3>25 +</h3>
          <p>Years Experience</p>
        </div>
      </div>
      <a href="#" className="discover-more-btn">Discover More</a>
    </div>
  </section>
);

// Booking Section Component
const BookingSection = () => (
  <section className="booking">
    <div className="main"></div>
    <div className="booking-content">
      <div className="text-content">
        <h1>Ready to travel with real adventure and enjoy natural</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <a href="#" className="mainbtn">Start Booking</a>
      </div>
      <div className="play-button">
        <a href="#"><span>&#9658;</span></a>
      </div>
    </div>
  </section>
);


// const FinalSec = () => (
//     <>
//       <div>
//         {/* Main Section */}
//         <section className={styles.mainSection}>
//           <div className={styles.content}>
//             <h1>ABOUT US</h1>
//             <a href="#" className={styles.mainbtn}>Home // About Us</a>
//           </div>
//         </section>

//         {/* About Us Section */}
//         <section className={styles.aboutUsSection}>
//           <div className={styles.imageGrid}>
//             <img src="../public/img/blog-1.jpg" alt="Travel Image 1" />
//             <img src="../public/img/blog-2.jpg" alt="Travel Image 2" />
//             <img src="../public/img/blog-3.jpg" alt="Travel Image 3" />
//           </div>
//           <div className={styles.textContent}>
//             <span className={styles.sectionSubtitle}>About Us</span>
//             <h2>Sollicitudin Vestibulum Vulputate Ipsum.</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//               ad minim veniam, quis nostrud.
//             </p>
//             <div className={styles.stats}>
//               <div className={styles.statItem}>
//                 <h3>25 +</h3>
//                 <p>Our Explorers</p>
//               </div>
//               <div className={styles.statItem}>
//                 <h3>300 +</h3>
//                 <p>Destinations</p>
//               </div>
//               <div className={styles.statItem}>
//                 <h3>25 +</h3>
//                 <p>Years Experience</p>
//               </div>
//             </div>
//             <a href="#" className={styles.discoverMoreBtn}>Discover More</a>
//           </div>
//         </section>

//         {/* Booking Section */}
//         <section className={styles.booking}>
//           <div className={styles.main}></div>
//           <div className={styles.bookingContent}>
//             <div className={styles.textContent}>
//               <h1>Ready to travel with real adventure and enjoy natural</h1>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt.
//               </p>
//               <a href="#" className={styles.mainbtn}>Start Booking</a>
//             </div>
//             <div className={styles.playButton}>
//               <a href="#">
//                 <span>&#9658;</span>
//               </a>
//             </div>
//           </div>
//         </section>

//         <div className={"container-fluid whatWeDo"}>
//           <div className="row d-flex justify-content-between">
//             <div className="col-xl-6 col-12">
//               <p className={"whatWeDoSecBegin"}>What We Do</p>
//               <h1 className={"whatWeDoSecTitle"}>We Arrange The Best Tour Ever Possible.</h1>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore quia veniam nihil quam aperiam laborum illum culpa numquam.</p>
//               <div className="row mt-5">
//                 <div className="col-sm-6 col-12 mb-5">
//                   <img src="assets/images/icon1.png" alt="icon" className="ms-1 mb-3" /><br />
//                   <span className={"whatWeDoSubTitle"}>Amazing Tour Plans</span><br />
//                   <span>Lorem, ipsum dolor sit adipisicing elit. Rerum, iste?</span>
//                 </div>
//                 <div className="col-sm-6 col-12 mb-5">
//                   <img src="assets/images/icon2.png" alt="icon" className="ms-1 mb-3" /><br />
//                   <span className={"whatWeDoSubTitle"}>Easy Booking Options</span><br />
//                   <span>Lorem, ipsum dolor sit adipisicing elit. Rerum, iste?</span>
//                 </div>
//                 <div className="col-sm-6 col-12 mb-5">
//                   <img src="assets/images/icon3.png" alt="icon" className="ms-1 mb-3" /><br />
//                   <span className={"whatWeDoSubTitle"}>Best Travel Guide</span><br />
//                   <span>Lorem, ipsum dolor sit adipisicing elit. Rerum, iste?</span>
//                 </div>
//                 <div className="col-sm-6 col-12 mb-5">
//                   <img src="assets/images/icon4.png" alt="icon" className="ms-1 mb-3" /><br />
//                   <span className={"whatWeDoSubTitle"}>World Insurance Included</span><br />
//                   <span>Lorem, ipsum dolor sit adipisicing elit. Rerum, iste?</span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-5 col-12">
//               <img src="./assets/images/img-1 (1).jpg" alt="image" className={"whatWeDoImg"} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );


// Main App Component
const AboutUs = () => (
  <div>
    <MainSection />
    <AboutUsSection />
    <BookingSection />
    {/* <FinalSec /> */}
  </div>
);

export default AboutUs;
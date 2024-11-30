import AmazingNewsComponent from './amazing-news/amazingNews';
import Firstcardsesction from './Firstcardsesction/Firstcardsesction';
import './css/home.css'
import Cards from './cards/cards';
import Travelcampsection1 from './travelcampsection1/Travelcampsection1';
import AboutCompanySection from './aboutCompany/aboutCompany';


function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="text-center content">
          <h1 className='homeLander'>Memories for life</h1>
          {/* <p >Let's Explore the world</p> */}
        </div>
      </div>
      <Firstcardsesction />
      <AboutCompanySection />
      <Cards />
      <Travelcampsection1 />
      <AmazingNewsComponent />
    </>
  );
}

export default Home;

import React from "react";
import "./assets/css/style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserNurse} from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import im1 from "./assets/images/img-1.jpg"
import im2 from "./assets/images/img-4.jpg"
import im3 from "./assets/images/img-3.jpg"
function AboutCompanySection() {
  return (
    <>
      <div className="container-fluid aboutCompany">
        <div className="row pb-5 d-flex justify-content-between">
          <div className="col-xl-7 col-12 mt-4">
            <img src={im1} alt="travel photo" className="aboutCompanyImg aboutCompanyImgOne"/>
            <img src={im2} alt="travel photo" className="aboutCompanyImg aboutCompanyImgTwo"/>
            <img src={im3} alt="travel photo" className="aboutCompanyImg aboutCompanyImgThree"/>
          </div>
          <div className="col-xl-5 col-12">
            <p className="aboutCompanySectionBegin mt-4">About Company</p>
            <p className="aboutCompanySectionTitle">Sollicitudin Vestibulum Vulputate Ipsum.</p>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nihil tempora?
              Temporibus porro,
              culpa nobis inventore molestias ipsum aliquam explicabo. Maiores quasi inventore vitae ipsum.
            </p>
            <div className="row aboutCompanyFeatures d-flex mb-4">
              <div className="col-12 col-md-1 aboutCompanyIcons ms-2 me-3">
                <FontAwesomeIcon icon={faUserNurse} className="aboutCompanyFeaturesIcon" size={"2xl"} /></div>
              <div className="col-12 col-md-9 my-md-0 my-4 aboutCompanyFeaturesText">
                <p className="aboutCompanyFeaturesTitle my-2">Safety First Always</p>
                <p className="aboutCompanyFeaturesParagraph m-0">Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Fuga in qui recusandae!</p>
              </div>
            </div>
            <div className="row aboutCompanyFeatures d-flex mb-4">
              <div className="col-12 col-md-1 aboutCompanyIcons ms-2 me-3">
                <FontAwesomeIcon icon={faUserNurse} className="aboutCompanyFeaturesIcon" size={"2xl"} />
              </div>
              <div className="col-12 col-md-9 my-md-0 my-4 aboutCompanyFeaturesText">
                <p className="aboutCompanyFeaturesTitle my-2">Nllamco laboris nisi</p>
                <p className="aboutCompanyFeaturesParagraph m-0">Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Fuga in qui recusandae!</p>
              </div>
            </div>
            <button type="button" className="btn btn-success aboutCompanyDiscover mt-2">Discover More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCompanySection
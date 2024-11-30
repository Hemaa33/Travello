import React from "react";
import "./assets/css/styleToursPage.css";
import SubNavbar from "../Nav/subNav";
import MainNav from "../Nav/mainNav";
import FooterNav from "../footer/footer";

function TourComponent() {
  return (
    <>
    {/* <SubNavbar/>
    <MainNav/> */}
      <div class="tour-container">
        <div class="TOUR">
          <h1>TOUR GRID</h1>
          <div>Home // Tour</div>
        </div>

        <div class="card-container">
          <div class="card1">
            <div class="discount">
              <div class="green">10% off</div>
              <div class="red">featured</div>
            </div>
            <div class="details">
              <div class="location">
                <p>
                  <i class="fa-solid fa-location-dot"></i> traford Park
                  Lexington , 40507
                </p>
                <h2>Cuba Sailing Adventure</h2>
              </div>
              <div class="end">
                <div class="price">
                  <p>
                    <i class="fa-solid fa-dollar-sign"></i> From
                    <span>$116.10</span>
                    <del>$116.10</del>
                  </p>
                </div>
                <div class="rating">
                  <p>
                    <i class="fa-solid fa-star"></i> <span>4.5</span> (1.5k
                    review)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card2">
            <div class="discount">
              <div class="green">10% off</div>
              <div class="red">featured</div>
            </div>
            <div class="details">
              <div class="location">
                <p>
                  <i class="fa-solid fa-location-dot"></i> traford Park
                  Lexington , 40507
                </p>
                <h2>Discovery island kayak..</h2>
              </div>
              <div class="end">
                <div class="price">
                  <p>
                    <i class="fa-solid fa-dollar-sign"></i> From
                    <span>$116.10</span>
                    <del>$116.10</del>
                  </p>
                </div>
                <div class="rating">
                  <p>
                    <i class="fa-solid fa-star"></i> <span>4.5</span> (1.5k
                    review)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card3">
            <div class="discount">
              <div class="green">10% off</div>
              <div class="red">featured</div>
            </div>
            <div class="details">
              <div class="location">
                <p>
                  <i class="fa-solid fa-location-dot"></i> traford Park
                  Lexington , 40507
                </p>
                <h2>Beautiful parasailing</h2>
              </div>
              <div class="end">
                <div class="price">
                  <p>
                    <i class="fa-solid fa-dollar-sign"></i> From
                    <span>$116.10</span>
                    <del>$116.10</del>
                  </p>
                </div>
                <div class="rating">
                  <p>
                    <i class="fa-solid fa-star"></i> <span>4.5</span> (1.5k
                    review)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card4">
            <div class="discount">
              <div class="green">10% off</div>
              <div class="red">featured</div>
            </div>
            <div class="details">
              <div class="location">
                <p>
                  <i class="fa-solid fa-location-dot"></i> traford Park
                  Lexington , 40507
                </p>
                <h2>Sight seeing & taj Mahal..</h2>
              </div>
              <div class="end">
                <div class="price">
                  <p>
                    <i class="fa-solid fa-dollar-sign"></i> From
                    <span>$116.10</span>
                    <del>$116.10</del>
                  </p>
                </div>
                <div class="rating">
                  <p>
                    <i class="fa-solid fa-star"></i> <span>4.5</span> (1.5k
                    review)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card5">
            <div class="discount">
              <div class="green">10% off</div>
              <div class="red">featured</div>
            </div>
            <div class="details">
              <div class="location">
                <p>
                  <i class="fa-solid fa-location-dot"></i> traford Park
                  Lexington , 40507
                </p>
                <h2>peninsula & Caribbean..</h2>
              </div>
              <div class="end">
                <div class="price">
                  <p>
                    <i class="fa-solid fa-dollar-sign"></i> From
                    <span>$116.10</span>
                    <del>$116.10</del>
                  </p>
                </div>
                <div class="rating">
                  <p>
                    <i class="fa-solid fa-star"></i> <span>4.5</span> (1.5k
                    review)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card6">
            <div class="discount">
              <div class="green">10% off</div>
              <div class="red">featured</div>
            </div>
            <div class="details">
              <div class="location">
                <p>
                  <i class="fa-solid fa-location-dot"></i> traford Park
                  Lexington , 40507
                </p>
                <h2>Boathouse Neighborhood</h2>
              </div>
              <div class="end">
                <div class="price">
                  <p>
                    <i class="fa-solid fa-dollar-sign"></i> From
                    <span>$116.10</span>
                    <del>$116.10</del>
                  </p>
                </div>
                <div class="rating">
                  <p>
                    <i class="fa-solid fa-star"></i> <span>4.5</span> (1.5k
                    review)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div class="arrow">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      {/* <FooterNav/> */}
    </>
  );
}

export default TourComponent;

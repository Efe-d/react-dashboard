import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCreditCard,
  faDonate,
  faHandHoldingMedical,
  faInfoCircle,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";
/* 
const [load,setLoad] = useState(false); */

  

function Slider() {
     let movePer = 0;
    const slides= document.getElementsByClassName("slide");

    const slideWidth = document.querySelector(".slide");
    const wrapperWidth = document.querySelector(".slider-in");
    const totalCarousel = slides.length;
    let maxPer = 0;
  
    const moveToNextCarousel = () => {
      /* İleri butonuna her basışta kaç px gidecegini belirliyoruz */
      /* Her Basışta slide cardinin widthi kadar transform oluyor */
      movePer = movePer + slideWidth.clientWidth;
  
      /* Sona gelince başa atmasını saglıyoruz */
      /* kaç tane slide oldugunu hesaplıyoruz. Sonra ekran boyutuna göre kaç tane card oldugunu hesaplatıp totalCarouselden eksil
      -tiyoruz bunu yapmazsak ektradan boş ileri atacak */
      let maxPer =
        (totalCarousel - wrapperWidth.clientWidth / slideWidth.clientWidth) *
        slideWidth.clientWidth;
      for (let slide of slides) {
        if (movePer > maxPer) {
          movePer = 0;
          slide.style.transform = "translateX(-" + movePer + "px)";
        } else {
          /* slide classlarına transform ekliyoruz */
          slide.style.transform = "translateX(-" + movePer + "px)";
        }
      }
    };
  
    const moveToPrevCarousel = () => {
      movePer = movePer - slideWidth.clientWidth;
      for (let slide of slides) {
        if (movePer < 0) {
          movePer = 0;
        } else {
          slide.style.transform = "translateX(-" + movePer + "px)";
        }
      }
    };
  

  return (
    <div>
      <div className="slider-box">
        <div className="slider">
          <div className="header-slider">
            <h3>Make Payments</h3>
            <FontAwesomeIcon icon={faInfoCircle} size="1x" color="#6f3ecc" />
          </div>

          <FontAwesomeIcon
            icon={faAngleLeft}
            size="4x"
            color="#6f3ecc"
            className="slider-icon"
            onClick={moveToPrevCarousel}
          />

          <div className="slider-icon-mobile">
            <div>
              <FontAwesomeIcon
                icon={faAngleLeft}
                size="2x"
                color="#6f3ecc"
                className=""
                onClick={moveToPrevCarousel}
              />
            </div>

            <div>
              <FontAwesomeIcon
                icon={faAngleRight}
                size="2x"
                color="#6f3ecc"
                className=""
                onClick={moveToNextCarousel}
              />
            </div>
          </div>

          <div className="slider-in">
            <div className="slide">
              <div className="slider-icons">
                <FontAwesomeIcon icon={faDonate} size="3x" />
                <h3>Donations & Charities</h3>
              </div>
            </div>
            <div className="slide">
              <div className="slider-icons">
                <FontAwesomeIcon icon={faHandHoldingMedical} size="3x" />
                <h3>Insurence</h3>
              </div>
            </div>
            <div className="slide">
              <div className="slider-icons">
                <FontAwesomeIcon icon={faCreditCard} size="3x" />
                <h3>Payment Services</h3>
              </div>
            </div>

            <div className="slide">
              <div className="slider-icons">
                <FontAwesomeIcon icon={faMoneyCheckAlt} size="3x" />
                <h3>Visa & Embassy Payments</h3>
              </div>
            </div>

            <div className="slide">
              <div className="slider-icons">
                <FontAwesomeIcon icon={faMoneyCheckAlt} size="3x" />
                <h3>Visa & Embassy Payments</h3>
              </div>
            </div>
            <div className="slide">
              <div className="slider-icons">
                <FontAwesomeIcon icon={faMoneyCheckAlt} size="3x" />
                <h3>Visa & Embassy Payments</h3>
              </div>
            </div>
            <div className="slide">
              <div className="slider-icons">
                <FontAwesomeIcon icon={faMoneyCheckAlt} size="3x" />
                <h3>Visa & Embassy Payments</h3>
              </div>
            </div>
          </div>

          <FontAwesomeIcon
            icon={faAngleRight}
            size="4x"
            color="#6f3ecc"
            className="slider-icon"
            onClick={moveToNextCarousel}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;

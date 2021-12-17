import "./App.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faBars,
  faBoxTissue,
  faCreditCard,
  faDonate,
  faHandHoldingMedical,
  faHeadset,
  faInfoCircle,
  faMoneyCheckAlt,
  faStickyNote,
  faWallet,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import p1 from "./p1.jpeg";
import p2 from "./p2.jpg";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContext from "./MainContext";

function App() {
  const [user, setUser] = useState();
  const [wallet, setWallet] = useState();
  const [loan, setLoan] = useState();
  const [billspayment, setBillspayment] = useState();
  const [menuItem, setMenuItem] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  let carouselPosition = 0;

  useEffect(() => {
    fetch("https://601d848abe5f340017a19c29.mockapi.io/dashboard")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        setWallet(data.wallet);
        setLoan(data.loan);
      });
  }, []);

  useEffect(() => {
    fetch("https://601d848abe5f340017a19c29.mockapi.io/menu")
      .then((response) => response.json())
      .then((data) => {
        setMenuItem(data);
      });
  }, []);

  let movePer = 0;
  const slides = document.getElementsByClassName("slide");
  const slideWidth = document.querySelector(".slide");
  const wrapperWidth = document.querySelector(".slider-in");
  const totalCarousel = slides.length;
  let maxPer = 0;

  const moveToNextCarousel = () => {
    /* İleri butonuna her basışta kaç px gidecegini belirliyoruz */
    /* Her Basışta slide cardinin widthi kadar transform oluyor */
    movePer = movePer + slideWidth.clientWidth;

    /* Sona gelince başa atmasını saglıyoruz */
    /* kaç tane slide oldugunu hesaplıyoruz. Sonra ekran boyutuna göre kaç tane kard oldugunu hesaplatıp totalCarouselden eksil
    -tiyoruz bunu yapmazsak ektradan boş ileri atacak */
    let maxPer =
      (totalCarousel - wrapperWidth.clientWidth / slideWidth.clientWidth) *
      slideWidth.clientWidth;
    for (let slide of slides) {
      if (movePer > maxPer) {
        movePer = 0;
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

  const data = {
    user,
    setUser,
    wallet,
    setWallet,
    loan,
    setLoan,
    menuItem,
    setMenuItem,
    menuClass,
    setMenuClass,
    menuOpen,
    setMenuOpen,
    billspayment,
    setBillspayment,
  };

  return (
    <MainContext.Provider value={data}>
      <div className="Container">
        <Header />

        <div className="appmain">
          <div className={`${menuOpen ? "menu menu-open" : "menu"}`}>
            <Sidebar />
          </div>

          <div className={`appcontent ${menuOpen ? "active" : ""}`}>
            <div className="Card-Box">
              <Cards />
            </div>
            <div className="slider-box">
              <div className="slider">
                <div className="header-slider">
                  <h3>Make Payments</h3>
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    size="1x"
                    color="#6f3ecc"
                  />
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

            <div className="food-container">
              <div className="foods">
                <div className="image-name">
                  <img src={p2} />
                  <h3>Chocolate Cake</h3>
                </div>
                <div className="food-info">
                  <h5>Cakes</h5>
                  <h3>09.04.2018</h3>
                  <h3 className="progress">PROCESSED</h3>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="foods">
                <div className="image-name">
                  <img src={p1} />
                  <h3>Cheesecake</h3>
                </div>
                <div className="food-info">
                  <h5>Cupcakes</h5>
                  <h3>09.04.2018</h3>
                  <h3 className="onhold">ON HOLD</h3>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;

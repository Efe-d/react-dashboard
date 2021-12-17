import "./App.css";
import React, { useEffect, useState } from "react";

import Cards from "./components/Cards";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContext from "./MainContext";
import Foods from "./components/Foods.jsx";
import Slider from "./components/Slider";

function App() {
  const [user, setUser] = useState();
  const [wallet, setWallet] = useState();
  const [loan, setLoan] = useState();
  const [billspayment, setBillspayment] = useState();
  const [menuItem, setMenuItem] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

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
            <Slider />
            <Foods />
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;

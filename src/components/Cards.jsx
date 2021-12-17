import React,{useContext} from 'react'
import MainContext from '../MainContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxTissue,
  faStickyNote,
  faWallet
} from "@fortawesome/free-solid-svg-icons";

function Cards() {

    const {wallet} = useContext(MainContext);

    return (
<>
        <div className="Card-One Card-Settings">
          <div className="top-info">
            <h3> YOUR WALLET </h3>
            <h3> Feb 2.2021</h3>
          </div>
          <div className="middle-header">
            <h4> {wallet && wallet.balance.title} </h4>
          </div>
          <div className="middle-info">
            <h2> {wallet && wallet.balance.currency} </h2>
            <h2 className="miktar">{wallet && wallet.balance.value}</h2>
          </div>
          <div className="footerC">
            <div className="footer">
              <FontAwesomeIcon
                icon={faBoxTissue}
                size="4x"
                color="#6f3ecc"
              />
              <h4>Withdraw</h4>
            </div>
            <div className="footer">
              <FontAwesomeIcon
                icon={faStickyNote}
                size="4x"
                color="#6f3ecc"
              />
              <h4>Fund Wallet</h4>
            </div>
            <div className="footer">
              <FontAwesomeIcon icon={faWallet} size="4x" color="#6f3ecc" />
              <h4>Transactions</h4>
            </div>
          </div>
        </div>

        <div className="Card-Two Card-Settings">
          <div className="info">
            <h3> Need cash instantly ? </h3>
            <button> Apply for a loan </button>
          </div>
        </div>
    </>
    )
}

export default Cards

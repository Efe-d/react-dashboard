import React,{useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import MainContext from '../MainContext';



function Header() {
    const {menuOpen,setMenuOpen,setMenuClass,menuClass} = useContext(MainContext);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
    }

    
  

    return (
        <div className="Header">
        <div className="Menu-IC">
          {menuOpen ? 
        <span>
        <FontAwesomeIcon onClick={menuToggle} icon={faTimes} size="2x" />  
        </span>
        :
        <span>
        <FontAwesomeIcon onClick={menuToggle} icon={faBars} size="2x" />  
        </span>
        }
        </div>
      </div>
    )
}

export default Header

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
        <FontAwesomeIcon onClick={menuToggle} icon={faTimes} size="4x" />  
        :
        <FontAwesomeIcon onClick={menuToggle} icon={faBars} size="4x" />
        }
        </div>
      </div>
    )
}

export default Header

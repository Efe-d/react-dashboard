import React,{useContext} from 'react'
import MainContext from '../MainContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {

    const {user,menuItem} = useContext(MainContext);

    return (
        <>
            {user &&
              <div className="userpanel">
                <img src={"https://i.ibb.co/swkR93p/bramdejager-600x600.png"} />
                <div className="id-class">
                  <h2>{user.name}</h2>

                  <h5>
                    {user.id.title} : {user.id.value}
                  </h5>
                  <div className="View">
                   <a href="#"> View Profile </a>
                </div>
                </div>

                

              </div>
            
            }
            <div className="menu-items">
        <div className="Items">
            {menuItem &&   
          menuItem.map((i) => (
            <h4><FontAwesomeIcon icon={faHome} size={4} color="#8e66db" /><a href={i.link}> {i.name} </a></h4>
          ))
            }
        
        </div>
        </div>

     

        </>
    )
}

export default Sidebar

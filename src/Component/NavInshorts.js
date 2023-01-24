import React from "react";
import './NavInshorts.css'
import Hamburger from './Hamburger'

const NavInshorts = ({setCategory}) => {
    return (
         <div className="nav">
        <div className="menu">
          <Hamburger setCategory={setCategory}/>
        </div>
        
        <img 
          style={{cursor:"pointer"}}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" height="80%"/>
        
        </div>
    )
  }
  
  export default NavInshorts;
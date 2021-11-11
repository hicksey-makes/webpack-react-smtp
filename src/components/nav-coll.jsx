import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function CollapseNav() {
  const [navDisplay, setNavDisplay] = useState(false);

  function toggleNavbar() {
    setNavDisplay(!navDisplay);
  }

  return (
    <>
    <div className="flex" id="toggle-wrap">
    <div className="first-flex"></div>
    <a href="#" className="icon second-flex" id="icon" onClick={() => toggleNavbar()}><FontAwesomeIcon icon={faBars} /></a>
    </div>
    <div className={
      "topnav " +
      (navDisplay ? '' : 'remove-nav')} id="myTopnav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Mobile App</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#"><img src="../Assets/Images/finding-brand.png" alt="Request a brand" /></a></li>

      </ul>
    
    </div>
  </>);


}

export default CollapseNav;

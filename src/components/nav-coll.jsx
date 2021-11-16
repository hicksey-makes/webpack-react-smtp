import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
import Part from '../Assets/Images/finding-brand.png';

function CollapseNav() {
  const [navDisplay, setNavDisplay] = useState(false);

  function toggleNavbar() {
    setNavDisplay(!navDisplay);
  }

  return (
    <>
    <div className="flex" id="toggle-wrap">
    <div className="first-flex"></div>
    <a href="#" className="icon second-flex" id="icon" onClick={() => toggleNavbar()}>
      <span className="sr-only">Toggle navigation</span>
      <FontAwesomeIcon icon={faBars} />
    </a>
    </div>
    <div className={
      "topnav creamsicle " +
      (navDisplay ? '' : 'remove-nav')} id="myTopnav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Mobile App</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faTwitter}  /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faFacebook}  /></a></li>
        <li><a href="#"><img src={Part} alt="Request a brand" /></a></li>

      </ul>

    </div>
  </>);


}

export default CollapseNav;

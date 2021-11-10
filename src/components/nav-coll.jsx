import React, {useState, useEffect} from 'react';

function CollapseNav() {
  const [navDisplay, setNavDisplay] = useState(false);

  function toggleNavbar() {
    setNavDisplay(!navDisplay);
  }

  return (
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
        <li><a href="javascript:void(0);" className="icon" onClick="toggleNavbar()">&#9776;</a></li>
      </ul>
    </div>
  );


}

export default CollapseNav;

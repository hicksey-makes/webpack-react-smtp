import React, {useState, useEffect} from 'react';
import Part from '../Assets/Images/buy-now.png';

function ImgMaker() {
  const [imgDeets, setImgDeets] = useState([]);

  useEffect(() => {
    fetch("https://fairestdb.p.rapidapi.com/carpart/imageModel/_id/imageModel1636768014937", {
	     "method": "GET",
	      "headers": {
		        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
		        "x-rapidapi-key": "23680a36f3msh74c57401435d3cfp151b19jsndc9f0c9b453e"
	      }
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
	      console.log(data);
        setImgDeets(data);
    })
    .catch(err => {
	      console.error(err);
    });
  }, []);

  if (imgDeets) {
    console.log(imgDeets);
  }
  const brand = imgDeets.map(imgdeet => imgdeet.Brand);
  const desc = imgDeets.map(imgdeet => imgdeet.Description);
  const imagesrc = imgDeets.map(imgdeet => imgdeet.Image);
  console.log(imagesrc);

   return (
     <div className="flex-container col-container features comp-space" id="part-img">
       <div className="flex-1">
         <h1 id="part-headline">{brand}</h1>
         <a href="https://www.showmetheparts.com/?partno=00051&logkey=LPR&partkey=007381408&verify=c6cc1c4c-f262-47ee-aa39-c2627869b5e1"><img src={Part} alt="Buy Part Now"/></a>
         <p className="mono" style={{paddingTop: "20px;"}}><em>ShowMeTheParts has a wide selection of {desc} products for a variety of years, makes, and models.</em></p>
         <img className="battery" src={imagesrc} style={{padding: "25px;"}} alt="Battery Hold Down Bolt" />
       </div>
       <div className="flex-2">

       </div>
     </div>
  );

}

export default ImgMaker;

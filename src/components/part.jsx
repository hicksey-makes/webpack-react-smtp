import React, {useEffect, useState} from 'react';

function PartMaker() {
  const [partDeets, setPartDeets] = useState([]);

  useEffect(() => {
    fetch("https://fairestdb.p.rapidapi.com/part/partModel", {
	     "method": "GET",
	      "headers": {
		        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
		        "x-rapidapi-key": "23680a36f3msh74c57401435d3cfp151b19jsndc9f0c9b453e"
	      }
    })
    .then(response => response.json())
    .then(data => {
	      console.log(data);
        setPartDeets(data);
    })
    .catch(err => {
	      console.error(err);
    });
  }, []);

  if (partDeets) {
    console.log(partDeets);
  }
  const brand = partDeets.map(partdeet => partdeet.Brand);
  const type = partDeets.map(partdeet => partdeet['Part-Type']);
  const number = partDeets.map(partdeet => partdeet['Part-Number']);
  // console.log(details);

   return (
     <div className="comp-space">
       <h2 className="section-head">PART INFORMATION</h2>
       <div id="part-wrap">
         <p><strong>Brand: </strong>{brand}</p>
         <p><strong>Part Number: </strong>{number}</p>
         <p><strong>Part Type: </strong>{type}</p>
       </div>
     </div>
  )
}

export default PartMaker;

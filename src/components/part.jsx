import React, {useEffect, useState} from 'react';

function PartMaker() {
  const [partDeets, setPartDeets] = useState([]);

  useEffect(() => {
    fetch("https://fairestdb.p.rapidapi.com/carpart/carpartModel", {
	     "method": "GET",
	      "headers": {
		        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
		        "x-rapidapi-key": "23680a36f3msh74c57401435d3cfp151b19jsndc9f0c9b453e"
	      }
    })
    .then(response => {
      // console.log(response);
      return response.json()
    })
    .then(data => {
	      console.log(data);
        setPartDeets(data);
    })
    .catch(err => {
	      console.error(err);
    });
  }, []);

  // if (partDeets) {
  //   console.log(partDeets);
  // }
  const brand = partDeets.map(partdeet => partdeet.Brand);
  const type = partDeets.map(partdeet => partdeet['Part-Type']);
  const number = partDeets.map(partdeet => partdeet['Part-Number']);
  const comment = partDeets.map(partdeet => partdeet.Comment);
  // console.log(comment);
  // let partpropvals = partDeets.forEach(partdeet => {
  //   console.log(Object.entries(partdeet));
  //   return Object.entries(partdeet).forEach(pair => {
  //       console.log(pair[1]);
  //       return (
  //         <p><strong>{pair[0]}: </strong>{pair[1]}</p>
  //       );
  //     });
  // });

   return (
     <div className="comp-space">
       <h2 className="section-head">PART INFORMATION</h2>
       <div id="part-wrap">
          <p><strong>Brand: </strong><span className="mono">{brand}</span></p>
          <p><strong>Part Number: </strong><span className="mono">{number}</span></p>
          <p><strong>Part Type: </strong><span className="mono">{type}</span></p>
          <p><strong>Comment: </strong><span className="mono">{comment}</span></p>
       </div>
     </div>
  )
}

export default PartMaker;

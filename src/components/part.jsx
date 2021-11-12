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
    // console.log(partDeets);
  }
   return (
     <div className="comp-space">
       <h2 className="section-head">PART INFORMATION</h2>
       <div id="part-wrap">
        {partDeets.forEach(part => {
           console.log(part);
           return (
             <div id={part._id}>
               <p><strong>Brand: </strong>{part.Brand}</p>
               <strong>Part Number: </strong>{part['Part-Number']}
               <strong>Part Type: </strong>{part['Part-Type']}
               <strong>Comment: </strong>

           </div>);
          })
        }
       </div>
     </div>
  );
}

export default PartMaker;

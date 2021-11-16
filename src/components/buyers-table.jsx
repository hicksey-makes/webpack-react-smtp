import React, {useEffect, useState} from 'react';

function BuyersTMaker() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // read all entities
  fetch("https://fairestdb.p.rapidapi.com/car/car.Model", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "fairestdb.p.rapidapi.com",
      "x-rapidapi-key": "23680a36f3msh74c57401435d3cfp151b19jsndc9f0c9b453e"
    }
  })
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    setCars(data);
  })
  .catch(err => { console.error(err);
  });
  }, []);

  // if (cars) {
  //   console.log(cars);
  // }

  return (
    <div className="comp-space container">
      <h2 className="section-head">BUYERS GUIDE</h2>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Engine</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => {
            // console.log(car);
            return <tr key={index}>
              <td id="no-widen" className="contrast">{car.Make}</td>
              <td className="contrast">{car.Model}</td>
              <td className="contrast">{car.Year}</td>
              <td className="contrast">{car.Engine}</td>
            </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default BuyersTMaker;

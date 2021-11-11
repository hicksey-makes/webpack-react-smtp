import React, {useEffect, useState} from 'react';

function BuyersTMaker() {
  const [compatMods, setCompatMods] = useState([]);

  useEffect(() => {
    fetch('../buyers_data.json')
    .then(response => response.json())
    .then(data => {
      setCompatMods(data);
    });
  }, []);

  if (compatMods) {
    // console.log(compatMods);
  }

  return (
    <div className="comp-space">
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
          {compatMods.map((car, index) => {
            // console.log(car);
            return <tr key={index}>
              <td id="no-widen">{car.Make}</td>
              <td>{car.Model}</td>
              <td>{car.Year}</td>
              <td>{car.Engine}</td>
            </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default BuyersTMaker;

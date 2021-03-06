import React, {useEffect, useState} from 'react';

function TableMaker() {
  const [partAtts, setPartAtts] = useState({});

  useEffect(() => {
    fetch('../table_data.json')
    .then(response => response.json())
    .then(data => {
      setPartAtts(data);
    }).catch(error => {
      console.error(error);
    });

  }, []);
  if (partAtts) {
    // console.log(partAtts);
  }
  return  (
    <div className="comp-space container">
      <h2 className="section-head">PARTS ATTRIBUTES</h2>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(partAtts).map(attribute => {
            return <tr className="contrast mono" key={attribute[0]}>
                    <td>{attribute[0]}</td>
                    <td>{attribute[1]}</td>
                  </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );



}

export default TableMaker;

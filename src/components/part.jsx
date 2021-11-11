import React, {useEffect, useState} from 'react';

function PartMaker() {
  const [partDats, setPartDats] = useState({});

  useEffect(() => {
    fetch('../part_data.json')
    .then(response => response.json())
    .then(data => {
      setPartDats(data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  if (partDats) {
    // console.log(partDats);
  }
  return (
    <div className="comp-space">
      <h2 className="section-head">PART INFORMATION</h2>
      <div id="part-wrap">
        {Object.entries(partDats).map(data => {
          return <p className="p-tighten" key={data[0]}><strong>{data[0]}</strong>: {data[1]}</p>
         })
        }
      </div>

    </div>
  );
}

export default PartMaker;

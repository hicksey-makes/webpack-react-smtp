import React, {useState, useEffect} from 'react';

function FillForm() {

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [id, setId] = useState("");

  function handleMakeChange(e) {
    setMake(e);
  }

  function handleModelChange(e) {
    setModel(e);
  }

  function handleYearChange(e) {
    setYear(e);
  }

  function handleEngineChange(e) {
    setEngine(e);
  }

  function handleIdChange(e) {
    setId(e);
  }

  function Create(e) {
    // e.preventDefault();
    //create entities
    fetch("https://fairestdb.p.rapidapi.com/car/car.Model", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json",
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "x-rapidapi-key": "23680a36f3msh74c57401435d3cfp151b19jsndc9f0c9b453e"
      },
      "body": JSON.stringify({
        Make: make,
        Model: model,
        Year: year,
        Engine: engine
      })
    }).then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error(err));

  }

  function Delete(e) {
    // delete entity - DELETE
    // e.preventDefault();
    // deletes entities
    fetch(`https://fairestdb.p.rapidapi.com/car/car.Model/_id/${id}`, {
      "method": "DELETE",
      "headers": {
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "x-rapidapi-key": "23680a36f3msh74c57401435d3cfp151b19jsndc9f0c9b453e"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
  }

  return (
    <div>
    <form className="">
              <legend className="">Add-Update-Delete Car</legend>
              <label htmlFor="make">
                Car Make:
                <input
                  name="make"
                  id="make"
                  type="text"
                  className="form-control"
                  value={make}
                  onChange={(e) => handleMakeChange(e.target.value)}
                  required
                  />
              </label>
              <label htmlFor="model">
                Car Model:
                <input
                  name="model"
                  id="model"
                  type="text"
                  className="form-control"
                  value={model}
                  onChange={(e) => handleModelChange(e.target.value)}
                  required
                  />
              </label>
              <label htmlFor="year">
                Car Year:
                <input
                  name="year"
                  id="year"
                  type="text"
                  className="form-control"
                  value={year}
                  onChange={(e) => handleYearChange(e.target.value)}
                  />
              </label>
              <label htmlFor="engine">
                Car Engine:
                <input
                  name="engine"
                  id="engine"
                  type="text"
                  className="form-control"
                  value={engine}
                  onChange={(e) => handleEngineChange(e.target.value)}
                  />
              </label>
              <label htmlFor="id">
                Car Id:
                <input
                  name="id"
                  id="id"
                  type="text"
                  className="form-control"
                  value={id}
                  onChange={(e) => handleIdChange(e.target.value)}
                  required
                  />
              </label>
              <button className="btn btn-primary" type='button' onClick={(e) => Create(e)}>
                Add
              </button>
              <button className="btn btn-info" type='button'>
                  Update
              </button>
              <button className="btn btn-danger" type='button' onClick={(e) => Delete(e)}>
                  Delete
              </button>
            </form>
    </div>
  );


}

export default FillForm;

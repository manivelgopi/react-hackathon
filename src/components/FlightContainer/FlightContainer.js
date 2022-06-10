import React from 'react'
import { CarbonContext } from "../Store/DataStore";

function FlightContainer({parentRef}) {

  // form object initializing
  const initialFlightData = {
    flightType: "",
    fromCity: "",
    toCity: "",
    viaCity: "",
    classType: "",
    trips: ""
  };

  const {state, dispatch} = React.useContext(CarbonContext);
  const [flightstate, setFlightstate] = React.useState(initialFlightData);

  function handleValidation(){
   
    let toCityValid = true;
    let tripClassValid = true;
    let tripsValid = true;

    //Checking if Flight travel From location selected or not
    if(flightstate["fromCity"] !== ""){
      document.getElementById('fromCity').className="form-control is-valid"

      //if From location selected then validate..
      // To location
      if(flightstate["toCity"] === "") {
        toCityValid = false;
        document.getElementById('toCity').className="form-control is-invalid"
      }else{
        toCityValid = true;
        document.getElementById('toCity').className="form-control is-valid"
      }

      // classType validation
      if(flightstate["classType"] === "") {
        tripClassValid = false;
        document.getElementById('classType').className="form-control is-invalid"
      }else{
        tripClassValid = true;
        document.getElementById('classType').className="form-control is-valid"
      }

      // Trips validation
      if(flightstate["trips"] === ""){
        tripsValid = false;
        document.getElementById('trips').className="form-control is-invalid"
      }else if(!flightstate["trips"].toString().match(/^\d*\.?\d*$/)){
        tripsValid = false;
        document.getElementById('trips').className="form-control is-invalid"
      }
      else{
        tripsValid = true;
        document.getElementById('trips').className="form-control is-valid"
        // setFlightstate({...flightstate, trips : Number(flightstate["trips"]) })
      }

    }else return true
    
    return tripsValid && toCityValid && tripClassValid;
  }


  React.useEffect(() => {
    parentRef.current = submitHandler;
  })

  const submitHandler = () =>{
    if(handleValidation()){
      dispatch({
        ...state, 
        flight: flightstate
      });
      return true;
    }else 
      return false;
  }

  const onChangeHandler = e => {
    setFlightstate({
      ...flightstate, 
      [e.target.name] : e.target.value
    });

  }
  
  return (
    <div className="container" data-testid="flight-element" >
      <div className="row">
      <div className="col-12">
      <div className="card mt-2">
      <div className="card-header">Flights</div>
        <div className="card-body">
      <form className="mt-4 needs-validation" noValidate>
      <div className="row m-2">
        <label htmlFor="flightType" className="col-sm-4 col-form-label">Trip Type</label>
        <div className="col-sm-3 col-6">
          <input
          onChange={onChangeHandler}
           className="form-check-input" 
           type="radio" name="flightType" 
           id="flightType1" value="Return trip" />
          <label className="form-check-label" htmlFor="flightType1"> Return trip</label>
        </div>
        <div className="col-sm-3 col-6">
          <input 
          onChange={onChangeHandler}
          className="form-check-input" 
          type="radio" 
          name="flightType" 
          id="flightType2" value="One-way flight" />
          <label className="form-check-label" htmlFor="flightType2"> One-way flight</label>
        </div>
      </div>
      
      <div className="row m-2">
        <label htmlFor="fromCity" className="col-sm-2 col-form-label">From</label>
        <div className="col-sm-8 col-11">
        <select 
        onChange={onChangeHandler}
        value={flightstate.fromCity}
        id="fromCity" 
        name="fromCity" 
        className="form-select" 
        aria-label="Default select example">
          <option defaultValue value="">-- select --</option>
          <option value="FRA">Frankfurt - Germany</option>
          <option value="BER">Berlin - Germany</option>
        </select>
        <div id="fromCityHelp" className="form-text">From location</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="toCity" className="col-sm-2 col-form-label">To</label>
        <div className="col-sm-8 col-11">
        <select 
        onChange={onChangeHandler}
        value={flightstate.toCity}
        id="toCity" name="toCity" className="form-select" aria-label="Default select example">
          <option defaultValue value="">-- select --</option>
          <option value="CDG">Paris - France</option>
          <option value="GOA">Genoa - Italy</option>
          <option value="MAD">Madrid–Barajas - Spain</option>
          <option value="GVA">Genève - Switzerland</option>
          <option value="WAW">Warsaw Chopin - Poland</option>
          <option value="BOM">Mumbai - India</option>

        </select>
        <div id="toCityHelp" className="form-text">To location</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="viaCity" className="col-sm-2 col-form-label">Via (optional)</label>
        <div className="col-sm-8 col-11">
        <select 
        onChange={onChangeHandler}
        value={flightstate.viaCity}
        id="viaCity" name="viaCity" className="form-select" aria-label="Default select example">
          <option defaultValue  value="">-- select --</option>
          <option value="CDG">Paris - France</option>
          <option value="GOA">Genoa - Italy</option>
          <option value="MAD">Madrid–Barajas - Spain</option>
          <option value="GVA">Genève - Switzerland</option>
          <option value="WAW">Warsaw Chopin - Poland</option>
          <option value="BOM">Mumbai - India</option>
        </select>
        <div id="viaCityHelp" className="form-text">Journey via?</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="classType" className="col-sm-2 col-form-label">Class</label>
        <div className="col-sm-8 col-11">
        <select 
        onChange={onChangeHandler}
        value={flightstate.classType}
        id="classType" name="classType" className="form-select" aria-label="Default select example">
          <option defaultValue  value="">-- select --</option>
          <option value="Economy class">Economy class</option>
          <option value="Premium economy">Premium economy</option>
          <option value="Business class">Business class</option>
          <option value="First class">First class</option>
        </select>
        <div id="classTypeHelp" className="form-text">Trip class you travel</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="trips" className="col-sm-2 col-form-label">Trips</label>
        <div className="col-sm-8 col-11">
          <input 
          onChange={onChangeHandler}
          value={flightstate.trips}
          name="trips" type="text" className="form-control" id="trips" aria-describedby="tripsHelp" />
          <div id="tripsHelp" className="form-text">Number of Trips</div>
        </div>
      </div>
      </form>
      </div>
            {/* card-body */}
      </div>
      </div>
      </div>
      </div>
  )
}

export default FlightContainer
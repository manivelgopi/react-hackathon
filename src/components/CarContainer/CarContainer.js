import React, {useContext, useState, useEffect} from 'react'
import { CarbonContext } from "../Store/DataStore";

function CarContainer({parentRef}){
  // form object initializing
  const initialCarData = {
       mileage:'',
       mileageUnit:'km',   
       vehicleType:'',
       manufacturingYear:'',
       carType:'',
       carModel:'',
       derivative:'',
       efficiency:'',
       efficiencyUnit:'mpg-uk', 
	     efficiencyType:'petrol'
}

const {state, dispatch} = useContext(CarbonContext);
  const [carState, setCarState] = useState(initialCarData);

  useEffect(() => {
    parentRef.current = submitHandler;
  })

  const submitHandler = () =>{
    dispatch({
      ...state, 
      car: carState
    });
    return true;
  }

  const onChangeHandler = e => {
    setCarState({
      ...carState, 
      [e.target.name] : e.target.value
    });
  }

  return (
    <div className="container" data-testid="car-element">
      <div className="row">
      <div className="col-12">
      <div className="card mt-2">
      <div className="card-header">Car</div>
        <div className="card-body">
      
      <div className="row m-2">
        <label htmlFor="mileage" className="col-sm-2 col-form-label">Mileage</label>
        <div className="col-sm-6 col-8">
          <input type="number" className="form-control"
           onChange={onChangeHandler}
           value={carState.mileage}
           id="mileage" 
           name="mileage" 
           aria-describedby="mileageHelp" />
          <div id="mileageHelp" className="form-text">Enter the distance you travel using car </div>
        </div>
        <div className="col-sm-2 col-4">
            <select 
            onChange={onChangeHandler}
            value={carState.mileageUnit}
            id="mileageUnit"
            name="mileageUnit"
            className="form-select">
            <option value="miles">miles</option>
	          <option defaultValue="km">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="vehicleType" className="col-sm-2 col-form-label">Choose vehicle</label>
        <div className="col-sm-8 col-12">
          <select 
          value={carState.vehicleType}
          onChange={onChangeHandler}
          id="vehicleType" 
          name="vehicleType" className="form-select">
          <option defaultValue>- Select -</option>
          <option value="EU">EU car database</option>
          <option value="India">India car database</option>
          <option value="USA">USA car database</option>
          </select>
          <div id="vehicleTypeHelp" className="form-text">Select vehicle</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="manufacturingYear" className="col-sm-2 col-form-label"></label>
        <div className="col-sm-8 col-12">
          <select 
          value={carState.manufacturingYear}
          onChange={onChangeHandler}
          id="manufacturingYear" 
          name="manufacturingYear" className="form-select">
          <option defaultValue=""> - Select year of manufacture - </option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          </select>
          <div id="manufacturingYearHelp" className="form-text">Select vehicle manufacture year</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="carType" className="col-sm-2 col-form-label"></label>
        <div className="col-sm-8 col-12">
          <select 
          value={carState.carType}
          onChange={onChangeHandler}
          id="carType" 
          name="carType" 
          className="form-select">
          <option defaultValue=""> - Select manufacture - </option>
          <option value="ASTON">ASTON MARTIN</option>
          <option value="AUDI">AUDI</option>
          <option value="BMW">BMW</option>
          </select>
          <div id="carTypeHelp" className="form-text">Select vehicle manufacture</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="carModel" className="col-sm-2 col-form-label"></label>
        <div className="col-sm-8 col-12">
          <select 
          value={carState.carModel}
          onChange={onChangeHandler}
          id="carModel" 
          name="carModel" 
          className="form-select">
          <option defaultValue=""> - Select model - </option>
          <option value="A1">A1</option>
          <option value="B1">B1</option>
          <option value="C1">C1</option>
          </select>
          <div id="carModelHelp" className="form-text">Select vehicle model</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="derivative" className="col-sm-2 col-form-label"></label>
        <div className="col-sm-8 col-12">
          <select 
          value={carState.derivative}
          onChange={onChangeHandler}
          id="derivative" 
          name="derivative" 
          className="form-select">
          <option defaultValue=""> - select derivative - </option>
          <option value="1.0">1.0</option>
          <option value="2.0">2.0</option>
          <option value="2.4">2.4</option>
          </select>
          <div id="derivativeHelp" className="form-text">Select vehicle derivative</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="efficiency" className="col-sm-2 col-form-label">Or enter efficiency</label>
        <div className="col-sm-4 col-4">
          <input type="number" className="form-control" 
          id="efficiency" 
          value={carState.efficiency}
          onChange={onChangeHandler}
          name="efficiency" 
          aria-describedby="efficiencyHelp" />
          <div id="efficiencyHelp" className="form-text">Or enter your vehicle efficiency</div>
        </div>
        <div className="col-sm-2 col-4">
            <select 
            value={carState.efficiencyUnit}
            onChange={onChangeHandler}
            id="efficiencyUnit"
            name="efficiencyUnit"
            className="form-select">
            <option value="gkm">g/km</option>
            <option defaultValue="100km">L/100km</option>
            <option value="mpg-uk">mpg (UK)</option>
            <option value="mpg-us">mpg (US)</option>
            </select>
        </div>
        <div className="col-sm-2 col-4">
            <select 
            value={carState.efficiencyType}
            onChange={onChangeHandler}
            id="efficiencyType" 
            name="efficiencyType"
            className="form-select">
              <option defaultValue="petrol">petrol</option>
              <option value="diesel">diesel</option>
              <option value="LPG">LPG</option>
              <option value="CNG">CNG</option>
            </select>
        </div>
      </div>

      </div>
        {/* card-body */}
      </div>
      </div>{/* row */}
      
    </div>
    </div>
  )
}

export default CarContainer
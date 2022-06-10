import React, {useState, useContext, useRef}
from "react";
import { CarbonContext } from "../Store/DataStore";

const HouseHoldContainer = ({parentRef}) =>{

  // form object initializing
  const initialHouseHoldData = {
       electricity:'',
       naturalGas:'',
       naturalGasUnit:"kWh",  // therms, Euro
       heatingOil:'',
       heatingOilUnit:"kWh", // litres, metric tons, US gallons
       coal:'',
       coalUnit:"metric tons", // x 10kg bags, x 20kg bags, x 25kg bags, x 50kg bags
       lpg:'',
       lpgUnit:"kWh", // litres, therms, US gallons
       propane:'',
       propaneUnit:"litres", // US gallons
       wood:'',
       woodUnit:"metric tons"
  }
  

  // variable
  const electricityRef = useRef(null);
  const naturalGasRef = useRef(null);
  const heatingOilRef = useRef(null);
  const coalRef = useRef(null);
  const lpgRef = useRef(null);
  const propaneRef= useRef(null);
  const woodRef = useRef(null);

  // store: data store using react context 
  const {state, dispatch} = useContext(CarbonContext);

  // local variable and its update using react useState
  const [houseHoldstate, sethouseHoldState] = useState(initialHouseHoldData);


  function handleValidation(){
   
    let formIsValid = true;

    //electricity
    if(houseHoldstate["electricity"])
    if(!houseHoldstate["electricity"].match(/^\d*\.?\d*$/)) {
      formIsValid = false;
      electricityRef.current.className="form-control is-invalid"
      sethouseHoldState({...houseHoldstate, electricity : '' })
    }else{
      formIsValid = true;
      electricityRef.current.className="form-control is-valid"
      sethouseHoldState({ ...houseHoldstate, electricity : Number(houseHoldstate["electricity"]) })
    }

    // Natural gas
    if(houseHoldstate["naturalGas"])
    if(!houseHoldstate["naturalGas"].match(/^\d*\.?\d*$/)) {
        formIsValid = false;
        naturalGasRef.current.className="form-control is-invalid"
        sethouseHoldState({...houseHoldstate, naturalGas : '' })
    }else{
        formIsValid = true;
        naturalGasRef.current.className="form-control is-valid"
        sethouseHoldState({...houseHoldstate, naturalGas : Number(houseHoldstate["naturalGas"]) })
    }

    // Heating Oil
    if(houseHoldstate["heatingOil"])
    if (!houseHoldstate["heatingOil"].match(/^\d*\.?\d*$/)) {
        formIsValid = false;
        heatingOilRef.current.className="form-control is-invalid"
        sethouseHoldState({...houseHoldstate, heatingOil : '' })
    }else{
        formIsValid = true;
        heatingOilRef.current.className="form-control is-valid"
        sethouseHoldState({...houseHoldstate, heatingOil : Number(houseHoldstate["heatingOil"]) })
    }

    // coal
    if(houseHoldstate["coal"])
    if (!houseHoldstate["coal"].match(/^\d*\.?\d*$/)) {
        formIsValid = false;
        coalRef.current.className="form-control is-invalid"
        sethouseHoldState({...houseHoldstate, coal : '' })
    }else{
        formIsValid = true;
        coalRef.current.className="form-control is-valid"
        sethouseHoldState({...houseHoldstate, coal : Number(houseHoldstate["coal"]) })
    }

    // Lpg
    if(houseHoldstate["lpg"])
    if (!houseHoldstate["lpg"].match(/^\d*\.?\d*$/)) {
        formIsValid = false;
        lpgRef.current.className="form-control is-invalid"
        sethouseHoldState({...houseHoldstate, lpg : '' })
    }else{
        formIsValid = true;
        lpgRef.current.className="form-control is-valid"
        sethouseHoldState({...houseHoldstate, lpg : Number(houseHoldstate["lpg"]) })
    }

    // Propane
    if(houseHoldstate["propane"])
    if (!houseHoldstate["propane"].match(/^\d*\.?\d*$/)) {
        formIsValid = false;
        propaneRef.current.className="form-control is-invalid"
        sethouseHoldState({...houseHoldstate, propane : '' })
    }else{
        formIsValid = true;
        propaneRef.current.className="form-control is-valid"
        sethouseHoldState({...houseHoldstate, propane : Number(houseHoldstate["propane"]) })
    }

    // Wood
    if(houseHoldstate["wood"])
    if (!houseHoldstate["wood"].match(/^\d*\.?\d*$/)) {
        formIsValid = false;
        woodRef.current.className="form-control is-invalid"
        sethouseHoldState({...houseHoldstate, wood : '' })
    }else{
        formIsValid = true;
        woodRef.current.className="form-control is-valid"
        sethouseHoldState({...houseHoldstate, wood : Number(houseHoldstate["wood"]) })
    }
    
    return formIsValid;
  }

  React.useEffect(() => {
    parentRef.current = HouseDataDispatch;
  })

  const HouseDataDispatch = () =>{
    if(handleValidation()){
      dispatch({
        ...state, 
      household: houseHoldstate
      });
      return true;
    }else 
      return false;
  }

  function onChangeHandler(e){
      sethouseHoldState({
        ...houseHoldstate, 
        [e.target.name] : e.target.value
      })
  }
  
  return (
    <div className="container" data-testid="household-element" >
      <div className="row">
      <div className="col-12">
      <div className="card mt-2">
      <div className="card-header">Household</div>
        <div className="card-body ">
        
        <form
        id="householdForm">
        <div className="row m-2">
          <label htmlFor="electricity" className="col-sm-2 col-form-label">Electricity</label>
          <div className="col-sm-6 col-8">
            <input
            onChange={onChangeHandler}
            value={houseHoldstate.electricity}
            type="text" className="form-control" 
            ref={electricityRef}
            id="electricity"
            name="electricity" 
            aria-describedby="electricityHelp" required/>
            <div id="electricityHelp" className="form-text">Enter your electricity meter usage in kWh</div>
          </div>
          <div className="col-sm-4 col-4">
            <small>kWh at a factor of 0.3521 kgCO2e/kWh</small>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="naturalGas" className="col-sm-2 col-form-label">Natural gas</label>
          <div className="col-sm-6 col-8">
            <input
            onChange={onChangeHandler}
            value={houseHoldstate.naturalGas}
            type="text" className="form-control" 
            ref={naturalGasRef}
            name="naturalGas" 
            id="naturalGas" 
            aria-describedby="naturalGasHelp" />
            <div id="naturalGasHelp" className="form-text">Enter your natural gas meter usage value</div>
          </div>
          <div className="col-sm-3 col-4">
              <select
              onChange={onChangeHandler}
              value={houseHoldstate.naturalGasUnit}
              id="naturalGasUnit" 
              name="naturalGasUnit" 
              className="form-select">
              <option defaultValue="kWh">kWh</option>
              <option value="therms">therms</option>
              <option value="Euro">Euro</option>
              </select>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="heatingOil" className="col-sm-2 col-form-label">Heating oil</label>
          <div className="col-sm-6 col-8">
            <input
            onChange={onChangeHandler}
            value={houseHoldstate.heatingOil}
            type="text" className="form-control" 
            ref={heatingOilRef}
            name="heatingOil" 
            id="heatingOil" 
            aria-describedby="heatingOilHelp" />
            <div id="heatingOilHelp" className="form-text">Enter your heating oil usage value</div>
          </div>
          <div className="col-sm-3 col-4">
              <select
              onChange={onChangeHandler}
              value={houseHoldstate.heatingOilUnit}
              id="heatingOilUnit" 
              name="heatingOilUnit" 
              className="form-select">
              <option value="kWh">kWh</option>
              <option defaultValue="litres">litres</option>
              <option value="metric tons">metric tons</option>
              <option value="US gallons">US gallons</option>
              </select>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="coal" className="col-sm-2 col-form-label">Coal</label>
          <div className="col-sm-6 col-8">
            <input
            onChange={onChangeHandler}
            value={houseHoldstate.coal}
            type="text" className="form-control" 
            ref={coalRef}
            name="coal" 
            id="coal" 
            aria-describedby="coalHelp" />
            <div id="coalHelp" className="form-text">Enter your coal usage value</div>
          </div>
          <div className="col-sm-3 col-4">
              <select
              onChange={onChangeHandler}
              value={houseHoldstate.coalUnit}
              id="coalUnit"
              name="coalUnit" 
              className="form-select">
              <option defaultValue="metric tons">metric tons</option>
              <option value="x 10kg bags">x 10kg bags</option>
              <option value="x 20kg bags">x 20kg bags</option>
              <option value="x 25kg bags">x 25kg bags</option>
              <option value="x 50kg bags">x 50kg bags</option>
              </select>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="lpg" className="col-sm-2 col-form-label">LPG</label>
          <div className="col-sm-6 col-8">
            <input
            onChange={onChangeHandler}
            value={houseHoldstate.lpg}
            type="text" className="form-control" 
            ref={lpgRef}
            name="lpg" 
            id="lpg" 
            aria-describedby="lpgHelp" />
            <div id="lpgHelp" className="form-text">Enter your LPG usage value</div>
          </div>
          <div className="col-sm-3 col-4">
              <select
              onChange={onChangeHandler}
              value={houseHoldstate.lpgUnit}
              id="lpgUnit" 
              name="lpgUnit" 
              className="form-select">
              <option value="kWh">kWh</option>
              <option defaultValue="litres">litres</option>
              <option value="therms">therms</option>
              <option value="US gallons">US gallons</option>
              </select>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="propane" className="col-sm-2 col-form-label">Propane</label>
          <div className="col-sm-6 col-8">
            <input
            onChange={onChangeHandler}
            value={houseHoldstate.propane}
            type="text" className="form-control" 
            ref={propaneRef}
            name="propane" 
            id="propane" 
            aria-describedby="propaneHelp" />
            <div id="propaneHelp" className="form-text">Enter your propane usage value</div>
          </div>
          <div className="col-sm-3 col-4">
              <select
              onChange={onChangeHandler}
              value={houseHoldstate.propaneUnit}
              id="propaneUnit" 
              name="propaneUnit" 
              className="form-select">
              <option defaultValue="litres">litres</option>
              <option value="US gallons">US gallons</option>
              </select>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="wood" className="col-sm-2 col-form-label text-right">Wooden pellets</label>
          <div className="col-sm-6 col-8">
            <input
            onChange={onChangeHandler}
            value={houseHoldstate.wood}
            type="text" className="form-control" 
            ref={woodRef}
            name="wood" 
            id="wood" 
            aria-describedby="woodHelp" />
            <div id="woodHelp" className="form-text">Enter your wooden pellets usage value</div>
          </div>
          <div className="col-sm-3 col-4">
              <select
              onChange={onChangeHandler}
              value={houseHoldstate.woodUnit}
              id="woodUnit" 
              name="woodUnit" 
              className="form-select">
                <option defaultValue="metric tons">metric tons</option>
              </select>
          </div>
        </div>

        <button
        hidden={true}
        className="hidden"
        type='submit'>Submit</button>
        
        </form>

        </div>
        {/* card-body */}
      </div>
      </div>{/* row */}
      
    </div>
    </div>
  )
}

export default HouseHoldContainer;
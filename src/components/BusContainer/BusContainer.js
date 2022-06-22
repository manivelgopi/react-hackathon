import React, {useContext, useState, useEffect} from 'react'
import { CarbonContext } from "../Store/DataStore";

function BusContainer({parentRef}) {

const {state, dispatch} = useContext(CarbonContext);
const {busTrain} = state;
const [busState, setBusState] = useState(busTrain);

useEffect(() => {
 parentRef.current = submitHandler;
})

const submitHandler = () =>{
  const {bus, coach, train, longDisTrain, tram, subway, taxi} = busState;
  
 dispatch({
   ...state, 
   busTrain: {...busState,
    bus:parseFloat(bus),
    coach:parseFloat(coach),
    train:parseFloat(train),
     longDisTrain:parseFloat(longDisTrain),
    tram:parseFloat(tram),
    subway:parseFloat(subway),
    taxi:parseFloat(taxi)
  }
 });
 return true;
}

const onChangeHandler = e => {
 setBusState({
   ...busState, 
   [e.target.name] : e.target.value
 });
}

  return (
    <div className="container" data-testid="bus-element">
      <div className="row">
      <div className="col-12">
      <div className="card mt-2">
      <div className="card-header">Bus and Train</div>
        <div className="card-body">

      <div className="row m-2">
        <label htmlFor="bus" className="col-sm-4 col-form-label">Bus</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={busState.bus}
           id="bus" name="bus" aria-describedby="busHelp" />
          <div id="busHelp" className="form-text">Enter the distance you travel using Bus </div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={busState.busUnit}
              onChange={onChangeHandler}
             id="busUnit" name="busUnit" className="form-select">
              <option value="miles">miles</option>
              <option defaultValue="km">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="coach" className="col-sm-4 col-form-label">Coach</label>
        <div className="col-sm-6 col-8">
          <input
          value={busState.coach}
           onChange={onChangeHandler}
           type="text" className="form-control" 
           id="coach" name="coach" aria-describedby="coachHelp" />
          <div id="coachHelp" className="form-text">Enter the distance you travel using Coach </div>
        </div>
        <div className="col-sm-2 col-4">
            <select 
            value={busState.coachUnit}
            onChange={onChangeHandler}
            id="coachUnit" name="coachUnit" className="form-select">
              <option value="miles">miles</option>
              <option defaultValue="km">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="train" className="col-sm-4 col-form-label">Local or Commuter Train</label>
        <div className="col-sm-6 col-8">
          <input
          value={busState.train}
           onChange={onChangeHandler}
           type="text" className="form-control" id="train" name="train" aria-describedby="trainHelp" />
          <div id="trainHelp" className="form-text">Enter the distance you travel using Train </div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={busState.trainUnit}
             onChange={onChangeHandler}
             id="trainUnit" name="trainUnit" className="form-select">
              <option value="miles">miles</option>
              <option defaultValue="km">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="longDisTrain" className="col-sm-4 col-form-label">Long Distance Train</label>
        <div className="col-sm-6 col-8">
          <input 
          value={busState.longDisTrain}
          onChange={onChangeHandler}
          type="text" className="form-control" id="longDisTrain" name="longDisTrain" 
          aria-describedby="longDisTrainHelp" />
          <div id="longDisTrainHelp" className="form-text">Enter the distance you travel using Long distance train </div>
        </div>
        <div className="col-sm-2 col-4">
            <select 
            value={busState.longDisTrainUnit}
            onChange={onChangeHandler}
            id="longDisTrainUnit" name="longDisTrainUnit" className="form-select">
              <option value="miles">miles</option>
              <option defaultValue="km">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="tram" className="col-sm-4 col-form-label">Tram</label>
        <div className="col-sm-6 col-8">
          <input 
          value={busState.tram}
          onChange={onChangeHandler}
          type="text" className="form-control" id="tram" name="tram" aria-describedby="tramHelp" />
          <div id="tramHelp" className="form-text">Enter the distance you travel using Tram </div>
        </div>
        <div className="col-sm-2 col-4">
            <select 
            value={busState.tramUnit}
            onChange={onChangeHandler}
            id="tramUnit" name="tramUnit" className="form-select">
              <option value="miles">miles</option>
              <option defaultValue="km">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="subway" className="col-sm-4 col-form-label">Subway</label>
        <div className="col-sm-6 col-8">
          <input 
          value={busState.subway}
          onChange={onChangeHandler}
          type="text" className="form-control" id="subway" name="subway" aria-describedby="subwayHelp" />
          <div id="subwayHelp" className="form-text">Enter the distance you travel using Subway </div>
        </div>
        <div className="col-sm-2 col-4">
            <select 
            value={busState.subwayUnit}
            onChange={onChangeHandler}
            id="subwayUnit" name="subwayUnit" className="form-select">
              <option value="miles">miles</option>
              <option defaultValue="km">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="taxi" className="col-sm-4 col-form-label">Taxi</label>
        <div className="col-sm-6 col-8">
          <input 
          value={busState.taxi}
          onChange={onChangeHandler}
          type="text" className="form-control" id="taxi" name="taxi" aria-describedby="taxiHelp" />
          <div id="taxiHelp" className="form-text">Enter the distance you travel using Taxi </div>
        </div>
        <div className="col-sm-2 col-4">
            <select 
            value={busState.taxiUnit}
            onChange={onChangeHandler}
            id="taxiUnit" name="taxiUnit" className="form-select">
              <option value="miles">miles</option>
              <option defaultValue="km">km</option>
            </select>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default BusContainer
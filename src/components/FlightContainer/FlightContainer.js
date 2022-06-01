import React from 'react'

function FlightContainer() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-12">
      <div className="card mt-2">
      <div className="card-header">Flights</div>
        <div className="card-body">
      <form className="mt-4 needs-validation" noValidate>
      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-4 col-form-label">Trip Type</label>
        <div className="col-sm-3 col-6">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
          <label className="form-check-label" htmlFor="inlineRadio1"> Return trip</label>
        </div>
        <div className="col-sm-3 col-6">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
          <label className="form-check-label" htmlFor="inlineRadio2"> One-way flight</label>
        </div>
      </div>
      
      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-2 col-form-label">From</label>
        <div className="col-sm-10 col-11">
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-2 col-form-label">To</label>
        <div className="col-sm-8 col-11">
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-2 col-form-label">Via (optional)</label>
        <div className="col-sm-8 col-11">
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-2 col-form-label">Class</label>
        <div className="col-sm-8 col-11">
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-2 col-form-label">Trips</label>
        <div className="col-sm-8 col-11">
          <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
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
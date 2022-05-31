import React from 'react'

function FlightContainer() {
  return (
    <div>
      <form className="mt-4 needs-validation" novalidate>

      <div className="row m-3">
        <label for="electricity" className="col-sm-2 col-form-label"></label>
        <div className="col-sm-4 col-8">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
          <label class="form-check-label" for="inlineRadio1"> Return trip</label>
        </div>
        <div className="col-sm-4 col-4">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
          <label class="form-check-label" for="inlineRadio2"> One-way flight</label>
        </div>
      </div>
      
      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label">From</label>
        <div className="col-sm-8 col-11">
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label">To</label>
        <div className="col-sm-8 col-11">
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label">Via (optional)</label>
        <div className="col-sm-8 col-11">
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label">Class</label>
        <div className="col-sm-8 col-11">
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label">Trips</label>
        <div className="col-sm-8 col-11">
        <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
        <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

     
      <div class="col-12">
        <button class="btn btn-outline-secondary btn-sm float-center" type="submit">Calculate Flight Footprint</button>
      </div>
  </form>
    </div>
  )
}

export default FlightContainer
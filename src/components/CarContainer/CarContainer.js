import React from 'react'

function CarContainer() {
  return (
    <div>
      <form className="mt-4 needs-validation" novalidate>
      
      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label">Mileage</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
        <div className="col-sm-2 col-4">
            <select id="inputState" className="form-select">
            <option value="1.6093">miles</option>
	          <option selected="selected" value="1">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label">Choose vehicle</label>
        <div className="col-sm-8 col-12">
          <select id="inputState" className="form-select">
          <option selected="selected" value="Average">Average van, motorbike &amp; car database</option>
          <option value="EU">EU car database</option>
          <option value="India">India car database</option>
          <option value="USA">USA car database</option>
          </select>
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label"></label>
        <div className="col-sm-8 col-12">
          <select id="inputState" className="form-select">
          <option selected="selected" value=""> - select year of manufacture - </option>
          <option value="Car">Car</option>
          <option value="Motorbike">Motorbike</option>
          <option value="Van">Van</option>
          </select>
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label"></label>
        <div className="col-sm-8 col-12">
          <select id="inputState" className="form-select">
          <option selected="selected" value=""> - select year of manufacture - </option>
          <option value="Car">Car</option>
          <option value="Motorbike">Motorbike</option>
          <option value="Van">Van</option>
          </select>
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label"></label>
        <div className="col-sm-8 col-12">
          <select id="inputState" className="form-select">
          <option selected="selected" value=""> - select year of manufacture - </option>
          <option value="Car">Car</option>
          <option value="Motorbike">Motorbike</option>
          <option value="Van">Van</option>
          </select>
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label"></label>
        <div className="col-sm-8 col-12">
          <select id="inputState" className="form-select">
          <option selected="selected" value=""> - select year of manufacture - </option>
          <option value="Car">Car</option>
          <option value="Motorbike">Motorbike</option>
          <option value="Van">Van</option>
          </select>
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
      </div>

      <div className="row m-2">
        <label for="electricity" className="col-sm-2 col-form-label">Or enter efficiency</label>
        <div className="col-sm-4 col-4">
          <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
        <div className="col-sm-2 col-4">
            <select id="inputState" className="form-select">
            <option value="1">g/km</option>
            <option selected="selected" value="10">L/100km</option>
            <option value="-2824.9">mpg (UK)</option>
            <option value="-2352.2">mpg (US)</option>
            </select>
        </div>
        <div className="col-sm-2 col-4">
            <select id="inputState" className="form-select">
              <option value="2.19352">petrol</option>
              <option value="2.51233">diesel</option>
              <option value="1.55709">LPG</option>
              <option value="0.44423">CNG</option>
            </select>
        </div>
      </div>
      
      <div class="col-12">
        <button class="btn btn-outline-secondary btn-sm float-end" type="submit">Calculate Household Footprint</button>
      </div>

  </form>
    </div>
  )
}

export default CarContainer
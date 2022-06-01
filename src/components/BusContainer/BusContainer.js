import React from 'react'

function BusContainer() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-12">
      <div className="card mt-2">
      <div className="card-header">Bus / Train</div>
        <div className="card-body">
      <form className="mt-4 needs-validation" noValidate>
      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-4 col-form-label">Bus</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
        <div className="col-sm-2 col-4">
            <select id="inputState" className="form-select">
              <option value="1.6093">miles</option>
              <option defaultValue="1">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-4 col-form-label">Coach</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
        <div className="col-sm-2 col-4">
            <select id="inputState" className="form-select">
              <option value="1.6093">miles</option>
              <option defaultValue="1">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-4 col-form-label">Local or Commuter Train</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
        <div className="col-sm-2 col-4">
            <select id="inputState" className="form-select">
              <option value="1.6093">miles</option>
              <option defaultValue="1">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-4 col-form-label">Long Distance Train</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
        <div className="col-sm-2 col-4">
            <select id="inputState" className="form-select">
              <option value="1.6093">miles</option>
              <option defaultValue="1">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-4 col-form-label">Tram</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
        <div className="col-sm-2 col-4">
            <select id="inputState" className="form-select">
              <option value="1.6093">miles</option>
              <option defaultValue="1">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-4 col-form-label">Subway</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
        <div className="col-sm-2 col-4">
            <select id="inputState" className="form-select">
              <option value="1.6093">miles</option>
              <option defaultValue="1">km</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="electricity" className="col-sm-4 col-form-label">Taxi</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
          <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
        </div>
        <div className="col-sm-2 col-4">
            <select id="inputState" className="form-select">
              <option value="1.6093">miles</option>
              <option defaultValue="1">km</option>
            </select>
        </div>
      </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default BusContainer
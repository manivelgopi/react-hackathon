import React 
from "react";

function HouseHoldContainer() {

  // const initialState = {
  //   firstName: '',
  //   lastName: '',
  //   biography: '',
  //   transport: '',
  //   agree: false,
  //   breakfast: false, 
  //   lunch: false, 
  //   dinner: false, 
  //   sizeShirt: ''
  // }

  // const loadDataIntoForm = {
  //   firstName: 'Swapnil',
  //   lastName: 'Srivastava',
  //   biography: 'Sometimes just working on react app',
  //   transport: 'boats',
  //   agree: true,
  //   breakfast: true, 
  //   lunch: false, 
  //   dinner: true, 
  //   sizeShirt: 'l'
  // }

  // const [formState, setFormState] = useState(initialState)
  
  // const onChangeHandler = e => {
  //   const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

  //   setFormState({
  //     ...formState, 
  //     [e.target.name] : value
  //   });
  // }

  // const onClickHandler = () => {
  //   setFormState(initialState);
  // }

  // const onSubmitHandler = e => {
  //   e.preventDefault();
  //   console.log(formState)
  // }

  // const onLoadHandler = () => {
  //   setFormState(loadDataIntoForm);
  // }

  return (
    // <form onSubmit={onSubmitHandler}>
    //   <div>Name in HouseHoldContainer</div>
    //   <br/>

    //   <span>{formState.firstName} {formState.lastName}</span> 
    //   <br/>

    //   <label htmlFor="firstName">First Name</label>
    //   <input id="firstName" 
    //         name="firstName"
    //         onChange={onChangeHandler}
    //         value={formState.firstName}
    //   />
    //   <br/>

    //   <label htmlFor="lastName">Last Name</label>
    //   <input id="lastName"
    //         name="lastName" 
    //         onChange={onChangeHandler}
    //         value={formState.lastName}
    //   />
    //   <br/>

    //   <label htmlFor="biography">Biography</label>
    //   <textarea rows="5" 
    //       id="biography" 
    //       name="biography" 
    //       onChange={onChangeHandler} 
    //       value={formState.biography}/>
    //   <br/>

    //   <label htmlFor="transport">Pref. Transport</label>
    //   <select
    //     id="transport"
    //     name="transport"
    //     onChange={onChangeHandler}
    //     value={formState.transport}>
    //     <option>None Selected</option>
    //     <option value="planes">Planes</option>
    //     <option value="trains">Trains</option>
    //     <option value="cars">Cars</option>
    //     <option value="boats">Boats</option>
    //   </select>
    //   <br/>

    //   <fieldset>
    //     <legend>Select your meals</legend>
    //     <input 
    //       id="breakfast"
    //       name="breakfast"
    //       type="checkbox"
    //       onChange={onChangeHandler}
    //       checked={formState.breakfast}
    //     />
    //     <label htmlFor="breakfast">Breakfast</label>

    //     <input 
    //       id="lunch"
    //       name="lunch"
    //       type="checkbox"
    //       onChange={onChangeHandler}
    //       checked={formState.lunch}
    //     />
    //     <label htmlFor="lunch">Lunch</label>

    //     <input 
    //       id="dinner"
    //       name="dinner"
    //       type="checkbox"
    //       onChange={onChangeHandler}
    //       checked={formState.dinner}
    //     />
    //     <label htmlFor="dinner">Dinner</label>
    //   </fieldset>

    //   <fieldset>
    //     <legend>T Shirt Sizes</legend>
    //     <input 
    //       id="sizeS"
    //       name="sizeShirt"
    //       type="radio"
    //       onChange={onChangeHandler}
    //       value="s"
    //       checked={formState.sizeShirt === "s"}
    //     />
    //     <label htmlFor="sizeS">Small</label> 
    //     <input 
    //       id="sizeM"
    //       name="sizeShirt"
    //       type="radio"
    //       onChange={onChangeHandler}
    //       value="m"
    //       checked={formState.sizeShirt === "m"}
    //     />
    //     <label htmlFor="sizeS">Medium</label> 
    //     <input 
    //       id="sizeL"
    //       name="sizeShirt"
    //       type="radio"
    //       onChange={onChangeHandler}
    //       value="l"
    //       checked={formState.sizeShirt === "l"}
    //     />
    //     <label htmlFor="sizeS">Large</label> 
    //   </fieldset>

    //   <label htmlFor="agree">I Agree to the TandC</label>
    //   <input 
    //     id="agree"
    //     name="agree"
    //     type="checkbox"
    //     onChange={onChangeHandler}
    //     checked={formState.agree}
    //   />

    //   <button type="submit">Save</button>
    //   <button type="button" onClick={onClickHandler}>Reset Form</button>
    //   <button type="button" onClick={onLoadHandler}>Load Data</button>
    // </form>
    <div className="container">
      <div className="row">
      <div className="col-12">
      <div className="card mt-2">
      <div className="card-header">Household</div>
        <div className="card-body ">
        
        <form className="mt-4 needs-validation " noValidate>
        <div className="row m-2">
          <label htmlFor="electricity" className="col-sm-2 col-form-label">Electricity</label>
          <div className="col-sm-6 col-8">
            <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
            <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="col-sm-4 col-4">
            <small>kWh at a factor of 0.3521 kgCO2e/kWh</small>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="electricity" className="col-sm-2 col-form-label">Natural gas</label>
          <div className="col-sm-6 col-8">
            <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
            <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="col-sm-3 col-4">
              <select id="inputState" className="form-select">
              <option defaultValue="0.18316">kWh</option>
              <option value="5.36789">therms</option>
              <option value="2.9400">Euro (€)</option>
              </select>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="electricity" className="col-sm-2 col-form-label">Heating oil</label>
          <div className="col-sm-6 col-8">
            <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
            <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="col-sm-3 col-4">
              <select id="inputState" className="form-select">
              <option value="0.24677">kWh</option>
              <option defaultValue="2.54014">litres</option>
              <option value="3165.01">metric tons</option>
              <option value="9.61547">US gallons</option>
              </select>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="electricity" className="col-sm-2 col-form-label">Coal</label>
          <div className="col-sm-6 col-8">
            <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
            <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="col-sm-3 col-4">
              <select id="inputState" className="form-select">
              <option defaultValue="2883.26">metric tons</option>
              <option value="28.8326">x 10kg bags</option>
              <option value="57.6652">x 20kg bags</option>
              <option value="72.0815">x 25kg bags</option>
              <option value="144.163">x 50kg bags</option>
              </select>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="electricity" className="col-sm-2 col-form-label">LPG</label>
          <div className="col-sm-6 col-8">
            <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
            <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="col-sm-3 col-4">
              <select id="inputState" className="form-select">
              <option value="0.21449">kWh</option>
              <option defaultValue="1.55709">litres</option>
              <option value="6.28608">therms</option>
              <option value="5.88799">US gallons</option>
              </select>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="electricity" className="col-sm-2 col-form-label">Propane</label>
          <div className="col-sm-6 col-8">
            <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
            <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="col-sm-3 col-4">
              <select id="inputState" className="form-select">
              <option defaultValue="1.54354">litres</option>
              <option value="5.84293">US gallons</option>
              </select>
          </div>
        </div>

        <div className="row m-2">
          <label htmlFor="electricity" className="col-sm-2 col-form-label text-right">Wooden pellets</label>
          <div className="col-sm-6 col-8">
            <input type="text" className="form-control" id="electricity" aria-describedby="electricityHelp" />
            <div id="electricityHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="col-sm-3 col-4">
              <select id="inputState" className="form-select">
                <option defaultValue="72.61754">metric tons</option>
              </select>
          </div>
        </div>
        
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
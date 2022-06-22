import React, {useEffect, useContext, useState}from "react";
import { CarbonContext } from "../Store/DataStore";

function DailyLifeAndMiscContainer({parentRef}){

  const {state, dispatch} = useContext(CarbonContext);
  const {dailyLifeMisc} = state;
  const [dailyLifeMiscState, setDailyLifeMiscState] = useState(dailyLifeMisc);

  useEffect(() => {
    parentRef.current = submitHandler;
  })
  
  //dispatch code
  const submitHandler = () =>{
    const {
      foodAndDrinks,pharmaceuticals, clothesTextilesShoes, paperBaseProducts,
      computersAndITEquip, tvRadioPhone, motorVehicle,furnitureAndManuGoods,
      hotelRestaurantPubs, telephoneMobilephoneCost, bankingFinance,
      insurance, education
    } = dailyLifeMiscState;
   
    dispatch({
      ...state, 
      dailyLifeMisc: {...dailyLifeMiscState,
        foodAndDrinks: parseFloat(foodAndDrinks),
        pharmaceuticals: parseFloat(pharmaceuticals),
        clothesTextilesShoes: parseFloat(clothesTextilesShoes),
        paperBaseProducts: parseFloat(paperBaseProducts),
        computersAndITEquip: parseFloat(computersAndITEquip),
        tvRadioPhone: parseFloat(tvRadioPhone),
        motorVehicle: parseFloat(motorVehicle),
        furnitureAndManuGoods: parseFloat(furnitureAndManuGoods),
        hotelRestaurantPubs: parseFloat(hotelRestaurantPubs),
        telephoneMobilephoneCost: parseFloat(telephoneMobilephoneCost),
        bankingFinance: parseFloat(bankingFinance),
        insurance: parseFloat(insurance),
        education: parseFloat(education)
      }
    });
    return true
  }

  const onChangeHandler = e => {
    setDailyLifeMiscState({
      ...dailyLifeMiscState, 
      [e.target.name] : e.target.value
    });
   }

  return (
    <div className="container">
      <div className="row">
      <div className="col-12">
      <div className="card mt-2">
      <div className="card-header">Daily Life</div>
        <div className="card-body ">
        

      <div className="row m-2">
        <label htmlFor="foodAndDrinks" className="col-sm-4 col-form-label">Food and drink products</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.foodAndDrinks}
           id="foodAndDrinks" name="foodAndDrinks" aria-describedby="foodAndDrinksHelp" />
          <div id="foodAndDrinksHelp" className="form-text">Enter the Food And Drinks value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.foodAndDrinksUnit}
              onChange={onChangeHandler}
             id="foodAndDrinksUnit" name="foodAndDrinksUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>
      
      <div className="row m-2">
        <label htmlFor="pharmaceuticals" className="col-sm-4 col-form-label">Pharmaceuticals</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.pharmaceuticals}
           id="pharmaceuticals" name="pharmaceuticals" aria-describedby="pharmaceuticalsHelp" />
          <div id="pharmaceuticalsHelp" className="form-text">Enter the pharmaceuticals value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.pharmaceuticalsUnit}
              onChange={onChangeHandler}
             id="pharmaceuticalsUnit" name="pharmaceuticalsUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="clothesTextilesShoes" className="col-sm-4 col-form-label">Clothes, textiles and shoes</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.clothesTextilesShoes}
           id="clothesTextilesShoes" name="clothesTextilesShoes" aria-describedby="clothesTextilesShoesHelp" />
          <div id="clothesTextilesShoesHelp" className="form-text">Enter the Clothes, textiles and shoes value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.clothesTextilesShoesUnit}
              onChange={onChangeHandler}
             id="clothesTextilesShoesUnit" name="clothesTextilesShoesUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="paperBaseProducts" className="col-sm-4 col-form-label">Paper based products </label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.paperBaseProducts}
           id="paperBaseProducts" name="paperBaseProducts" aria-describedby="paperBaseProductsHelp" />
          <div id="paperBaseProductsHelp" className="form-text">Enter the Paper based products (e.g. books, magazines, newspapers)	value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.paperBaseProductsUnit}
              onChange={onChangeHandler}
             id="paperBaseProductsUnit" name="paperBaseProductsUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="computersAndITEquip" className="col-sm-4 col-form-label">Computers and IT equipment</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.computersAndITEquip}
           id="computersAndITEquip" name="computersAndITEquip" aria-describedby="computersAndITEquipHelp" />
          <div id="computersAndITEquipHelp" className="form-text">Enter the Food And Drinks</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.computersAndITEquipUnit}
              onChange={onChangeHandler}
             id="computersAndITEquipUnit" name="computersAndITEquipUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="tvRadioPhone" className="col-sm-4 col-form-label">Television, radio and phone (equipment)</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.tvRadioPhone}
           id="tvRadioPhone" name="tvRadioPhone" aria-describedby="tvRadioPhoneHelp" />
          <div id="tvRadioPhoneHelp" className="form-text">Enter the Food And Drinks</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.tvRadioPhoneUnit}
              onChange={onChangeHandler}
             id="tvRadioPhoneUnit" name="tvRadioPhoneUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="motorVehicle" className="col-sm-4 col-form-label">Motor vehicles (not including fuel costs)</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.motorVehicle}
           id="motorVehicle" name="motorVehicle" aria-describedby="motorVehicleHelp" />
          <div id="motorVehicleHelp" className="form-text">Enter the Motor vehicles (not including fuel costs) value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.motorVehicleUnit}
              onChange={onChangeHandler}
             id="motorVehicleUnit" name="motorVehicleUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="furnitureAndManuGoods" className="col-sm-4 col-form-label">Furniture and other manufactured goods</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.furnitureAndManuGoods}
           id="furnitureAndManuGoods" name="furnitureAndManuGoods" aria-describedby="furnitureAndManuGoodsHelp" />
          <div id="furnitureAndManuGoodsHelp" className="form-text">Enter the Furniture and other manufactured goods value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.furnitureAndManuGoodsUnit}
              onChange={onChangeHandler}
             id="furnitureAndManuGoodsUnit" name="furnitureAndManuGoodsUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="hotelRestaurantPubs" className="col-sm-4 col-form-label">Hotels, restaurants, and pubs etc.</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.hotelRestaurantPubs}
           id="hotelRestaurantPubs" name="hotelRestaurantPubs" aria-describedby="hotelRestaurantPubsHelp" />
          <div id="hotelRestaurantPubsHelp" className="form-text">Enter the Hotels, restaurants, and pubs etc value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.hotelRestaurantPubsUnit}
              onChange={onChangeHandler}
             id="hotelRestaurantPubsUnit" name="hotelRestaurantPubsUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="telephoneMobilephoneCost" className="col-sm-4 col-form-label">Telephone, mobile/cell phone call costs</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.telephoneMobilephoneCost}
           id="telephoneMobilephoneCost" name="telephoneMobilephoneCost" aria-describedby="telephoneMobilephoneCostHelp" />
          <div id="telephoneMobilephoneCostHelp" className="form-text">Enter the Telephone, mobile/cell phone call costs value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.telephoneMobilephoneCostUnit}
              onChange={onChangeHandler}
             id="telephoneMobilephoneCostUnit" name="telephoneMobilephoneCostUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="bankingFinance" className="col-sm-4 col-form-label">Banking and finance</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.bankingFinance}
           id="bankingFinance" name="bankingFinance" aria-describedby="bankingFinanceHelp" />
          <div id="bankingFinanceHelp" className="form-text">Enter the Banking and finance (mortgage and loan interest payments) value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.bankingFinanceUnit}
              onChange={onChangeHandler}
             id="bankingFinanceUnit" name="bankingFinanceUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="insurance" className="col-sm-4 col-form-label">Insurance</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.insurance}
           id="insurance" name="insurance" aria-describedby="insuranceHelp" />
          <div id="insuranceHelp" className="form-text">Enter the Insurance value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.insuranceUnit}
              onChange={onChangeHandler}
             id="insuranceUnit" name="insuranceUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="education" className="col-sm-4 col-form-label">Education</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.education}
           id="education" name="education" aria-describedby="educationHelp" />
          <div id="educationHelp" className="form-text">Enter the Education value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.educationUnit}
              onChange={onChangeHandler}
             id="educationUnit" name="educationUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
            </select>
        </div>
      </div>

      <div className="row m-2">
        <label htmlFor="recreationalCulturalSportsActivities" className="col-sm-4 col-form-label">Recreational, cultural and sporting activities</label>
        <div className="col-sm-6 col-8">
          <input type="text" className="form-control"
            onChange={onChangeHandler}
            value={dailyLifeMiscState.recreationalCulturalSportsActivities}
           id="recreationalCulturalSportsActivities" name="recreationalCulturalSportsActivities" aria-describedby="recreationalCulturalSportsActivitiesHelp" />
          <div id="recreationalCulturalSportsActivitiesHelp" className="form-text">Enter the Recreational, cultural and sporting activities value</div>
        </div>
        <div className="col-sm-2 col-4">
            <select
            value={dailyLifeMiscState.recreationalCulturalSportsActivitiesUnit}
              onChange={onChangeHandler}
             id="recreationalCulturalSportsActivitiesUnit" name="recreationalCulturalSportsActivitiesUnit" className="form-select">
              <option value="Year" defaultValue>Per Year</option>
              <option value="Month" >Per Month</option>
              <option value="Week" >Per Month</option>
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
export default DailyLifeAndMiscContainer

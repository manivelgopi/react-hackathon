import React, {useState, createContext} from 'react';

const initData = {
  "household":{
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
  },
  "flight":{
      flightType: "",
      fromCity: "",
      toCity: "",
      viaCity: "",
      classType: "",
      trips: ""
  },
  "car":{
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
  },
  "busTrain":{
      bus: '',
      busUnit: 'km',
      coach: '',
      coachUnit: 'km',
      train: '',
      trainUnit: 'km',
      longDisTrain: '',
      longDisTrainUnit: 'km',
      tram: '',
      tramUnit: 'km',
      subway: '',
      subwayUnit: 'km',
      taxi: '',
      taxiUnit: 'km'
  },
  "dailyLifeMisc":{
    foodAndDrinks:'',
    pharmaceuticals:'',
    clothesTextilesShoes:'',
    paperBaseProducts:'',
    computersAndITEquip:'',
    tvRadioPhone:'',
    motorVehicle:'',
    furnitureAndManuGoods:'',
    hotelRestaurantPubs:'',
    telephoneMobilephoneCost:'',
    bankingFinance:'',
    insurance:'',
    education:'',
    recreationalCulturalSportsActivities:'',
    foodAndDrinksUnit:"per year",
    clothesTextilesShoesUnit:"per year",
    pharmaceuticalsUnit:"per year",
    paperBaseProductsUnit:"per year",
    computersAndITEquipUnit:"per year",
    tvRadioPhoneUnit:"per year",
    motorVehicleUnit:"per year",
    furnitureAndManuGoodsUnit:"per year",
    hotelRestaurantPubsUnit:"per year",
    telephoneMobilephoneCostUnit:"per year",
    bankingFinanceUnit:"per year",
    insuranceUnit:"per year",
    educationUnit:"per year",
    recreationalCulturalSportsActivitiesUnit:"per year"
  }
}  

export const CarbonContext = createContext(null);

const DataStoreProvider = ({children}) => {
    const [ states, dispatchHere ] = useState(initData);


   return(<CarbonContext.Provider value={{state: states, dispatch: dispatchHere}}>
        {children}
    </CarbonContext.Provider>)
}
export default DataStoreProvider;
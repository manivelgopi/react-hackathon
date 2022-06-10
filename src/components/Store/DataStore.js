import React, {useState} from 'react';

const initData = {
  "household":{},
  "flight":{},
  "car":{},
  "busTrain":{},
  "dailyLifeMisc":{}
}  

export const CarbonContext = React.createContext(null);

const DataStoreProvider = ({children}) => {
    const [ states, dispatchHere ] = useState(initData);

   return(<CarbonContext.Provider value={{state: states, dispatch: dispatchHere}}>
        {children}
    </CarbonContext.Provider>)
}
export default DataStoreProvider;
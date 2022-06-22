import React, {useContext, useEffect, useState} from 'react';
import blackfoot from './assets/blackfoot.gif';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './assets/result.css';
import axios from "axios";
import { CarbonContext } from "../Store/DataStore";

ChartJS.register(ArcElement, Tooltip, Legend);

React.lazy(() =>
  import("chart.js")
);

const Loader = () => {
  return <div>Loading...</div>;
};

function ResultContainer({parentRef}) {

  // store data from all form
  const {state} = useContext(CarbonContext);

  const [footprint, setFootprint] = useState(0);
  const [isLoading, setIsloading] = useState(true);

  
  // Chart Data
  const data = {
              labels: ['World', 'Europ Union', 'Germany', 'Yours'],
              datasets: [
                {
                  label: '# of Votes',
                  data: [4.8, 6.4, 8.56, footprint],
                  backgroundColor: [
                    'rgba(25, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.1)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 98, 0, 0.8)',
                  ],
                  borderColor: [
                    'rgba(25, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 98, 0, 1)',
                  ],
                  borderWidth: 1,
                },
              ],
  };

  // Submit button handler 
  const onSubmitHandler =()=>{
    axios.post('https://herhackathon-app.azurewebsites.net/herHackathon/CarbonFootprint/calculate', state)
    .then(function (response) {
       console.log(response.data);
       setFootprint(response.data.carbonFootPrint.toFixed(2))
       setIsloading(false);
    })
    .catch(function (error) {
      console.log("Submit Error",error);
      setIsloading(false);
    });
  }

   useEffect(() => {
    parentRef.current = onSubmitHandler;
   })

   
  return (
    <div className="container">
      <div className="row">
      <div className="col-12">
      <div className="card mt-2">
      <div className="card-header">Results</div>
        <div className="card-body">
        <div className="row">

        {isLoading ?
              <div className="col-12">
              Loading..
              <div className="loader"></div>
            </div>
        :
              <>
                <div className="col-sm-5">
                    <figure className="figure ms-5 mt-5 border border-primary p-3 mx-auto">
                      <img src={blackfoot} width={90} className="figure-img img-fluid footprintCard" alt="footprint" />
                      <figcaption className="figure-caption fs-3 text-center text-primary">
                        <strong>Your Footprint ({footprint})</strong>
                      </figcaption>
                    </figure>
                    
                </div>
                <div className="col-sm-6 mt-4">
                      <React.Suspense fallback={<Loader />}>
                      <Doughnut data={data} width={100}
                        height={70}
                        options={{ maintainAspectRatio: false }}/>
                      </React.Suspense>
                </div>
                <div className="col-sm-5"></div>
                <div className="col-sm-6 mt-4">
                  <ul>
                  <li>The average for the European Union is about 6.4 metric tons</li>
                  <li>The average worldwide carbon footprint is about 4.8 metric tons</li>
                  <li>The worldwide target to combat climate change is 0 metric tons</li>
                  </ul>
                </div>
                </>
        }
          
        </div>
        
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ResultContainer;
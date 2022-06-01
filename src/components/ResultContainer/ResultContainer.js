import React from 'react';
import blackfoot from './assets/blackfoot.gif';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['World', 'Europ Union', 'Country'],
  datasets: [
    {
      label: '# of Votes',
      data: [4.8, 6.4, 8.56],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
 
};

function ResultContainer() {

  
  return (
    <div className="container">
      <div className="row">
      <div className="col-12">
      <div className="card mt-2">
      <div className="card-header">Results</div>
        <div className="card-body">
        <div className="row">
          <div className="col-sm-5">
              <figure className="figure ms-5 mt-5">
                <img src={blackfoot} width={100} height={50} className="figure-img img-fluid rounded" alt="..." />
                <figcaption className="figure-caption">
                  <strong>Your Footprint (12.0)</strong>
                </figcaption>
              </figure>
              <ul>
          <li>The average for the European Union is about 6.4 metric tons</li>
          <li>The average worldwide carbon footprint is about 4.8 metric tons</li>
          <li>The worldwide target to combat climate change is 0 metric tons</li>
          </ul>
          </div>
          <div className="col-sm-6">
            <Doughnut data={data} width={100}
  height={70}
  options={{ maintainAspectRatio: false }}/>
          </div>
          
        </div>
        
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ResultContainer;
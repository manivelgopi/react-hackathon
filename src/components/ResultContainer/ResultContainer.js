import React from 'react';
import blackfoot from './assets/blackfoot.gif';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function BusContainer() {

  
  return (
    <div className="container">
        <div className="row">
          <div className="col">
          <figure className="figure mt-5">
            <img src={blackfoot} width={100} height={50} className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="figure-caption">
              <strong>Your Footprint (12.0)</strong>
            </figcaption>
          </figure>
          
          </div>
          <div className="col-5 mt-3">
          <Doughnut data={data} />
          </div>
          
        </div>
        <ul>
          <li>The average for the European Union is about 6.4 metric tons</li>
          <li>The average worldwide carbon footprint is about 4.8 metric tons</li>
          <li>The worldwide target to combat climate change is 0 metric tons</li>
          </ul>
      </div>
  )
}

export default BusContainer
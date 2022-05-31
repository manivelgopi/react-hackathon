import HouseHoldContainer from '../HouseHoldContainer/HouseHoldContainer.js'
import FlightContainer from '../FlightContainer/FlightContainer.js'
import CarContainer from '../CarContainer/CarContainer.js'
import BusContainer from '../BusContainer/BusContainer.js'
import DailyLifeandMiscContainer from '../DailyLifeandMiscContainer/DailyLifeandMiscContainer.js'
import ResultContainer from '../ResultContainer/ResultContainer.js'
 
export default function Dashboard() {

  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

    return (
      <main>
      <div class="container">
        <div className="row">
          <div class="col">
          <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#house" type="button" role="tab" aria-controls="house" aria-selected="true">
                <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 30 }}></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#flight" type="button" role="tab" aria-controls="flight" aria-selected="false">
                <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 30 }}></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#car" type="button" role="tab" aria-controls="car" aria-selected="false">
                  <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 30 }}></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#bus" type="button" role="tab" aria-controls="bus" aria-selected="false">
                <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 30 }}></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#dailylife" type="button" role="tab" aria-controls="dailylife" aria-selected="false">
                <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 30 }}></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#result" type="button" role="tab" aria-controls="result" aria-selected="false">
                  <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 30 }}></i>
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">

            <div className="tab-pane fade show active" id="house" role="tabpanel" aria-labelledby="house-tab">
              <HouseHoldContainer />
            </div> 
            {/* House-pane end */}

            <div className="tab-pane fade" id="flight" role="tabpanel" aria-labelledby="profile-tab">
              <FlightContainer />
            </div>
            {/* flight-pane end */}
            
            <div className="tab-pane fade" id="car" role="tabpanel" aria-labelledby="contact-tab">
            <CarContainer />
            </div>
            {/* car-pane end */}
            <div className="tab-pane fade" id="bus" role="tabpanel" aria-labelledby="contact-tab">
            <BusContainer />
            </div>
            {/* bus-pane end */}

            <div className="tab-pane fade" id="dailylife" role="tabpanel" aria-labelledby="contact-tab">
            <DailyLifeandMiscContainer />
            </div>
            {/* dailylife-pane end */}

            <div className="tab-pane fade" id="result" role="tabpanel" aria-labelledby="contact-tab">
            <ResultContainer />
            </div>
            {/* result-pane end */}
            
          </div>
          {/* tab-content */}
          

          </div>
          {/* col */}
          <div class="mt-4">
            <button class="btn btn-primary float-start" type="button">Button</button>
            <button class="btn btn-primary float-end" type="button">Next</button>
          </div>
        </div>
          {/* row */}

        

      </div>
      {/* container */}

      


      </main>
    );
  }
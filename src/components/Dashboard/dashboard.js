import React ,{ useState, useEffect}from "react";
import Footer from '../Footer/footer.js'
import HouseHoldContainer from '../HouseHoldContainer/HouseHoldContainer.js'
import FlightContainer from '../FlightContainer/FlightContainer.js'
import CarContainer from '../CarContainer/CarContainer.js'
import BusContainer from '../BusContainer/BusContainer.js'
import DailyLifeandMiscContainer from '../DailyLifeandMiscContainer/DailyLifeandMiscContainer.js'
import ResultContainer from '../ResultContainer/ResultContainer.js'
import './assets/dashboard.css';
 
export default function Dashboard() {

  const [currentTabId, setCurrentTabId] = useState(1);
  const [previousTabId, setPreviousTabId] = useState(0);
  const [nextTabId, setNextTabId] = useState(2);
  
  const onTimelineClickHandler=e => {
      e.preventDefault();
      setCurrentTabId(Number(e.currentTarget.id.replace(/tab/g, "")));
  }
  
  useEffect(() => {
    for(let i=1; i<=6; i++){
      if(i <= currentTabId){
        document.getElementById('tab'+i).classList.add('border-primary');
        document.getElementById('tab'+i).children[0].classList.remove('text-secondary');
        document.getElementById('tab'+i).children[0].classList.add('text-primary');
        let barLine = document.getElementById('barLine');
        barLine.style.width = 14 + (currentTabId * 10) +'%';
      }else{
        document.getElementById('tab'+i).classList.remove('border-primary');
        document.getElementById('tab'+i).children[0].classList.remove('text-primary');
        document.getElementById('tab'+i).children[0].classList.add('text-secondary');
      }
    }

    if(currentTabId !== 1) 
      document.getElementById('house').classList.remove('active');

    setNextTabId(currentTabId + 1);
    setPreviousTabId(currentTabId - 1);
    console.log("New nextTabId",nextTabId);

  }, [currentTabId, nextTabId, previousTabId]);

  const previous = () =>{
    let previousTabTrigger = document.querySelector('#tab'+ previousTabId);
    previousTabTrigger.click();
  }

  const next = () =>{
    let nextTabTrigger = document.querySelector('#tab'+ nextTabId)
    nextTabTrigger.click();
  }

  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated');
      }, false)
    })

    return (
      <>
      <main className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="ms-5 me-5">
              <div className="greyBarLine"></div>
              <div id="barLine" className="barLine"></div>
            </div>
            
            <ul className="nav nav-tabs mt-1 mv-tab-timeline mx-auto" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                 onClick={onTimelineClickHandler}
                 className="nav-link border"
                 id="tab1" data-bs-toggle="tab" 
                 data-bs-target="#house" type="button" 
                 role="tab" aria-controls="house" aria-selected="true">
                  <i className="bi bi-house-heart-fill text-primary" ></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                onClick={onTimelineClickHandler}
                className="nav-link border" 
                id="tab2" data-bs-toggle="tab" 
                data-bs-target="#flight" type="button" 
                role="tab" aria-controls="flight" aria-selected="false">
                  <i className="bi bi-speedometer2 text-secondary"></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                onClick={onTimelineClickHandler}
                className="nav-link border" 
                id="tab3" data-bs-toggle="tab" data-bs-target="#car" type="button" 
                role="tab" aria-controls="car" aria-selected="false">
                    <i className="bi bi-speedometer text-secondary"></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                onClick={onTimelineClickHandler}
                className="nav-link border" id="tab4" 
                data-bs-toggle="tab" data-bs-target="#bus" type="button" 
                role="tab" aria-controls="bus" aria-selected="false">
                  <i className="bi bi-stoplights-fill text-secondary" ></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                onClick={onTimelineClickHandler}
                className="nav-link border" id="tab5" 
                data-bs-toggle="tab" data-bs-target="#dailylife" type="button" 
                role="tab" aria-controls="dailylife" aria-selected="false">
                  <i className="bi bi-alarm-fill text-secondary" ></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                onClick={onTimelineClickHandler}
                className="nav-link border" id="tab6" 
                data-bs-toggle="tab" data-bs-target="#result" type="button" 
                role="tab" aria-controls="result" aria-selected="false">
                    <i className="bi bi-trophy-fill text-secondary" ></i>
                </button>
              </li>
            </ul>

            <div className="tab-content mx-auto" id="myTabContent">

              <div className="tab-pane fade show active" id="house" 
              role="tabpanel" aria-labelledby="house-tab">
                <HouseHoldContainer />
              </div> 
              {/* House-pane end */}

              <div className="tab-pane fade" id="flight" 
              role="tabpanel" aria-labelledby="profile-tab">
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

          <div className="col-12 mt-4">
            <button
            id="previousButton"
            disabled={currentTabId === 1}
            onClick={previous}
            className="btn btn-primary float-start btn-lg" type="button">Previous</button>
            {
            currentTabId < 5 &&
            <button
            id="nextButton"
            onClick={next}
            className="btn btn-primary float-end btn-lg" type="button">Next</button>
            }
            {
            currentTabId === 5 &&
            <button
            id="nextButton"
            onClick={next}
            className="btn btn-primary float-end btn-lg" type="button">Submit</button>
            }
            
          </div>
          <br/><br/><br/><br/>
        </div>
          {/* row */}

        

      </div>
      {/* container */}

      


      </main>
      <Footer />
      </>
    );
  }
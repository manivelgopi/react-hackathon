import React ,{ useState, useEffect, useRef}from "react";
import Footer from '../Footer/Footer.js'
import HouseHoldContainer from '../HouseHoldContainer/HouseHoldContainer.js'
import FlightContainer from '../FlightContainer/FlightContainer.js'
import CarContainer from '../CarContainer/CarContainer.js'
import BusContainer from '../BusContainer/BusContainer.js'
import DailyLifeandMiscContainer from '../DailyLifeandMiscContainer/DailyLifeandMiscContainer.js'
import ResultContainer from '../ResultContainer/ResultContainer.js'
import './assets/dashboard.css';
 
export default function Dashboard() {

  //variables
  let allOk;
  const [currentTabId, setCurrentTabId] = useState(1);
  const [previousTabId, setPreviousTabId] = useState(0);
  const [nextTabId, setNextTabId] = useState(2);

  // Reference for child components
  const houseHoldRef = useRef(null);
  const flightRef = useRef(null);
  const carRef = useRef(null);
  const busRef = useRef(null);
  const resultRef = useRef(null);
  
  //Top timeline click handler
  const onTimelineClickHandler=e => {
      e.preventDefault();
      setCurrentTabId(Number(e.currentTarget.id.replace(/tab/g, "")));
  }
  
  // react hook
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

    // updating bootstrap default active class for navtab
    if(currentTabId !== 1) 
      document.getElementById('house').classList.remove('active');

    // updating next button id and previous button id
    setNextTabId(currentTabId + 1);
    setPreviousTabId(currentTabId - 1);
  }, [currentTabId, nextTabId, previousTabId]);

  // previous button
  const previous = () =>{
    let previousTabTrigger = document.querySelector('#tab'+ previousTabId);
    previousTabTrigger.click();
  }

  // next button
  const next = () =>{
    // validate if current form status is true
   if(currentTabId === 1)
    allOk = houseHoldRef.current();
     
   else if(currentTabId === 2)
    allOk = flightRef.current()

   else if(currentTabId === 3 && flightRef.current())
    allOk = carRef.current()
  
   else if(currentTabId === 4 && carRef.current())
    allOk = busRef.current()

  // if current form validation ok the move to next page
  if(allOk && document.querySelector('#tab'+ nextTabId))
    document.querySelector('#tab'+ nextTabId).click();

  }

  // submit button
  const submit = () => {
      document.querySelector('#tab6').click();
      resultRef.current()
  }

    return (
      <>
      <main className="dashboard mb-5">
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
                 aria-label="house-tab" 
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
                aria-label="flight tab" 
                role="tab" aria-controls="flight" aria-selected="false">
                  <i className="bi bi-speedometer2 text-secondary"></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                onClick={onTimelineClickHandler}
                className="nav-link border" 
                id="tab3" data-bs-toggle="tab"
                data-bs-target="#car" type="button"
                aria-label="car tab" 
                role="tab" aria-controls="car" aria-selected="false">
                    <i className="bi bi-speedometer text-secondary"></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                onClick={onTimelineClickHandler}
                className="nav-link border" id="tab4" 
                data-bs-toggle="tab" 
                data-bs-target="#bus" type="button"
                aria-label="bus tab" 
                role="tab" aria-controls="bus" aria-selected="false">
                  <i className="bi bi-stoplights-fill text-secondary" ></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                onClick={onTimelineClickHandler}
                className="nav-link border" id="tab5" 
                data-bs-toggle="tab" 
                data-bs-target="#dailylife" type="button"
                aria-label="dailylife tab" 
                role="tab" aria-controls="dailylife" aria-selected="false">
                  <i className="bi bi-alarm-fill text-secondary" ></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                onClick={onTimelineClickHandler}
                className="nav-link border" id="tab6" 
                data-bs-toggle="tab" 
                data-bs-target="#result" type="button"
                aria-label="result tab" 
                role="tab" aria-controls="result" aria-selected="false">
                    <i className="bi bi-trophy-fill text-secondary" ></i>
                </button>
              </li>
            </ul>
            
            <div className="tab-content mx-auto" id="myTabContent">
            
              <div className="tab-pane fade show active" id="house" 
              role="tabpanel" aria-labelledby="house-tab">
                <HouseHoldContainer parentRef={houseHoldRef} />
              </div> 
              {/* House-pane end */}

              <div className="tab-pane fade" id="flight" 
              role="tabpanel" aria-labelledby="profile-tab">
                <FlightContainer parentRef={flightRef} />
              </div>
              {/* flight-pane end */}
              
              <div className="tab-pane fade" id="car" role="tabpanel" aria-labelledby="contact-tab">
              <CarContainer parentRef={carRef} />
              </div>
              {/* car-pane end */}
              
              <div className="tab-pane fade" id="bus" role="tabpanel" aria-labelledby="contact-tab">
              <BusContainer parentRef={busRef} />
              </div>
              {/* bus-pane end */}

              <div className="tab-pane fade" id="dailylife" role="tabpanel" aria-labelledby="contact-tab">
              <DailyLifeandMiscContainer />
              </div>
              {/* dailylife-pane end */}
              
              <div className="tab-pane fade" id="result" role="tabpanel" aria-labelledby="contact-tab">
              <ResultContainer parentRef={resultRef}/>
              </div>
              {/* result-pane end */}
            </div>
            {/* tab-content */}
           
          
          </div>
          {/* col */}

          <div className="col-12 mt-4 mb-5">
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
            data-testid="form-submit-btn" 
            id="submitButton"
            onClick={submit}
            className="btn btn-primary float-end btn-lg" type="button">Calculate Now</button>
            }
            
          </div>
          
        </div>
          {/* row */}

      </div>
      {/* container */}

      </main>
      <Footer />
      </>
    );
  }

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigation
// import '../css/Home.css'; // Import CSS if you have styles for this component

const Aboutinfo = () => {
  useEffect(() => {
    // Script logic to handle localStorage and theme switch
    const checkbox = document.getElementById('checkbox');
    const jhamela = document.getElementById('jhamela');

    if (localStorage.getItem('checkbox') === 'true') {
      jhamela.classList.remove('darkEdition');
      checkbox.checked = true;
    }

    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        jhamela.classList.remove('darkEdition');
        localStorage.setItem('checkbox', 'true');
      } else {
        jhamela.classList.add('darkEdition');
        localStorage.setItem('checkbox', 'false');
      }
    });
  }, []);

  return (
    <div id="jhamela" className="darkEdition lightEdition">
      {/* Navbar */}
      {/* Include Navbar component */}
      {/* <Navbar /> */}

      <div id="myDiv" className="animate-bottom" style={{ display: 'none' }}>
        {/* Include other components like Preloader */}
        {/* <Preloader /> */}

        <div style={{ alignItems: 'center' }}>
          <div className="mainbox sps">
            <div className="rightside minarea">
              <img src="/static/assets/img/proj4.png" alt="Project 4" height="97%" width="95%" />
            </div>
            <div className="leftside maxarea">
              <h2>INTEGRATED ADMIN PANEL</h2>
              <p>Most of the institutes in the health sector today are unable to meet the current required standards for patient satisfaction and complain redressal...</p>
            </div>
          </div>
          <div className="mainboxr sps">
            <div className="leftside minarea">
              <img src="/static/assets/img/proj2.png" alt="Project 2" height="80%" width="85%" />
            </div>
            <div className="rightside maxarea">
              <h2 className="animation-element slide-left in-view">FACILITIES FOR THE ELDERLY ONES</h2>
              <p>Keeping into view, the needs and mandates of our elderly patients...</p>
            </div>
          </div>
          <div className="mainbox sps">
            <div className="rightside minarea" style={{ marginTop: '30px' }}>
              <img src="/static/assets/img/proj3.svg" alt="Project 3" height="97%" width="95%" />
            </div>
            <div className="leftside maxarea">
              <h2>VIDEO CONFERENCING FACILITIES</h2>
              <p>In these trying times of COVID-19...</p>
            </div>
          </div>
          <div className="mainboxr sps" style={{ marginBottom: '200px' }}>
            <div className="leftside minarea">
              <img src="/static/assets/img/proj1.svg" alt="Project 1" height="97%" width="95%" />
            </div>
            <div className="rightside maxarea">
              <h2>MEASURES FOR COVID-19</h2>
              <p>We understand the fact that the most vulnerable of the patients are those who are suffering from the deadly COVID-19...</p>
            </div>
            <div className="rightside maxarea">
              <div className="description"><h2>Do the Five!</h2></div>
            </div>
            <div className="col-12 col-md-6 col-xl-6">
              <div className="item-container">
                <img src="/static/images/DotheFive.jpg" alt="Do the Five" />
              </div>
            </div>
          </div>
        </div>

        {/* Include other components like Testimonials */}
        {/* <Testimonials /> */}
      </div>

      {/* Include Footer component */}
      {/* <Footer /> */}
    </div>
  );
};

export default Aboutinfo;

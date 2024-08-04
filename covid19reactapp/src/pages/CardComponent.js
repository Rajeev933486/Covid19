import React, { useState, useEffect } from 'react';
import '../css/CardComponent.css'; // Create and import the CSS file for styles

const CardComponent = () => {
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    document.querySelectorAll('.cards .card')[1].click();
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="cards">
      <div
        className={`card fill ${activeCard === 0 ? 'card--center' : activeCard === 1 ? 'card--right' : 'card--left'}`}
        data-card="0"
        onClick={() => handleCardClick(0)}
      >
        <div className="card__icon">
          <img src="/static/assets/img/trophy.svg" alt="Trophy" />
        </div>
        <div className="card__detail sps">
          <div className="innerdiv">
            <h2>Best MANAGEMENT SYSTEM AWARDS</h2>
            <br />
            <p>TIMES OF INDIA</p>
          </div>
        </div>
      </div>
      <div
        className={`card fill ${activeCard === 1 ? 'card--center' : activeCard === 2 ? 'card--right' : 'card--left'}`}
        data-card="1"
        onClick={() => handleCardClick(1)}
      >
        <div className="card__icon">
          <img src="/static/assets/img/trophy.svg" alt="Trophy" />
        </div>
        <div className="card__detail sps">
          <div className="innerdiv">
            <h2>INNOVATION AWARDS 2016</h2>
            <br />
            <p>MEDICAL COUNCIL</p>
          </div>
        </div>
      </div>
      <div
        className={`card fill ${activeCard === 2 ? 'card--center' : activeCard === 0 ? 'card--right' : 'card--left'}`}
        data-card="2"
        onClick={() => handleCardClick(2)}
      >
        <div className="card__icon">
          <img src="/static/assets/img/trophy.svg" alt="Trophy" />
        </div>
        <div className="card__detail sps">
          <div className="innerdiv">
            <h2>BEST MEDICAL AWARDS</h2>
            <br />
            <p>GLOBAL AWARDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

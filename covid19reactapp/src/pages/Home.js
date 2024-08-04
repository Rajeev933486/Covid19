import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import bannerImage from '../img/homepage-banner.jpg'; // Adjust the path as needed

const Home = () => {
  useEffect(() => {
    // Handle dark mode toggle
    const jhamelaElement = document.getElementById('jhamela');
    const checkboxElement = document.getElementById('checkbox');

    if (jhamelaElement && checkboxElement) {
      const dragTheme = localStorage.getItem('checkbox');
      if (dragTheme === 'true') {
        jhamelaElement.classList.remove('darkEdition');
        checkboxElement.checked = true;
      }

      const handleCheckboxClick = () => {
        if (checkboxElement.checked) {
          jhamelaElement.classList.remove('darkEdition');
          localStorage.setItem('checkbox', 'true');
        } else {
          jhamelaElement.classList.add('darkEdition');
          localStorage.setItem('checkbox', 'false');
        }
      };

      checkboxElement.addEventListener('click', handleCheckboxClick);

      // Cleanup event listener on component unmount
      return () => {
        if (checkboxElement) {
          checkboxElement.removeEventListener('click', handleCheckboxClick);
        }
      };
    }
  }, []);

  return (
    <div id="jhamela" className="darkEdition lightEdition">
      {/* Navbar */}
      
      <div id="myDiv" className="animate-bottom" style={{ display: 'none' }}>
        {/* Include your Navbar component here */}
      </div>
      
      <div style={{ textAlign: 'center', position: 'relative', marginBottom: '150px' }}>
        <h1 className="sps" style={{ fontWeight: 'bolder' }}>COVID-19 Management System</h1>
        <img src={bannerImage} alt="Banner" width="80%" />

        <p style={{ width: '70%', margin: '0 auto', marginTop: '100px', fontFamily: 'sans-serif', lineHeight: '30px', fontSize: '1.2em' }} className="sps">
          We, at Covid-19 Management System, aim to provide you not only the best possible treatment, but also aim to satisfy the needs and redress the queries of the patient with the same wholesomeness. Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
          <br /><br />
          The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.
          <br /><br />
          Thus we have extended our management system to include the patients into the evaluation process and to ensure a transparency in this relationship. And this is what makes us different!
        </p>
      </div>

      <div className="container">
        <Link to="/register_pat" className="btn btn-primary btn-round btn-lg">Take Appointment</Link>
      </div>

      {/* Include your other components like Testimonials, Footer here */}
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/LoginPage.css'; // Make sure to add your CSS styles here

const LoginPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('checkbox') === 'true');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('darkEdition');
    } else {
      document.body.classList.add('darkEdition');
    }
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setIsDarkMode(prevState => {
      const newState = !prevState;
      localStorage.setItem('checkbox', newState);
      return newState;
    });
  };

  return (
    <div>
      {loading ? (
        <div id="loader" className="loader"></div>
      ) : (
        <div id="myDiv" className="animate-bottom">
          {/* Navbar */}
          {/* Include your Navbar component here */}
          {/* <Navbar /> */}

          <div className="jumbotron sps">
            <h1 className="display-4">Hello, Thanks for Registration!</h1>
            <p className="lead">Your Account is not approved till now <br /><br />Our Team is checking your profile <br /><br /> Soon your account will be confirmed !!!</p>
            <hr className="my-4" />
            <p>Check Later</p>
            <p className="lead">
              <Link className="btn btn-primary btn-lg" to="/" role="button">Logout For Now</Link>
            </p>
          </div>

          {/* Footer */}
          {/* Include your Footer component here */}
          {/* <Footer /> */}
        </div>
      )}
      {/* Include your scripts or other components if needed */}
    </div>
  );
};

export default LoginPage;

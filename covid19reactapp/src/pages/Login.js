import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const getCSRFToken = () => {
  const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  return token;
};

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedTheme = localStorage.getItem('checkbox');
    if (storedTheme === 'true') {
      setDarkMode(true);
    }
  }, []);

  const handleCheckboxChange = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('checkbox', newTheme);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const csrfToken = getCSRFToken();
  if (!csrfToken) {
    console.error('CSRF token is missing');
    alert('Unable to retrieve CSRF token.');
    return;
  }
    try {
      const response = await axios.post('http://127.0.0.1:8000/hospital/login_pat/', {
        username,
        password,
      }, {
        headers: {
          'X-CSRFToken': getCSRFToken(), // Include CSRF token
        }
      });
      if (response.status === 200) {
        // Redirect based on response data if needed
        console.log("Login succesful");
        navigate('/Home');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className={darkMode ? 'darkEdition' : 'lightEdition'}>
      <div className="container text-center">
        <h1 className="my-5">Login / Sign Up</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Login
          </button>
        </form>
        <div className="d-flex justify-content-around flex-wrap mt-5">
          <div className="card mb-4" style={{ width: '18rem' }}>
            <img src="/static/assets/img/patient.png" className="card-img-top rounded-circle mt-3" alt="Patient" />
            <div className="card-body">
              <Link to="/register_pat.html" className="btn btn-primary btn-lg btn-block">
                Patient
              </Link>
            </div>
          </div>
          <div className="card mb-4" style={{ width: '18rem' }}>
            <img src="/static/assets/img/admin.png" className="card-img-top rounded-circle mt-3" alt="Admin" />
            <div className="card-body">
              <Link to="/register_adm.html" className="btn btn-primary btn-lg btn-block">
                Admin
              </Link>
            </div>
          </div>
          <div className="card mb-4" style={{ width: '18rem' }}>
            <img src="/static/assets/img/doctor.png" className="card-img-top rounded-circle mt-3" alt="Doctor" />
            <div className="card-body">
              <Link to="/register_doc.html" className="btn btn-primary btn-lg btn-block">
                Doctor
              </Link>
            </div>
          </div>
        </div>
        <div className="form-check form-switch mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkbox"
            checked={darkMode}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="checkbox">
            Toggle Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;

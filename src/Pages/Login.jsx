import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    react_password: '', // Make sure the field name matches your backend
  });
  const [error, setError] = useState(''); // To handle error message
  const [success, setSuccess] = useState(''); // To handle success message
  const navigate = useNavigate(); // Hook for navigation

  // Handle form input changes
  const changeeven = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  // Handle form submission
  const loginUser = (e) => {
    e.preventDefault();

    // Reset error and success messages before submitting
    setError('');
    setSuccess('');

    // Send login data to the backend
    axios.post('http://localhost:5000/login', login)
      .then((response) => {

        localStorage.setItem('userdetails', JSON.stringify(response.data.data));

        // Assuming the response contains a success message or token
        setSuccess('Login successful!');
        setTimeout(() => {
          navigate('/dashbords');// Redirect to the dashboard or another page
        }, 5000); 
      })
      .catch((error) => {
        // Handle any error from the API
        console.error('Login error:', error);
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message); // Display error message from backend
        } else {
          setError('Invalid email or password.');
        }
      });
  };

  return (
    <div className="main-wrapper">
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row flex-grow">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <div className="brand-logo">
                    <img src="https://gogagacrm.com/gogaga/assets/images/logo_gogaga.png" alt="Logo" />
                  </div>
                  <h4>Welcome back!</h4>
                  <h6 className="font-weight-light">Login to continue.</h6>
                  <form className="pt-3" onSubmit={loginUser}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={changeeven}
                        name="email" // Correct field name
                        value={login.email}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={changeeven}
                        name="react_password" // Correct field name
                        value={login.react_password}
                        required
                      />
                    </div>
                    <div className="mt-3 d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        Login
                      </button>
                    </div>
                    {error && (
                      <div className="mt-2 text-danger">
                        <strong>{error}</strong>
                      </div>
                    )}
                    {success && (
                      <div className="mt-2 text-success">
                        <strong>{success}</strong>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

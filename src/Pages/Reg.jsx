import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reg = () => {
  const [reg, setReg] = useState({
    email: '',
    react_password: '', // Correct field name to match the backend
  });
  const [error, setError] = useState(''); // To handle error message
  const [success, setSuccess] = useState(''); // To handle success message
  const navigate = useNavigate(); // Hook for navigation

  // Handle form input changes
  const changeeven = (e) => {
    const { name, value } = e.target;
    setReg({ ...reg, [name]: value });
  };

  // Handle form submission
  const savedata = (e) => {
    e.preventDefault();

    // Reset error and success messages before submitting
    setError('');
    setSuccess('');

    // Send registration data to the backend
    axios.post('http://localhost:5000/registerdata', reg)
      .then((response) => {
        console.log(response);
        setSuccess('Registration successful!');
        navigate('/login'); // Redirect to login page after success
      })
      .catch((error) => {
        console.error('Registration error:', error);
        setError('Something went wrong. Please try again.');
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
                  <h4>Hello! Let's get started</h4>
                  <h6 className="font-weight-light">Sign up to continue.</h6>
                  <form className="pt-3" onSubmit={savedata}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={changeeven}
                        name="email" // Correct field name
                        value={reg.email}
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
                        value={reg.react_password}
                        required
                      />
                    </div>
                    <div className="mt-3 d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        Register
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

export default Reg;

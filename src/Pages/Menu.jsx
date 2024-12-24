import React, { useState, useEffect } from 'react';
import { useNavigate , Link } from 'react-router-dom';

const Menu = () => {
  const [user, setUser] = useState(null); // State to hold user details
  const navigate = useNavigate();

  // Retrieve user details from localStorage when the component mounts
  useEffect(() => {
    const storedUserDetails = localStorage.getItem('userdetails');
    if (storedUserDetails) {
      setUser(JSON.parse(storedUserDetails)); // Parse and store user details
    }
  }, []);

  // Logout function
  const logouts = () => {
  
    // Remove user details from localStorage
    localStorage.removeItem('userdetails');
    
    // Optionally, clear any other session data if needed
    // sessionStorage.removeItem('your-session-key');
    
    // Redirect to login page after logout
    navigate('/login');
  };
  const gotoprofile=()=>{
    navigate('/profilepage');
  }
  const changepass=()=>{
    navigate('/changepassword');  
  }

  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
        <a className="navbar-brand brand-logo" href="index.html">
          <img src="https://gogagacrm.com/gogaga/assets/images/logo_gogaga.png" alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="index.html">
          <img src="https://gogagacrm.com/gogaga/assets/images/logo_go.png" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="mdi mdi-menu" />
        </button>
        <div className="search-field d-none d-md-block">
          <form className="d-flex align-items-center h-100" action="#">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <i className="input-group-text border-0 mdi mdi-magnify" />
              </div>
              <input
                type="text"
                className="form-control bg-transparent border-0"
                placeholder="Search projects"
              />
            </div>
          </form>
        </div>
        <ul className="navbar-nav navbar-nav-right">
          {/* Notifications Section */}
          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              href="#"
              data-bs-toggle="dropdown"
            >
              <i className="mdi mdi-bell-outline" />
              <span className="count-symbol bg-danger" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <h6 className="p-3 mb-0">Notifications</h6>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="mdi mdi-calendar" />
                  </div>
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject font-weight-normal mb-1">
                    Event today
                  </h6>
                  <p className="text-gray ellipsis mb-0">
                    {" "}
                    Just a reminder that you have an event today{" "}
                  </p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <h6 className="p-3 mb-0 text-center">See all notifications</h6>
            </div>
          </li>

          {/* Profile Section */}
          <li className="nav-item nav-profile dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="profileDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="nav-profile-img">
              <img src={`${process.env.PUBLIC_URL}/dist/assets/images/faces/face1.jpg`} alt="User Face" />

                <span className="availability-status online" />
              </div>
              <div className="nav-profile-text">
                {/* Display the user's name dynamically */}
                <p className="mb-1 text-black">{user ? user.lastname : 'Loading...'}</p>
              </div>
            </a>
            <div
              className="dropdown-menu navbar-dropdown"
              aria-labelledby="profileDropdown"
            >
              <a className="dropdown-item" onClick={gotoprofile}>
                <i className="fas fa-user-secret me-2 text-success" /> Profile
              </a>

              
              <a className="dropdown-item" onClick={changepass}> 
              
                <i className="fas fa-unlock me-2 text-success" /> Change Password
              
              </a>
              
              <div className="dropdown-divider" />
              <a className="dropdown-item" onClick={logouts}>
                <i className="mdi mdi-logout me-2 text-primary" /> Signout
              </a>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="mdi mdi-menu" />
        </button>
      </div>
    </nav>
  );
};

export default Menu;

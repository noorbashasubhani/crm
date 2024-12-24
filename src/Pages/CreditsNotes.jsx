import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ONLYDATE } from '../utils';
import DomesticCredits from './DomesticCredits';
import InternationalCredits from './InternationalCredits';

const CreditsNotes = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [user, setUser] = useState([]);
  const [dest, setDest] = useState([]);

  // New state to track the selected view (Domestic or International)
  const [view, setView] = useState('domestic'); // Default view is domestic

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;

  useEffect(() => {
    setSelectedMonth(`${currentYear}-${formattedMonth}`);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/users_all')
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        setError('Failed to fetch users data');
      });

    axios.get('http://localhost:5000/destinationDetails')
      .then((response) => {
        setDest(response.data.data);
      })
      .catch((error) => {
        setError('Failed to fetch destinations data');
      });
  }, []);

  // Handle the view change when a button is clicked
  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  // Components for Domestic and International views
  const DomesticComponent = () => (
    <div>
      <h4>Domestic Products</h4>
      <DomesticCredits />
    </div>
  );

  const InternationalComponent = () => (
    <div>
      <h4>International Products</h4>
      <InternationalCredits />
    </div>
  );

  return (
    <div className="container-fluid page-body-wrapper">
      <link rel="stylesheet" href="fley.css" />
      <Menu />
      <Sidebar />

      <div className="main-panel mt-0">
        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title">Credite Note</h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Productivity</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  List
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body d-flex justify-content-around gap-2">
                  <button
                    className="btn btn-dark w-50"
                    onClick={() => handleViewChange('domestic')}
                  >
                    Domestic
                  </button>
                  <button
                    className="btn btn-dark w-50"
                    onClick={() => handleViewChange('international')}
                  >
                    International
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Conditionally render the component based on the selected view */}
          {view === 'domestic' && <DomesticComponent />}
          {view === 'international' && <InternationalComponent />}
        </div>

        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2023{" "}
              <a
                href="https://www.bootstrapdash.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BootstrapDash
              </a>
              . All rights reserved.
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Hand-crafted &amp; made with{" "}
              <i className="mdi mdi-heart text-danger" />
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CreditsNotes;

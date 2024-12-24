import React from 'react'; 
import { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ONLYDATE } from '../utils';
import PendingApproval from './PendingApproval';
import CompletedApproval from './CompletedApproval';

const PartnerApproval = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [user, setUser] = useState([]);
  const [dest, setDest] = useState([]);
  const [view, setView] = useState('domestic'); // Default view is domestic

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;

  useEffect(() => {
    setSelectedMonth(`${currentYear}-${formattedMonth}`);
  }, []);

  useEffect(() => {
    setLoading(true);  // Set loading to true when data fetching starts
    axios.get('http://localhost:5000/pendingApprovals')
      .then((response) => {
        setUser(response.data.data);
        setLoading(false);  // Set loading to false when data is fetched
      })
      .catch((error) => {
        setError('Failed to fetch users data');
        setLoading(false);  // Set loading to false if there is an error
      });

    axios.get('http://localhost:5000/destinationDetails')
      .then((response) => {
        setDest(response.data.data);
        setLoading(false);  // Set loading to false when data is fetched
      })
      .catch((error) => {
        setError('Failed to fetch destinations data');
        setLoading(false);  // Set loading to false if there is an error
      });
  }, []);

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  return (
    <div className="container-fluid page-body-wrapper">
      <link rel="stylesheet" href="fley.css" />
      <Menu />
      <Sidebar />

      <div className="main-panel mt-0">
        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title">Partners Approvals</h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Partners</a>
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
                    Pending Approval
                  </button>
                  <button
                    className="btn btn-dark w-50"
                    onClick={() => handleViewChange('international')}
                  >
                    Completed Approval
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Conditionally render the component based on the selected view */}
          {loading ? (
            <div>Loading...</div>  // Show loading while data is being fetched
          ) : error ? (
            <div className="alert alert-danger">{error}</div>  // Show error if there's an issue
          ) : (
            <>
              {view === 'domestic' && <PendingApproval />}
              {view === 'international' && <CompletedApproval />}
            </>
          )}
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

export default PartnerApproval;

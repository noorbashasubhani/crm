import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,yesOrno, Escaltype} from '../utils';

const PartnerSales = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);  // State for loading status
  const [error, setError] = useState(null);      // State for error handling

  // Fetch sales data from the server
  useEffect(() => {
    axios.get('http://localhost:5000/getsalesDate')
      .then((response) => {
        setSalesData(response.data.data); // Assuming response.data is an array of image objects
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError('Failed to fetch data');  // Set error message
        setLoading(false);  // Set loading to false even if there's an error
      });
  }, []);

  // Render the component
  return (
    <div className="container-fluid page-body-wrapper">
      <link rel="stylesheet" href="fley.css" />
      <Menu />
      <Sidebar />

      <div className="main-panel mt-0">
        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title">Partner Recent Sales Details</h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Sales</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  List
                </li>
              </ol>
            </nav>
          </div>

          {/* Loading, error, and data display logic */}
          <div className="row">
            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  {loading ? (
                    <div>Loading...</div>  // Show loading text until data is fetched
                  ) : error ? (
                    <div>{error}</div>  // Show error message if there's an error
                  ) : (
                    <table 
  className="table table-striped" 
  style={{ overflowX: 'auto', display: 'block' }}
>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Partner Type</th>
                          <th>Partner Location</th>
                          <th>Recent Month</th>
                          <th>Recent Business</th>
                          <th>Total Business</th>
                        </tr>
                      </thead>
                      <tbody>
                        {salesData.map((user, index) => {
                          // Determine partner type description
                          const par = user.partner_type === 'S'
                            ? 'Super Partner'
                            : user.partner_type === 'P'
                              ? 'Sales Partner'
                              : user.partner_type === 'L'
                                ? 'Lead Generator'
                                : '';

                          return (
                            <tr key={user.user_id}>
                              <td>{index + 1}</td>
                              <td>{user.firstname} {user.lastname}</td>
                              <td>{par}</td>
                              <td>{user.operation_district}</td>
                              <td>{humandateonly(user.recent_month)}</td>
                              <td>{user.latest_month_after_emi}</td>
                              <td>{user.total_cases_amount}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2023{" "}
              <a href="https://www.bootstrapdash.com/" target="_blank" rel="noopener noreferrer">
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

export default PartnerSales;

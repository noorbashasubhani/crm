import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {service_tuype,credit_status,ONLYDATE} from '../utils';

const ViewCredits = () => {
  const { id } = useParams(); 
  const [credit, setCredit] = useState(null);  // Initialize with null to handle loading state
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);      // Track error state

  useEffect(() => {
    // Fetch credit data using the id from the URL
    axios.get(`http://localhost:5000/creditsnoteIdget/${id}`)
      .then((response) => {
        setCredit(response.data.data[0]); // Assuming the data is an array and the first item is what you need
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError('Failed to fetch credit details');
        setLoading(false);  // Set loading to false even in case of an error
      });
  }, [id]);

  // Handle if the data is still loading or if there is an error
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container-fluid page-body-wrapper">
      <link rel="stylesheet" href="fley.css" />
      <Menu />
      <Sidebar />

      <div className="main-panel mt-0">
        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title">Credit Note</h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Credits</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  View Details
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <table className="table table-stripped" style={{ display: 'block', overflowX: 'auto' }}>
                    <thead>
                      <tr>
                        <td>Country Name</td>
                        <td>{credit.city_name} / {credit.country_name}</td>
                      </tr>
                      <tr>
                        <td>Service Type</td>
                        <td>{service_tuype(credit.service_type)}</td>
                      </tr>
                      <tr>
                        <td>Hotel / Supplier Name</td>
                        <td>{credit.hotel_supply_name}</td>
                      </tr>
                      <tr>
                        <td>CN Issued Date</td>
                        <td>{ONLYDATE(credit.cn_issued_date)}</td>
                      </tr>
                      <tr>
                        <td>Towards Ref Number</td>
                        <td>{credit.ref_number}</td>
                      </tr>
                      <tr>
                        <td>Currency Type</td>
                        <td>{credit.currency_type}</td>
                      </tr>
                      <tr>
                        <td>Amount</td>
                        <td>{credit.amount}</td>
                      </tr>
                      <tr>
                        <td>Used Amount</td>
                        <td>{credit.used_amount}</td>
                      </tr>
                      <tr>
                        <td>Balance Amount</td>
                        <td>{credit.balance_amount}</td>
                      </tr>
                      <tr>
                        <td>Valid Till</td>
                        <td>{ONLYDATE(credit.valid_till)}</td>
                      </tr>
                      <tr>
                        <td>Entered By</td>
                        <td>{credit.added_by}</td>
                      </tr>
                      <tr>
                        <td>Entry Date</td>
                        <td>{ONLYDATE(credit.created_date)}</td>
                      </tr>
                      <tr>
                        <td>Status</td>
                        <td>{credit.status}</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
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

export default ViewCredits;

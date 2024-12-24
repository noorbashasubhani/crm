import React, { useState, useEffect } from 'react';
import Header from './Pages/Header';
import Menu from './Pages/Menu';
import Sidebar from './Pages/Sidebar';
import { Footer } from './Pages/Footer';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { fetchExecutiveNames, sourceType, mapHolidayType, humanReadableDate, partType, partnertypeNames } from './utils';

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [executiveNames, setExecutiveNames] = useState({});
  const [salexecutiveNames, setsalexecutiveNames] = useState({});
  const [partnername, setPartnername] = useState({});
  const [previous1, setprevious1] = useState({});
  const [previous2, setprevious2] = useState({});
  const [previous3, setprevious3] = useState({});
  const [previous4, setprevious4] = useState({});
  const [ptype, setPtype] = useState({});
  const [hoveredItemId, setHoveredItemId] = useState(null); // Track hovered item ID

  const [loading, setLoading] = useState(true);

  // Fetch the leads data
  useEffect(() => {
    axios
      .get('http://localhost:5000/leadslist')
      .then((response) => {
        setLeads(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Fetch data for executive names, partner names, and other fields
    const fetchData = () => {
      const uniqueUserIds = [...new Set(leads.map((lead) => lead.assigned_to))].filter((userId) => userId !== 0);
      const uniqueUserIds2 = [...new Set(leads.map((lead) => lead.assign_tele_new))].filter((userId) => userId !== 0);
      const uniqueUserIdspart = [...new Set(leads.map((lead) => lead.partner_id))].filter((userId) => userId !== 0);
      const uniquePrevious1 = [...new Set(leads.map((lead) => lead.assigned_to_order))].filter((userId) => userId !== 0);
      const uniquePrevious2 = [...new Set(leads.map((lead) => lead.assign_tele_previous))].filter((userId) => userId !== 0);
      const uniquePrevious3 = [...new Set(leads.map((lead) => lead.assigned_change_by))].filter((userId) => userId !== 0);
      const uniquePrevious4 = [...new Set(leads.map((lead) => lead.assign_cal_cahnged_by))].filter((userId) => userId !== 0);
      const uniquePTUPE = [...new Set(leads.map((lead) => lead.partner_id))].filter((userId) => userId !== 0);

      if (uniqueUserIds.length > 0) {
        fetchExecutiveNames(uniqueUserIds).then((executiveNames) => {
          setExecutiveNames(executiveNames);
        });
      }

      if (uniqueUserIds2.length > 0) {
        fetchExecutiveNames(uniqueUserIds2).then((executiveNames) => {
          setsalexecutiveNames(executiveNames);
        });
      }

      if (uniqueUserIdspart.length > 0) {
        fetchExecutiveNames(uniqueUserIdspart).then((executiveNames) => {
          setPartnername(executiveNames);
        });
      }

      if (uniquePrevious1.length > 0) {
        fetchExecutiveNames(uniquePrevious1).then((executiveNames) => {
          setprevious1(executiveNames);
        });
      }

      if (uniquePrevious2.length > 0) {
        fetchExecutiveNames(uniquePrevious2).then((executiveNames) => {
          setprevious2(executiveNames);
        });
      }

      if (uniquePrevious3.length > 0) {
        fetchExecutiveNames(uniquePrevious3).then((executiveNames) => {
          setprevious3(executiveNames);
        });
      }

      if (uniquePrevious4.length > 0) {
        fetchExecutiveNames(uniquePrevious4).then((executiveNames) => {
          setprevious4(executiveNames);
        });
      }

      if (uniquePTUPE.length > 0) {
        partType(uniquePTUPE).then((executiveNames) => {
          setPtype(executiveNames);
        });
      }
    };

    fetchData();
  }, [leads]);

  const handleMouseEnter = (id) => {
    setHoveredItemId(id); // Set the hovered item ID
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null); // Reset the hovered item ID
  };

  return (
    <>
      <div className="container-fluid page-body-wrapper">
        <Menu />
        <Sidebar />
        <div className="main-panel mt-0">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">Leads Tables</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Leads</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Details
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row">
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Leads Details</h4>
                    <table className="table table-striped table-bordered" style={{ overflowX: 'scroll', display: 'block' }}>
                      <thead className="thead-dark">
                        <tr className="bg-primary">
                          <th>S.No</th>
                          <th>Lead Created On</th>
                          <th>Attempt Before</th>
                          <th>Attempted On</th>
                          <th>Raised By</th>
                          <th>Source</th>
                          <th>Partner Type</th>
                          <th>Travel Type</th>
                          <th>Customer Name</th>
                          <th>Number</th>
                          <th>Details</th>
                          <th>Operations Executive</th>
                          <th>Sales Manager</th>
                          <th>Actions</th>
                          <th>Comments</th>
                          <th>Previous Executive</th>
                          <th>Previous Sales Manager</th>
                          <th>Executive Changed By</th>
                          <th>Sales Manager Changed By</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leads.map((items, index) => (
                          <tr key={items.id}>
                            <td className="py-1">{index + 1}</td>
                            <td>{humanReadableDate(items.created_date)}</td>
                            <td>{humanReadableDate(items.attempted_date)}</td>
                            <td>{humanReadableDate(items.comment_date)}</td>
                            <td>{items.raised_by}<br></br>{items.raised_number}</td>
                            <td>{sourceType(items.lead_source)}</td>
                            <td>{items.partner_id === 0 ? '' : partnername[items.partner_id]}</td>
                            <td>{mapHolidayType(items.holiday_type)}</td>
                            <td>{items.customer_name}</td>
                            <td>{items.customer_mobile}</td>
                            <td>details</td>
                            <td>{items.assigned_to === 0 ? '----' : executiveNames[items.assigned_to]}</td>
                            <td>{items.assign_tele_new === 0 ? '----' : salexecutiveNames[items.assign_tele_new]}</td>
                            <td><button className="btn btn-danger btn-sm">Delete</button></td>
                            <td>
                              <i
                                className="fa fa-eercast"
                                onMouseEnter={() => handleMouseEnter(items.id)} // Trigger when mouse enters
                                onMouseLeave={handleMouseLeave} // Trigger when mouse leaves
                              ></i>
                              {hoveredItemId === items.id && <p>{items.customer_desc}</p>} {/* Show description when hovered */}
                            </td>
                            <td>{items.assigned_to_order === 0 ? '----' : previous1[items.assigned_to_order]}</td>
                            <td>{items.assign_tele_previous === 0 ? '----' : previous2[items.assign_tele_previous]}</td>
                            <td>{items.assigned_change_by === 0 ? '----' : previous3[items.assigned_change_by]}</td>
                            <td>{items.assign_cal_cahnged_by === 0 ? '----' : previous4[items.assign_cal_cahnged_by]}</td>
                          </tr>
                        ))}
                      </tbody>
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
                <a href="https://www.bootstrapdash.com/" target="_blank" rel="noopener noreferrer">
                  BootstrapDash
                </a>
                . All rights reserved.
              </span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                Hand-crafted &amp; made with <i className="mdi mdi-heart text-danger" />
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Leads;

import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ONLYDATE } from '../utils';

const ProductvityReport = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // State for loading status
  const [error, setError] = useState(null);      // State for error handling
  const [selectedMonth, setSelectedMonth] = useState(''); // State for selected month
  const [user, setUser] = useState([]);
  const [dest, setDest] = useState([]);

  // Get the current date
  const currentDate = new Date();

  // Get the current year and month (0-based month, adding 1 to get 1-12)
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  // Format the current month as a two-digit string (e.g., '01', '12')
  const formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;

  // Default the selectedMonth to the current year and month in 'YYYY-MM' format
  useEffect(() => {
    setSelectedMonth(`${currentYear}-${formattedMonth}`);
  }, []); // Run only once on mount

  // Fetch product data from the server
  useEffect(() => {
    axios.get(`http://localhost:5000/users_all`)
      .then((response) => {
        setUser(response.data.data); // Assuming response.data is an array of user objects
      })
      .catch((error) => {
        setError('Failed to fetch users data');
      });

    axios.get(`http://localhost:5000/destinationDetails`)
      .then((response) => {
        setDest(response.data.data); // Assuming response.data is an array of destination objects
      })
      .catch((error) => {
        setError('Failed to fetch destinations data');
      });
  }, []); // Run only once on mount

  // Handle the month selection change
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    const month = event.target.value;
    const [year, monthNumber] = month.split('-');
    const final_month = monthNumber;
    const final_year = year;

    // Fetch the product details for the selected month and year
    axios.get(`http://localhost:5000/getProductDetials/${final_month}/${final_year}`)
      .then((response) => {
        setProducts(response.data.data); // Assuming response.data is an array of product objects
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError('Failed to fetch product details');
        setLoading(false);  // Set loading to false even if there's an error
      });
  };

  const useraary = (id) => {
    const userDeta = user.find(u => u.user_id === id);
    return userDeta ? `${userDeta.firstname} ${userDeta.lastname}` : '--';
  };

  const destarray = (id) => {
    const destinati = dest.find(ud => ud.id === id);
    return destinati ? destinati.name : '--';
  };

  // Calculate total for each category
  const calculateTotals = (products) => {
    let totalLandCostDomestic = 0;
    let totalFlightCostDomestic = 0;
    let totalCruiseCostDeomesti = 0;
    let totalVisaCostDom = 0;
    let totalSupplementaryCostDom = 0;
    let finalDom = 0;

    let totalLandCostInternational = 0;
    let totalFlightCostInternational = 0;
    let totalCruiseCostInternational = 0;
    let totalVisaCostInc = 0;
    let totalSupplementaryCostInt = 0;
    let finalInt = 0;

    let totalLandCostBoth = 0;
    let totalVolumeInclusiveFlights = 0;
    let totalCruiseCostBoth = 0;
    let totalVisaCostBoth = 0;
    let totalSupplementaryCostBoth = 0;
    let finalBoth = 0;

    products.forEach(prod => {
      if (prod.travel_type === 'D') {
        const landCost = Number(prod.land_cost_after_tax_commision) || 0;
        const serviceTax = Number(prod.service_tax_loade_val) || 0;
        const land_cost1 = landCost - serviceTax;
        totalLandCostDomestic += land_cost1;
        totalFlightCostDomestic += Number(prod.total_flight_cost) || 0;
        totalCruiseCostDeomesti += Number(prod.cruse_cost_after_loading) || 0;
        totalVisaCostDom += Number(prod.visa_amounts) || 0;
        totalSupplementaryCostDom += Number(prod.supplemnetary_cost) || 0;
        finalDom += Number(prod.after_emi) || 0;
      } 
      if (prod.travel_type === 'I') {
        const totalRemittance = Number(prod.total_remittance_cost) || 0;
        const serviceTax = Number(prod.service_tax_loade_val) || 0;
        const land_cost2 = totalRemittance - serviceTax;

        totalLandCostInternational += land_cost2;
        totalFlightCostInternational += Number(prod.total_flight_cost) || 0;
        totalCruiseCostInternational += Number(prod.cruse_cost_after_loading) || 0;
        totalVisaCostInc += Number(prod.visa_amounts) || 0;
        totalSupplementaryCostInt += Number(prod.supplemnetary_cost) || 0;
        finalInt += Number(prod.after_emi) || 0;
      }
    totalLandCostBoth = totalLandCostDomestic + totalLandCostInternational;
    totalVolumeInclusiveFlights = totalFlightCostDomestic + totalFlightCostInternational;
    totalCruiseCostBoth = totalCruiseCostDeomesti + totalCruiseCostInternational;
    totalVisaCostBoth = totalVisaCostDom + totalVisaCostInc;
    totalSupplementaryCostBoth = totalSupplementaryCostDom + totalSupplementaryCostInt;
    finalBoth =finalDom+finalInt;
    
    });

    return {
      totalLandCostDomestic,
      totalFlightCostDomestic,
      totalCruiseCostDeomesti,
      totalVisaCostDom,
      totalSupplementaryCostDom,
      totalLandCostInternational,
      totalFlightCostInternational,
      totalCruiseCostInternational,
      totalVisaCostInc,
      totalSupplementaryCostInt,
      totalLandCostBoth,          // Combined land cost
        totalVolumeInclusiveFlights, // Combined flight cost
        totalCruiseCostBoth,        // Combined cruise cost
        totalVisaCostBoth,          // Combined visa cost
        totalSupplementaryCostBoth,
        finalBoth,
        finalDom,
        finalInt
      
    };
  };

  // Recalculate totals whenever products change
  const totals = calculateTotals(products);

  // Render the component
  return (
    <div className="container-fluid page-body-wrapper">
      <link rel="stylesheet" href="fley.css" />
      <Menu />
      <Sidebar />

      <div className="main-panel mt-0">
        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title">Productivity</h3>
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
                <div className="card-body">
                  {/* Month Picker Input */}
                  <input
                    type="month"
                    name="month_wise"
                    className="form-control"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  {/* Table for Productivity Report */}
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Travel Type</th>
                        <th>Tot Vol Inclusive Flights</th>
                        <th>Total Land Cost</th>
                        <th>Total Flight Cost</th>
                        <th>Total Cruise Cost</th>
                        <th>Total Visa Cost</th>
                        <th>Total Supplementary Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Domestic</td>
                        
                        <td>{totals.finalDom}</td>
                        <td>{totals.totalLandCostDomestic}</td>
                        <td>{totals.totalFlightCostDomestic}</td>
                        <td>{totals.totalCruiseCostDeomesti}</td>
                        <td>{totals.totalVisaCostDom}</td>
                        <td>{totals.totalSupplementaryCostDom}</td>
                      </tr>
                      <tr>
                        <td>International</td>
                        <td>{totals.finalInt}</td>
                        <td>{totals.totalLandCostInternational}</td>
                        <td>{totals.totalFlightCostInternational}</td>
                        <td>{totals.totalCruiseCostInternational}</td>
                        <td>{totals.totalVisaCostInc}</td>
                        <td>{totals.totalSupplementaryCostInt}</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>{totals.finalBoth}</td>
                        <td>{totals.totalLandCostBoth}</td>
                        <td>{totals.totalVolumeInclusiveFlights}</td>
                        <td>{totals.totalCruiseCostBoth}</td>
                        <td>{totals.totalVisaCostBoth}</td>
                        <td>{totals.totalSupplementaryCostBoth}</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
                          <th>Date</th>
                          <th>GHRN No</th>
                          <th>Trip Start Date</th>
                          <th>Area Manager</th>
                          <th>Sales Manager</th>
                          <th>Super Partner</th>
                          <th>Sales Partner</th>
                          <th>Lead Generator</th>
                          <th>Executive</th>
                          <th>Cus Name</th>
                          <th>Mobile No</th>
                          <th>Customer Location</th>
                          <th>Holiday Location</th>
                          <th>No of Pax</th>
                          <th>Land Cost</th>
                          <th>GST Cost</th>
                          <th>Flight Cost</th>
                          <th>Cruise Cost</th>
                          <th>Visa Cost</th>
                          <th>Supplementary Cost</th>
                          <th>Total Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((prod, index) => {
                          let land_cost = 0;

                          if (prod.travel_type === 'D') {
                            const landCost = Number(prod.land_cost_after_tax_commision) || 0;
                            const serviceTax = Number(prod.service_tax_loade_val) || 0;
                            land_cost = landCost - serviceTax;
                          } else if (prod.travel_type === 'I') {
                            const totalRemittance = Number(prod.total_remittance_cost) || 0;
                            const serviceTax = Number(prod.service_tax_loade_val) || 0;
                            land_cost = totalRemittance - serviceTax;
                          } else {
                            land_cost = 0;
                          }

                          return (
                            <tr key={prod.id}>
                              <td>{index + 1}</td>
                              <td>{ONLYDATE(prod.confirm_date)}</td>
                              <td>{prod.ghrn_no}</td>
                              <td>{ONLYDATE(prod.trip_start_date)}</td>
                              <td>--</td>
                              <td>{prod.assign_tele_new}</td>
                              <td>{useraary(prod.super_partner)}</td>
                              <td>{useraary(prod.sales_partner)}</td>
                              <td>{useraary(prod.lead_generator)}</td>
                              <td>{useraary(prod.confirmed_by)}</td>
                              <td>{prod.customer_name}</td>
                              <td>{prod.customer_mobile}</td>
                              <td>{prod.customer_location}</td>
                              <td>{destarray(prod.holiday_destination)}</td>
                              <td>{prod.no_of_passengers}</td>
                              <td>{land_cost}</td>
                              <td>{prod.service_tax_loade_val}</td>
                              <td>{prod.total_flight_cost}</td>
                              <td>{prod.cruse_cost_after_loading}</td>
                              <td>{prod.visa_amounts}</td>
                              <td>{prod.supplemnetary_cost}</td>
                              <td>{prod.after_emi}</td>
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

export default ProductvityReport;

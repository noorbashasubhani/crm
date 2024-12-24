import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import { Footer } from './Footer';
import Menu from './Menu';
import PieChat from './PieChat';
import ItineraryChart from './ItineraryChart ';
import ProfitComparisonChart from './ProfitComparisonChart';
import SendEmail from './SendEmail';

const Dashboard = () => {
  // State to hold data fetched from the API
  const [data, setData] = useState({
    itineraryPublished: 0,
    itineraryConfirmed: 0,
    volumeQuoted: 0,
    volumeConfirmed: 0,
  });

  // Fetch data when the component mounts
  useEffect(() => {
    const currentMonth = new Date().getMonth() + 0;  // months are 0-indexed, so adding 1
    const currentYear = new Date().getFullYear();

    axios
      .get('http://localhost:5000/dashboard', {
        params: {
          month: currentMonth,
          year: currentYear,
        },
      })  // Replace with your actual API URL
      .then((response) => {
        // Assuming response.data contains the necessary data structure
        //console.log("final result is : "+ response.data.data[0].total_publish_L_or_C);
        setData(response.data.data)
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  // Log the fetched data for debugging
  //console.log("Fetched Data:", data);
 // console.log(data[0].total_publish_L_or_C);
  return (
    <>
      <div className="container-fluid page-body-wrapper">
        <Menu />
        <Sidebar />
        <div className="main-panel mt-0">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2">
                  <i className="mdi mdi-home" />
                </span>{" "}
                Dashboard
              </h3>
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <span />
                    Overview{" "}
                    <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                  </li>
                </ul>
              </nav>
            </div>

            <div className="row">
  {/* Itinerary Published Card */}
  <div className="col-md-3 stretch-card grid-margin">
    <div className="card bg-gradient-danger card-img-holder text-white">
      <div className="card-body">
        <img
          src="dist/assets/images/dashboard/circle.svg"
          className="card-img-absolute"
          alt="circle-image"
        />
        <h4 className="font-weight-normal mb-3">
          Itinerary Published
          <i className="mdi mdi-chart-line mdi-24px float-end" />
        </h4>
        <h2 className="mb-5">{data[0]?.total_publish_L_or_C || "Loading..."}</h2>
        <h6 className="card-text">Increased by 60%</h6>
      </div>
    </div>
  </div>

  {/* Itinerary Confirmed Card */}
  <div className="col-md-3 stretch-card grid-margin">
    <div className="card bg-gradient-info card-img-holder text-white">
      <div className="card-body">
        <img
          src="dist/assets/images/dashboard/circle.svg"
          className="card-img-absolute"
          alt="circle-image"
        />
        <h4 className="font-weight-normal mb-3">
          Itinerary Confirmed{" "}
          <i className="mdi mdi-bookmark-outline mdi-24px float-end" />
        </h4>
        <h2 className="mb-5">{data[0]?.total_publish_L_or_C || "Loading..."}</h2>
        <h6 className="card-text">Decreased by 10%</h6>
      </div>
    </div>
  </div>

  {/* Volume Quoted Card */}
  <div className="col-md-3 stretch-card grid-margin">
    <div className="card bg-gradient-success card-img-holder text-white">
      <div className="card-body">
        <img
          src="dist/assets/images/dashboard/circle.svg"
          className="card-img-absolute"
          alt="circle-image"
        />
        <h4 className="font-weight-normal mb-3">
          Volume Quoted{" "}
          <i className="mdi mdi-diamond mdi-24px float-end" />
        </h4>
        <h2 className="mb-5">{data[0]?.total_publish_C || "Loading..."}</h2>
        <h6 className="card-text">Increased by 5%</h6>
      </div>
    </div>
  </div>

  {/* Volume Confirmed Card */}
  <div className="col-md-3 stretch-card grid-margin">
    <div className="card bg-gradient-primary card-img-holder text-white">
      <div className="card-body">
        <img
          src="dist/assets/images/dashboard/circle.svg"
          className="card-img-absolute"
          alt="circle-image"
        />
        <h4 className="font-weight-normal mb-3">
          Volume Confirmed{" "}
          <i className="mdi mdi-diamond mdi-24px float-end" />
        </h4>
        <h2 className="mb-5">{data[0]?.total_publish_C || "Loading..."}</h2>
        <h6 className="card-text">Increased by 5%</h6>
      </div>
    </div>
  </div>
  <PieChat />
  <ItineraryChart />
  <ProfitComparisonChart />
  <SendEmail />
</div>

          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import SalesPartnerList from './SalesPartnerList'; // Correctly importing the component
import LeadsPartner from './LeadsPartner.jsx';
import { yesOrno } from '../utils.js';

const PartnersDetails = () => {
    const [loc, setLoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('superPartners'); // State to track active tab

    const apiUrl = process.env.REACT_APP_API_URL;

    // Fetch partners data
    useEffect(() => {
        axios.get(`${apiUrl}/getSuperPartnersList`)
            .then((response) => {
                setLoc(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch data");
                setLoading(false);
            });
    }, []);

    // Handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />
            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title">Partners Details</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Master</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Partners
                                </li>
                            </ol>
                        </nav>
                    </div>

                    {/* Tabs for Super Partners, Sales Partners, Lead Generators */}
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    {/* Tab navigation */}
                                    <ul className="nav nav-tabs" id="partnerTabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a 
                                                className={`nav-link ${activeTab === 'superPartners' ? 'active' : ''}`}
                                                onClick={() => handleTabChange('superPartners')}
                                                id="superPartnersTab"
                                                data-bs-toggle="tab"
                                                href="#superPartners" 
                                                role="tab"
                                            >
                                                Super Partners
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a 
                                                className={`nav-link ${activeTab === 'salesPartners' ? 'active' : ''}`}
                                                onClick={() => handleTabChange('salesPartners')}
                                                id="salesPartnersTab"
                                                data-bs-toggle="tab"
                                                href="#salesPartners" 
                                                role="tab"
                                            >
                                                Sales Partners
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a 
                                                className={`nav-link ${activeTab === 'leadGenerators' ? 'active' : ''}`}
                                                onClick={() => handleTabChange('leadGenerators')}
                                                id="leadGeneratorsTab"
                                                data-bs-toggle="tab"
                                                href="#leadGenerators" 
                                                role="tab"
                                            >
                                                Lead Generators
                                            </a>
                                        </li>
                                    </ul>

                                    {/* Tab content */}
                                    <div className="tab-content my-5" id="partnerTabsContent">
                                        {/* Super Partners Tab */}
                                        <div 
                                            className={`tab-pane fade ${activeTab === 'superPartners' ? 'show active' : ''}`} 
                                            id="superPartners" 
                                            role="tabpanel"
                                        >
                                            {loading && <p>Loading...</p>}
                                            {error && <p>{error}</p>}
                                            <table className="table w-100" style={{ overflowX: 'scroll', display: 'block' }}>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Super Partners Name</th>
                                                        <th scope="col">No of Partners</th>
                                                        <th scope="col" style={{ minWidth: "100px;" }}>Sales Partners Names</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {loc.map((items, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td style={{ minWidth: "250px" }}>{items.user_name}</td>
                                                            <td style={{ minWidth: "250px;" }}>{items.no_of_sub_users}</td>
                                                            <td
                                                                style={{
                                                                    width: "100px",
                                                                    wordWrap: "break-word",
                                                                    overflowWrap: "break-word",
                                                                    whiteSpace: "normal",
                                                                    lineHeight: "20px"
                                                                }}
                                                            >
                                                                {items.sub_users}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Sales Partners Tab */}
                                        <div 
                                            className={`tab-pane fade ${activeTab === 'salesPartners' ? 'show active' : ''}`} 
                                            id="salesPartners" 
                                            role="tabpanel"
                                        >
                                            {/* Rendering the SalesPartnerList component here */}
                                            <SalesPartnerList />
                                        </div>

                                        {/* Lead Generators Tab */}
                                        <div 
                                            className={`tab-pane fade ${activeTab === 'leadGenerators' ? 'show active' : ''}`} 
                                            id="leadGenerators" 
                                            role="tabpanel"
                                        >
                                            {/* You can implement the logic to display lead generators here */}
                                            
                                            <LeadsPartner />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="d-sm-flex justify-content-center justify-content-sm-between">
                        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                            Copyright © 2023{" "}
                            <a href="https://www.bootstrapdash.com/" target="_blank">
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

export default PartnersDetails;

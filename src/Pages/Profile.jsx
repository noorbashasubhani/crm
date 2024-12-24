import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { education_qualification } from '../utils';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [holiday, setHoliday] = useState([]);
    const [user, setUser] = useState([]);
    const [bank, setBank] = useState([]);
    const [dept, setDept] = useState([]);
    const [place, setPlace] = useState([]);
    const [desg, setDesg] = useState([]);
    const [activeTab, setActiveTab] = useState('profile');
    const [uses, setUsers] = useState(null);  // Initializing as null
    const [empbnk, setEmpbnk] = useState(null);
    const [work, setWork] = useState([]); // Initialize as an empty array

    // Fetch data from API
    useEffect(() => {
        // Load user details from localStorage
        const storedUserDetails = localStorage.getItem('userdetails');
        if (storedUserDetails) {
            setUsers(JSON.parse(storedUserDetails));  // Set user details if available
        }

        // Fetch other data
        axios.get('http://localhost:5000/holidaysDetails')
            .then((response) => setHoliday(response.data.data))
            .catch((error) => console.log(error));

        axios.get('http://localhost:5000/users_all')
            .then((response) => setUser(response.data.data))
            .catch((error) => console.log(error));

        axios.get('http://localhost:5000/departmentDetails')
            .then((response) => setDept(response.data.data))
            .catch((error) => console.log(error));

        axios.get('http://localhost:5000/outflowlist')
            .then((response) => setBank(response.data.data))
            .catch((error) => console.log(error));

        axios.get('http://localhost:5000/destinationDetails')
            .then((response) => setPlace(response.data.data))
            .catch((error) => console.log(error));

        axios.get('http://localhost:5000/designationDetails')
            .then((response) => setDesg(response.data.data))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        // Only fetch data for bank and work details if 'uses' is set
        if (uses && uses.user_id) {
            axios.get(`http://localhost:5000/banklistemp/${uses.user_id}`)
                .then((response) => {
                    setEmpbnk(response.data.data[0]); // Set the specific bank record
                })
                .catch((error) => console.log(error));

            axios.get(`http://localhost:5000/workdetails/${uses.user_id}`)
                .then((response) => {
                    setWork(response.data.data || []); // Ensure 'work' is an array, fallback to empty array
                })
                .catch((error) => console.log(error));
        }
    }, [uses]);  // This effect will run whenever 'uses' changes

    const getUserNameById = (id) => {
        const foundUser = user.find(u => u.user_id === id);
        return foundUser ? `${foundUser.firstname} ${foundUser.lastname}` : 'Unknown';
    };

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Profile Details </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">User</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Profile
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    {/* Tab Navigation */}
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                                                id="profile-tab"
                                                data-bs-toggle="tab"
                                                href="#profile"
                                                role="tab"
                                                onClick={() => setActiveTab('profile')}
                                            >
                                                Profile
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link ${activeTab === 'holidays' ? 'active' : ''}`}
                                                id="holidays-tab"
                                                data-bs-toggle="tab"
                                                href="#holidays"
                                                role="tab"
                                                onClick={() => setActiveTab('holidays')}
                                            >
                                                Education Details
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link ${activeTab === 'bank' ? 'active' : ''}`}
                                                id="bank-tab"
                                                data-bs-toggle="tab"
                                                href="#bank"
                                                role="tab"
                                                onClick={() => setActiveTab('bank')}
                                            >
                                                Bank Details
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link ${activeTab === 'department' ? 'active' : ''}`}
                                                id="department-tab"
                                                data-bs-toggle="tab"
                                                href="#department"
                                                role="tab"
                                                onClick={() => setActiveTab('department')}
                                            >
                                                Current Professional Details
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="btn btn-sm btn-dark text-white"
                                                id="department-tab"
                                               
                                                href="#department"
                                                role="tab"
                                                
                                            >
                                                <Link to="/Edit-profile">Edit Personal Details</Link>
                                            </a>
                                        </li>
                                        
                                       
                                        
                                    </ul>
                                    
                                    {/* Tab Content */}
                                    <div className="tab-content" id="myTabContent">
                                        {/* Profile Tab */}
                                        <div
                                            className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`} 
                                            id="profile"
                                            role="tabpanel"
                                        >
                                            <div className="row mt-5">
                                                <div className="col-md-3">
                                                    <img
                                                        src="http://localhost:3000/dist/assets/images/faces/face1.jpg"
                                                        alt="Profile"
                                                        className="img-fluid rounded w-100"
                                                    />
                                                </div>
                                                <div className="col-md-9 mt-0 text-left">
                                                    {uses ? (
                                                      <>
                                                          <h4>{getUserNameById(uses.user_id)}</h4>
                                                          <p>Email: {uses.email}</p>
                                                          <p>Contact: {uses.contactNumber}</p>
                                                          <p>User Code: {uses.partner_code}</p>
                                                          <p>Father Name: {uses.fathername}</p>
                                                          <p>PAN: {uses.panNumber}</p>
                                                          <p>D.O.B: {uses.dateOfBirth}</p>
                                                          <p>Salary Per Annum: {uses.salary}</p>
                                                          <p>Total Casual Leaves: {uses.c_leaves}</p>
                                                      </>
                                                    ) : (
                                                      <p>Loading user details...</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Education Tab */}
                                        <div
                                            className={`tab-pane fade ${activeTab === 'holidays' ? 'show active' : ''}`}
                                            id="holidays"
                                            role="tabpanel"
                                        >
                                           {uses ? (
                                                      <div className="mt-5">
                                                          <h4>Education Details</h4>
                                                          <p>Highest Qualification: {education_qualification(uses.qualification)}</p>
                                                          <p>Qualification Year: {uses.qual_year}</p>
                                                          <p>Percentage: {uses.percentage}</p>
                                                          <p>Institute Name: {uses.school}</p>
                                                          <p>Marksheet Google Drive link: {uses.link}</p>
                                                      </div>
                                                  ) : (
                                                      <p>Loading user details...</p>
                                                  )}
                                        </div>

                                        {/* Bank Details Tab */}
                                        <div
                                            className={`tab-pane fade ${activeTab === 'bank' ? 'show active' : ''}`}
                                            id="bank"
                                            role="tabpanel"
                                        >
                                            {empbnk ? (
                                                <div className="mt-5">
                                                    <h4>Bank Details</h4>
                                                    <p>Bank Name: {empbnk.bankName}</p>
                                                    <p>Bank Branch Name: {empbnk.branchNam}</p>
                                                    <p>Account No: {empbnk.accountNumber}</p>
                                                    <p>IFSC Code: {empbnk.ifscCode}</p>
                                                </div>
                                            ) : (
                                                <p>Loading bank details...</p>
                                            )}
                                        </div>

                                        {/* Professional Details Tab */}
                                        <div
                                            className={`tab-pane fade ${activeTab === 'department' ? 'show active' : ''}`}
                                            id="department"
                                            role="tabpanel"
                                        >
                                           {work.length > 0 ? (
                                                work.map((item, index) => (
                                                      <div key={index} className="mt-5">
                                                          <h4>Company Details</h4>
                                                          <p>Previous Company Name: {item.companyName}</p>
                                                          <p>Designation  : {item.companyDesignation}</p>
                                                          <p>Reporting Manager Name: {item.companyDesignation}</p>
                                                          <p>Reporting Manager Contact No: {item.managerCNo}</p>
                                                          <p>From Date: {item.fromDate}</p>
                                                          <p>To Date: {item.toDate}</p>
                                                          <p>Experience: {item.experience}</p>
                                                      </div>
                                               ))
                                           ) : (
                                                <p>No professional details available.</p>
                                           )}
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

export default Profile;

import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';

import { transactionType,humandateonly,yesOrno, Escaltype} from '../utils';

const AdvanceSalary = () => {
    const [adv, setAdv] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    // Modal state
    const [showModal, setShowModal] = useState(false);

    // Fetch image data from the server
    useEffect(() => {
        axios.get('http://localhost:5000/salaryAdvance/1')
            .then((response) => {
                setAdv(response.data.data); // Assuming response.data is an array of image objects
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                setError('Error fetching image data');
                setLoading(false); // Set loading to false if error occurs
                console.log(error);
            });

            axios.get('http://localhost:5000/users_all')
            .then((response) => {
                setUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });



    }, []);

    // Handle the "Add Flyer" button click to show modal
    const handleAddFlyerClick = () => {
        setShowModal(true);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

       // Get user name by user ID
       const getUserNameById = (id) => {
        const foundUser = user.find(u => u.user_id === id);
        return foundUser ? `${foundUser.firstname} ${foundUser.lastname}` : 'Unknown';
    }

    return (
        <div className="container-fluid page-body-wrapper">
            <link rel="stylesheet" href="fley.css" />
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title">Advance Salary Details</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Advance</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    List
                                </li>
                               
                            </ol>
                        </nav>
                        <button type="button" className="btn btn-primary btn-sm ml-auto" onClick={handleAddFlyerClick}>
                                   + Add Salary
                                </button>
                    </div>
                    
                    {/* Table to display the escalation data */}
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    {/* Show error message if there's an error */}
                                    {error && <div className="alert alert-danger">{error}</div>}

                                    {/* Show loading message if data is still being fetched */}
                                    {loading && <div className="alert alert-info">Loading images...</div>}

                                    {/* Table with image data */}
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                
                                                <th>Name</th>
                                                
                                                <th>Amount</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {adv.map((adv, index) => (
                                                <tr key={adv.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{getUserNameById(adv.emp_id)}</td>
                                                    <td>{adv.amount}</td>
                                                    <td>{adv.date}</td>
                                                    <td>{yesOrno(adv.status)}</td>
                                                   
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal for adding new escalation */}
                {showModal && (
                    <div className="modal show" style={{ display: 'block', zIndex: 1050 }}>
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Escalation</h5>
                                    <button type="button" className="close btn btn-danger" onClick={handleCloseModal}>
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="flyerTitle">Title</label>
                                            <input type="text" className="form-control" id="flyerTitle" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="flyerDescription">Elaborate Your Concern</label>
                                            <textarea className="form-control" id="flyerDescription" rows="4"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Save Escalation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

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

export default AdvanceSalary;

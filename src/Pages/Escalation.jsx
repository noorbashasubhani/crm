import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';

import { transactionType,humandateonly,yesOrno, Escaltype} from '../utils';

const Escalation = () => {
    const [esc, setEsc] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    // Modal state
    const [showModal, setShowModal] = useState(false);

    // Fetch image data from the server
    useEffect(() => {
        axios.get('http://localhost:5000/getEsclDetails')
            .then((response) => {
                setEsc(response.data.data); // Assuming response.data is an array of image objects
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
                        <h3 className="page-title">Escalation Details</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Escalation</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    List
                                </li>
                                <button type="button" className="btn btn-primary ml-auto" onClick={handleAddFlyerClick}>
                                    Add Escalation
                                </button>
                            </ol>
                        </nav>
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
                                                <th>Anonymous</th>
                                                <th>Escalation From</th>
                                                
                                                <th>Escalation Regarding</th>
                                                <th>Received Date</th>
                                                <th>Status</th>
                                                <th>Reason For Close</th>
                                                <th> Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {esc.map((esc, index) => (
                                                <tr key={esc.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{yesOrno(esc.annonymus)}</td>
                                                    <td>{getUserNameById(esc.added_by)}</td>
                                                    <td>{Escaltype(esc.escalation_regarding)}</td>
                                                    <td>{humandateonly(esc.created_date)}</td>
                                                    <td>{yesOrno(esc.status)}</td>
                                                    <td>{humandateonly(esc.close_det)}</td>
                                                    <td>
                                                        <button className="btn btn-danger btn-sm">Delete</button>
                                                    </td>
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

export default Escalation;

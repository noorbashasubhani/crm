import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { humandateonly, yesOrno, service_type } from '../utils';

const Recovery = () => {
    const [rec, setRec] = useState([]); // Recovery list state
    const [user, setUser] = useState([]); // User list state
    const [recoveryData, setRecoveryData] = useState({
        title: '',
        serviceType: '',
        totalAmount: '',
        paidAmount: '',
        pendingAmount: ''
    }); // State for form inputs
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [isEditing, setIsEditing] = useState(false); // State to track if editing or adding

    // Fetch recovery list
    useEffect(() => {
        axios.get('http://localhost:5000/rec_list')
            .then((response) => {
                setRec(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Fetch user list
    useEffect(() => {
        axios.get('http://localhost:5000/users_all')
            .then((response) => {
                setUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Handle opening modal for adding new recovery
    const handleShow = () => {
        setShowModal(true);
        setIsEditing(false); // Reset editing state for adding
        setRecoveryData({
            title: '',
            serviceType: '',
            totalAmount: '',
            paidAmount: '',
            pendingAmount: ''
        });
    };

    // Handle opening modal for editing recovery
    const handleEdit = (item) => {
        setShowModal(true);
        setIsEditing(true); // Set editing state to true
        setRecoveryData({
            title: item.title,
            serviceType: item.type_of_service,
            totalAmount: item.total_amount,
            paidAmount: item.paid_amount,
            pendingAmount: item.pending_amount
        });
    };

    // Handle closing modal
    const handleClose = () => setShowModal(false);

    // Handle input change for the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'totalAmount' || name === 'paidAmount') {
            const totalAmount = name === 'totalAmount' ? value : recoveryData.totalAmount;
            const paidAmount = name === 'paidAmount' ? value : recoveryData.paidAmount;
            const pendingAmount = totalAmount - paidAmount;
            setRecoveryData((prevData) => ({
                ...prevData,
                [name]: value,
                pendingAmount: pendingAmount >= 0 ? pendingAmount : 0,
            }));
        } else {
            setRecoveryData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    // Handle form submission (add or edit recovery)
    const handleSubmit = (e) => {
        e.preventDefault();

        const url = isEditing ? 'http://localhost:5000/update-recovery' : 'http://localhost:5000/add-recovery';
        const method = isEditing ? 'PUT' : 'POST';
        const data = recoveryData;

        axios({
            method,
            url,
            data: isEditing ? { ...data, id: recoveryData.id } : data
        })
            .then((response) => {
                if (isEditing) {
                    setRec(rec.map(item => item.id === response.data.id ? response.data : item)); // Update recovery in the list
                } else {
                    setRec([...rec, response.data]); // Add new recovery to the table
                }
                handleClose(); // Close the modal
                setRecoveryData({ // Reset the form data
                    title: '',
                    serviceType: '',
                    totalAmount: '',
                    paidAmount: '',
                    pendingAmount: ''
                });
            })
            .catch((error) => {
                console.error('Error saving recovery:', error);
            });
    };

    // Get user name by user ID
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
                        <h3 className="page-title">Recovery</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Recovery</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Details
                                </li>
                            </ol>
                        </nav>
                        <button className="btn btn-sm btn-primary" onClick={handleShow}>+ Add Recovery</button>
                    </div>

                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table table-dark" style={{ overflowX: 'scroll', display: 'block' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Service Type</th>
                                                <th scope="col">Total Amount</th>
                                                <th scope="col">Paid Amount</th>
                                                <th scope="col">Pending Amount</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Added By</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rec.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{humandateonly(item.created_date)}</td>
                                                    <td>{item.title}</td>
                                                    <td>{service_type(item.type_of_service)}</td>
                                                    <td>{item.total_amount}</td>
                                                    <td>{item.paid_amount}</td>
                                                    <td>{item.pending_amount}</td>
                                                    <td>{yesOrno(item.status)}</td>
                                                    <td>{getUserNameById(item.added_by)}</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-info" onClick={() => handleEdit(item)}>Edit</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add/Edit Recovery Modal */}
                    <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{isEditing ? 'Edit Recovery' : 'Add Recovery'}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="recoveryName">Recovery Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="recoveryName"
                                                placeholder="Enter Recovery Name"
                                                name="title"
                                                value={recoveryData.title}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="serviceType">Service Type</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="serviceType"
                                                placeholder="Enter Service Type"
                                                name="serviceType"
                                                value={recoveryData.serviceType}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="totalAmount">Total Amount</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="totalAmount"
                                                placeholder="Enter Total Amount"
                                                name="totalAmount"
                                                value={recoveryData.totalAmount}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="paidAmount">Paid Amount</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="paidAmount"
                                                placeholder="Enter Paid Amount"
                                                name="paidAmount"
                                                value={recoveryData.paidAmount}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="pendingAmount">Pending Amount</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="pendingAmount"
                                                placeholder="Enter Pending Amount"
                                                name="pendingAmount"
                                                value={recoveryData.pendingAmount}
                                                onChange={handleInputChange}
                                                readOnly
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary">{isEditing ? 'Update Recovery' : 'Save Recovery'}</button>
                                    </form>
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
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Recovery;

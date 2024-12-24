import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';

const ChangePassword = () => {
    
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState(null);

    // Fetch user data from localStorage
    useEffect(() => {
        const storedUserDetails = localStorage.getItem('userdetails');
        if (storedUserDetails) {
          setUser(JSON.parse(storedUserDetails)); // Parse and store user details
        }
    }, []);  // Only run once on mount

    // Fetch user details from the backend based on user ID (if user is available)
    useEffect(() => {
        if (user && user.user_id) {
            axios.get(`http://localhost:5000/users_all/${user.user_id}`)
                .then((response) => {
                    setUser(response.data.data);  // Update user details
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [user]);  // Run only when user state changes

    const handlePasswordChange = (e) => {
        e.preventDefault();

        // Validation
        if (!oldPassword || !newPassword || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match');
            return;
        }

        // Prepare data to send to backend
        const data = {
            oldPassword: oldPassword,
            newPassword: newPassword,
        };

        // Send request to change password
        axios.post(`http://localhost:5000/change-password/${user.user_id}`, data)
            .then((response) => {
                setSuccess('Password changed successfully!');
                setError(''); // Clear error message if successful
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
            })
            .catch((error) => {
                setError('Error changing password. Please try again.');
                setSuccess(''); // Clear success message if there's an error
            });
    };

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title">Change Password</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Profile</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Password
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4>Change Password</h4>
                                    
                                    {/* Show error message */}
                                    {error && <div className="alert alert-danger">{error}</div>}
                                    
                                    {/* Show success message */}
                                    {success && <div className="alert alert-success">{success}</div>}
                                    
                                    {/* Password Change Form */}
                                    <div className="card p-5 shadow mt-5">
                                    <form onSubmit={handlePasswordChange}>
                                        <div className="row">
                                        <div className="mb-3 col-sm-4">
                                            <label htmlFor="oldPassword" className="form-label">Old Password</label>
                                            <input
                                                type="password"
                                                className="form-control shadow"
                                                id="oldPassword"
                                                value={oldPassword}
                                                onChange={(e) => setOldPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3 col-sm-4">
                                            <label htmlFor="newPassword" className="form-label">New Password</label>
                                            <input
                                                type="password"
                                                className="form-control shadow"
                                                id="newPassword"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3 col-sm-4">
                                            <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control shadow"
                                                id="confirmPassword"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3 col-sm-4"></div>
                                        <div className="mb-3 col-sm-4">
                                        <button type="submit" className="btn btn-primary shadow">Change Password</button>
                                         </div>
                                        </div>
                                    </form>
                                    
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

export default ChangePassword;

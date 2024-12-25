import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import {yesOrno} from '../utils.js';

const BusinessLocations = () => {
    const [loc, setLoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = process.env.REACT_APP_API_URL;

    // Fetch business locations
    useEffect(() => {
        axios.get(`${apiUrl}/getbusinessDetails`)
            .then((response) => {
                setLoc(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch data");
                setLoading(false);
            });
    }, []);

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />
            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Business Locations </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Master</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Business
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    {loading && <p>Loading...</p>}
                                    {error && <p>{error}</p>}
                                    <table className="table w-100" style={{ overflowX: 'scroll', display: 'block' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loc.map((items, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td style={{ minWidth: "250px" }}>{items.state}</td>

                                                    <td>{yesOrno(items.status)}</td>
                                                    <td><button className="btn btn-sm btn-primary">Edit</button></td>
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

export default BusinessLocations;

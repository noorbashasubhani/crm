import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';

const DeptDesign = () => {
    const [holiday, setHoliday] = useState([]);
    const [user, setUser] = useState([]);
    const [bank, setBank] = useState([]);
    const [dept, setDept] = useState([]);
    const [place, setPlace] = useState([]);
    const [desg, setDesg] = useState([]);

    // Fetch holiday list
    useEffect(() => {
        axios.get('http://localhost:5000/holidaysDetails')
            .then((response) => {
                setHoliday(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Fetch designation details
    useEffect(() => {
        axios.get('http://localhost:5000/designationDetails')
            .then((response) => {
                setDesg(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Fetch user, department, and place details
    useEffect(() => {
        axios.get('http://localhost:5000/users_all')
            .then((response) => {
                setUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get('http://localhost:5000/departmentDetails')
            .then((response) => {
              setDept(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get('http://localhost:5000/outflowlist')
            .then((response) => {
                setBank(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get('http://localhost:5000/destinationDetails')
            .then((response) => {
                setPlace(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Fetch designation names by department ID
    const desgNames = (id) => {
        const desgDetails = desg.filter((s) => s.dept_id === id);
        
        if (desgDetails.length > 0) {
            return desgDetails.map(d => d.designation).join('/ ');  // Join designations with comma
        }
        return '--';  // If no designations, return '--'
    };

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Department & Designations Details </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Department & Designations</a>
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
                                    <table className="table table-dark" style={{ overflowX: 'scroll', display: 'block' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Department Name</th>
                                                <th scope="col" style={{minWidth: '50px'}}>Designation Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dept.map((items, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{items.departmentName}</td>
                                                    <td>{desgNames(items.department_id)}</td>
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
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default DeptDesign;

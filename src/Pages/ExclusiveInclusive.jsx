import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType, humandateonly, mapHolidayType, yesOrno, partnertypeNames,inextype } from '../utils';

const Exlusiveinclusive = () => {
    const [exc, setExc] = useState([]);
    const [user, setUser] = useState([]);
    const [bank, setBank] = useState([]);
    const [dept, setDept] = useState([]);
    const [place, setPlace] = useState([]);
    const [desg, setDesg] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exclusiveAndInclusiveDetails')
            .then((response) => {
                setExc(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/designationDetails')
            .then((response) => {
                setDesg(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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

    const getUserNameById = (id) => {
        const foundUser = user.find(u => u.user_id === id);
        return foundUser ? `${foundUser.firstname} ${foundUser.lastname}` : 'Unknown';
    }

    const getUserNamesByIds = (ids) => {
        const idsArray = ids.split(','); // Split the comma-separated string into an array
        const names = idsArray.map(id => {
            const foundUser = user.find(u => u.user_id === Number(id)); // Convert ID to number before searching
            return foundUser ? `${foundUser.firstname} ${foundUser.lastname}` : 'Unknown'; // Return the name or 'Unknown' if not found
        });
        return names.join(', '); // Join the names with commas
    }

    const getBaGETnkNames = (id) => {
        const bankDetails = bank.find(b => b.id === Number(id)); // Convert to number before comparison
        return bankDetails ? bankDetails.bank_name : '--';
    };

    const placeName = (id) => {
        const placeDetails = place.find((p) => p.id === id);
        return placeDetails ? placeDetails.name : '---';
    }

    const deptName = (id) => {
        const deptdetails = dept.find((d) => d.department_id === id);
        return deptdetails ? deptdetails.departmentName : '---';
    }

    const desgName = (id) => {
        const desgDetails = desg.find((s) => s.designation_id === id);
        return desgDetails ? desgDetails.designation : '--';
    }

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title">Exclusive & Inclusive Details</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Exclusive & Inclusive</a>
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
                                <div style={{ overflowX: 'auto' }}>
                                    <table className="table table-dark" style={{ tableLayout: 'fixed', width: '100%' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Inclusions / Exclusions</th>
                                                <th style={{ minWidth: '150px' }}>Name</th> {/* Adjusted width for Name column */}
                                                <th scope="col">Type</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Standed Type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {exc.map((items, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{inextype(items.type)}</td>
                                                    <td style={{ minWidth: '150px', wordBreak: 'break-all' }}>
  {items.name}
</td>
                                                    <td>{yesOrno(items.standard_type)}</td>
                                                    <td>{yesOrno(items.status)}</td>
                                                    <td>{mapHolidayType(items.itenary_type)}</td>
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

export default Exlusiveinclusive;

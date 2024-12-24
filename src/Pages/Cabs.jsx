import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno } from '../utils';

const Cabs = () => {
    const [cabs, setCabs] = useState([]);
    const [user, setUser] = useState([]);
    const [bank, setBank] = useState([]);
    const [outflow,setOutFlow]=useState([]);
    const [place,setPlace]=useState([]);

    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/cabsDetails')
            .then((response) => {
                setCabs(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Fetch user and bank list
    useEffect(() => {
        axios.get('http://localhost:5000/users_all')
            .then((response) => {
                setUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get('http://localhost:5000/banklist')
            .then((response) => {
              setOutFlow(response.data.data);
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

    // Get user name by user ID
    const getUserNameById = (id) => {
        const foundUser = user.find(u => u.user_id === id);
        return foundUser ? `${foundUser.firstname} ${foundUser.lastname}` : 'Unknown';
    }

    // Get bank name by bank account ID
    const getBankNames = (id) => {
    const bankDetails = bank.find(b => b.id === Number(id)); // Convert to number before comparison
   
    return bankDetails ? bankDetails.bank_name : '--';
    };

    const outName=(id)=>{
       const outFlowDetails=outflow.find(o=>o.id===id);
       return outFlowDetails ? outFlowDetails.name:'--';
    }

    const placeName=(id)=>{
        const placeDetails=place.find((p)=>p.id===id);
        return placeDetails ? placeDetails.name:'---'
    }

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Cabs  Details </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Cabs</a>
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
                                                <th scope="col">State Name</th>
                                                <th scope="col" style={{minWidth:'50px'}}>Service Location</th>
                                                <th scope="col">Supplier Name.</th>
                                               
                                               
                                                <th scope="col">Contact Number</th>
                                                <th scope="col">Vehicle Type</th>
                                                <th scope="col">Seating Capacity</th>
                                                <th scope="col">Day Cost</th>
                                                <th scope="col">Rate Per KM</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cabs.map((items, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{items.state}</td>
                                                    <td>{items.service_location}</td>
                                                    <td>{items.supplier_name}</td>
                                                    <td>{items.contact}</td>
                                                    <td>{items.vehicle_type}</td>
                                                    <td>{items.capacity}</td>
                                                    <td>{items.day_cost}</td>
                                                    <td>{items.rate_per_km}</td>
                                                    
                                                    <td><button className='btn btn-sm btn-danger'>delete</button></td>
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

export default Cabs;

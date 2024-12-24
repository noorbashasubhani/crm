import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno } from '../utils';

const Hotels = () => {
    const [hoel, setHotel] = useState([]);
    const [user, setUser] = useState([]);
    const [bank, setBank] = useState([]);
    const [outflow,setOutFlow]=useState([]);
    const [place,setPlace]=useState([]);

    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/hotelsDetails')
            .then((response) => {
                setHotel(response.data.data);
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
                        <h3 className="page-title"> Hotel  Details </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Hotel</a>
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

                                                <th scope="col">Hotel Standard</th>
                                                <th scope="col" style={{minWidth:'50px'}}>State</th>
                                                <th scope="col">City.</th>
                                                <th scope="col" style={{minWidth:'50px'}}>Hotel Name</th>

                                                <th scope="col">Distance from City Centre (Kms)	</th>
                                                <th scope="col">Price Range</th>
                                                <th scope="col">Contact Number & E-Mail	</th>
                                                <th scope="col">Online Visibility	</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {hoel.map((items, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>

                                                    <td>{items.rating}</td>
                                                    <td>{items.state}</td>
                                                    <td>{items.city}</td>
                                                    <td>{items.hotel_name}</td>

                                                    <td>{items.distance_from_city}</td>
                                                    <td>{items.price_range}</td>
                                                    <td>{items.contactnum}</td>
                                                    <td>{yesOrno(items.visible_hotel_test)}</td>
                                                    
                                                    
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

export default Hotels;

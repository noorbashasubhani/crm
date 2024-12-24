import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno,partnertypeNames } from '../utils';

const GiftList = () => {
    const [team, setTeam] = useState([]);
    const [gift, setGift] = useState([]);
    const [bank, setBank] = useState([]);
    const [dept,setDept]=useState([]);
    const [place,setPlace]=useState([]);
    const [desg,setDesg]=useState([]);

    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/teamDetails')
            .then((response) => {
                setTeam(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


     // Fetch ledger list
     useEffect(() => {
        axios.get('http://localhost:5000/designationDetails')
            .then((response) => {
                setDesg(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Fetch user and bank list
    useEffect(() => {
        axios.get('http://localhost:5000/giftdetails')
            .then((response) => {
                setGift(response.data.data);
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

    
   const destArr=(id)=>{
       const destDetails=place.find(ites=>ites.id===id);
       return destDetails ? destDetails.name : '--';
   }

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Gift  Details </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Gift</a>
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
                                                <th scope="col">GHRN No  </th>
                                                <th scope="col" style={{minWidth:'50px'}}>Customer Name</th>
                                                <th scope="col">	Customer Number</th>
                                                <th scope="col">Holiday Type </th>
                                                <th scope="col">	Destination  	</th>
                                                 
                                                <th scope="col">Vocher Exp Date	</th>                                                    
                                                <th scope="col">	Download</th>
                                                
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {gift.map((items, index) => (
                                           
                                            
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{items.lead_code}</td>
                                                    <td>{items.customer_name} </td>
                                                    <td>{items.customer_mobile}</td>
                                                    <td>{mapHolidayType(items.holiday_type)}</td>
                                                    <td>{destArr(items.holiday_destination)}</td>
                                                    <td>{humandateonly(items.gigt_vocher_date)}</td>
                                                    <td><button className="btn btn-sm btn-success">Download </button></td>
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

export default GiftList;

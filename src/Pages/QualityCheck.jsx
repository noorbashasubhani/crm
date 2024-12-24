import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno,partnertypeNames,supplier,qc_Status} from '../utils';

const QualityCheck = () => {
    const [qc, setQc] = useState([]);
    const [gift, setGift] = useState([]);
    const [bank, setBank] = useState([]);
    const [dept,setDept]=useState([]);
    const [place,setPlace]=useState([]);
    const [desg,setDesg]=useState([]);
    const [user,setUsers]=useState([]);

    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/qualiticheck')
            .then((response) => {
                setQc(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

            axios.get('http://localhost:5000/users')
            .then((response) => {
                setUsers(response.data.data);
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
   const userArr=(id)=>{
    const userDetails=user.find(ites=>ites.user_id===id);
    return userDetails ? userDetails.firstname : '--';
}

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> QC  Details </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">QC</a>
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
                                                <th scope="col">QC Checking  </th>
                                                <th scope="col" style={{minWidth:'50px'}}>Customer Name</th>
                                                <th scope="col">Reference No#.</th>
                                                <th scope="col">Destination </th>
                                                <th scope="col">Travel Type</th>                                                
                                                <th scope="col">Submited Date</th>                                                    
                                                <th scope="col">CostSheet</th>
                                                <th scope="col">Itinerary</th>
                                                <th scope="col">Built By</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {qc.map((items, index) => (
                                           
                                           //let download = items.qc_download === 'Y' ? 'Process' : 'Pending';
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{qc_Status(items.qc_download)}</td>
                                                    <td>{items.customer_name} </td>
                                                    <td>{items.ghrn_no}</td>
                                                    
                                                    <td>{destArr(items.holiday_destination)}</td>
                                                    <td>{mapHolidayType(items.travel_type)}</td>
                                                    <td>{humandateonly(items.form_submitted_date)}</td>
                                                    <td><button className="btn btn-sm btn-success">Download </button></td>
                                                    <td><button className="btn btn-sm btn-success">Download </button></td>
                                                    <td>{userArr(items.build_by)}</td>
                                                    <td></td>
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

export default QualityCheck;

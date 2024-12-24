import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno } from '../utils';
import { Link } from 'react-router-dom';

const CustomerSupportComyes = () => {
    const [cus, setCus] = useState([]);
    const [destin,setDestin]=useState([]);
    const [emp,setEmp]=useState([]);
    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/customersupportcommpleted')
            .then((response) => {
                setCus(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get('http://localhost:5000/destinationDetails').then((responce)=>{
            setDestin(responce.data.data);
        }).catch((error)=>{
        console.log(error);
        });

        axios.get('http://localhost:5000/employeeDetails').then((responce)=>{
            setEmp(responce.data.data);
        }).catch((error)=>{
        console.log(error);
        });

    }, []);

    
   const Destionarray=(id)=>{
    const dest_name=destin.find(items=>items.id===id);
    return dest_name ? dest_name.name:'-- --';
   }

   const employeeArray=(id)=>{
    const emp_name=emp.find(emps=>emps.user_id===id);
    return emp_name?emp_name.firstname + " " + emp_name.lastname:'---';
   }
    

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title">Up Comming  Trips  </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Customer Support</a>
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
                                     <div className="row d-flex gap-2 justify-content-center">
                                     <Link to="/customer-support"><div className="col-sm-5 btn btn-sm btn-primary">Completed Trips</div></Link>
                                     <Link to="/customer-support-com"><div className="col-sm-5 btn btn-sm btn-dark">Up Going Trips</div></Link>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table table-stripped" style={{ overflowX: 'scroll', display: 'block' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">GHRN No</th>
                                                <th scope="col" style={{minWidth:'50px'}}>Passenger Names</th>
                                                <th scope="col">Destination Name.</th>
                                               
                                               
                                                <th scope="col">Trip Start Date	</th>
                                                <th scope="col">Trip End Date	</th>
                                                <th scope="col">Customer Manager	</th>
                                                <th scope="col">Action</th>
                                                
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cus.map((items, index) =>(
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{items.ghrn_no}</td>
                                                    <td>{items.customer_name}</td>
                                                    <td>{Destionarray(items.holiday_destination)}</td>
                                                    <td>{humandateonly(items.trip_start_date)}</td>
                                                    <td>{humandateonly(items.trip_end_date)}</td>
                                                    <td>{employeeArray(items.customer_supp_id)}</td>
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

export default CustomerSupportComyes;

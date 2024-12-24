import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno,service_tuype } from '../utils';

const ContactDetails = () => {
    const [users, setUsers] = useState([]);
    const [desg,setDesg]=useState([]);

    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/users_all')
            .then((response) => {
                setUsers(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

            axios.get('http://localhost:5000/designationDetails/')
            .then((response) => {
                setDesg(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

   const desgn_namefun=(id)=>{
       const desgName=desg.find((items)=>(items.designation_id)===id);
       return desgName?desgName.designation:'No Designation ';
   }
       
    




    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Contact  Details </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">User</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                Contact 
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table table-bordered dt-responsive nowrap w-100 dataTable no-footer dtr-inline" style={{ overflowX: 'scroll', display: 'block' }}>
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>#</th>
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Emp ID</th>
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Name</th>
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Father Name.</th>
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Father Number</th>
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Mother Name.</th>
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Mother Number</th> 
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Cast Name</th>
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Date Of Birth</th>
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Age</th>
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Designation</th>                                          
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Ofiice No</th>
                                                <th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>In House No</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((items, index) => (

                                                items.partner_code !='' &&
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>{items.partner_code}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.firstname}-{items.lastname}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.fathername}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.father_no}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.mother_name}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.mother_no}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.caste}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.dateOfBirth}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.dateOfBirth}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{desgn_namefun(items.designation)}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.personal_no}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.in_house_no}</td>



                                                </tr>
 : '' ))}
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

export default ContactDetails;

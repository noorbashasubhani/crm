import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno,humanReadableDate,ONLYDATE,levetype,status_type_leave } from '../utils';
import { Link } from 'react-router-dom';
const LeaveDetails = () => {
    const [leav, setLeav] = useState([]);
    const [user,setUser]=useState([]);

    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/users_all')
            .then((response) => {
                setUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

            axios.get('http://localhost:5000/leave_mst_details/')
            .then((response) => {
                setLeav(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

   const code=(id)=>{
       const desgName=user.find((items)=>(items.user_id)===id);
       return desgName?desgName.partner_code:'No Code ';
   }

    const empdetails=(id)=>{
    const desgName=user.find((items)=>(items.user_id)===id);
    return desgName?desgName.firstname +' - '+ desgName.lastname:'No Name ';
}
       

    




    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Leave  Details </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">User</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                Leave 
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
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Emp Name</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Leave Type.</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Leave Dates</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>No of Days</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Applied Date</th> 

<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Status</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Action</th>
</tr>
                                        </thead>
                                        <tbody>
                                            {leav.map((items, index) => (

                                                items.partner_code !='' &&
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>{code(items.user_id)}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{empdetails(items.user_id)}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{levetype(items.leave_type)}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{ONLYDATE(items.from_date)} To {ONLYDATE(items.to_date)}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.no_of_days}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{humanReadableDate(items.created_date)}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{status_type_leave(items.status)}</td>
<td><Link to={`/view-leave-details/${items.id}`}>View</Link></td>



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

export default LeaveDetails;

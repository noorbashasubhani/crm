import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useParams } from 'react-router-dom';  // <-- Add this import

import { transactionType,humandateonly,mapHolidayType,yesOrno,humanReadableDate,ONLYDATE,levetype,status_type_leave } from '../utils';
import { Link } from 'react-router-dom';
const ViewLeaveDetails = () => {
    const [leav, setLeav] = useState([]);
    const [user,setUser]=useState([]);
    const [totalleav,setTotalleav]=useState([]);
    const { id } = useParams();
    

    const myUser=JSON.parse(localStorage.getItem('user'));
    //console.log("My Login Details: "+myUser['user_id']);

    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/users_all')
            .then((response) => {
                setUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

            axios.get(`http://localhost:5000/leave_mst_details_id/${id}`)
            .then((response) => {
                setLeav(response.data.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });

            axios.get(`http://localhost:5000/leave_mst_leavetotal/${id}`)
            .then((response) => {
                setTotalleav(response.data.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

const getUserName=(user_id)=>{   
 const userDetails=user.find((items)=>items.user_id===user_id); 
  return userDetails?userDetails.firstname:'-- N /A --';
}    
//console.log("Leave Details is : "+leav['user_id']);

const getUserNamesByIds = (ids) => {
    if (!ids) return '-- N /A --'; 
    const idsArray = ids.split(','); // Split the comma-separated string into an array
    const names = idsArray.map(id => {
        const foundUser = user.find(u => u.user_id === Number(id)); // Convert ID to number before searching
        return foundUser ? `${foundUser.firstname} ${foundUser.lastname}` : 'Unknown'; // Return the name or 'Unknown' if not found
        
    });
    return names.join(', '); // Join the names with commas
}

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Leave  Details Visiting </h3>
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
                    <div class="card">
  
  <div class="card-body">
    <p class="card-text">Some quick Gogaga Leave Management System Follow Below Details</p>
  </div>
</div>
                    <div className="row mt-5">
                    <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table table-bordered dt-responsive nowrap w-100 dataTable no-footer dtr-inline" style={{ overflowX: 'scroll', display: 'block' }}>
                                        <thead>
                                            <tr>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Sick Leaves <span className="badge badge-primary">{myUser['s_leaves']}</span></th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Taken <span class="badge badge-danger">{totalleav['total_sick_leave']}</span></th>
</tr>
<tr>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Casual Leaves <span className="badge badge-primary">{myUser['c_leaves']}</span></th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Taken <span class="badge badge-danger">{totalleav['total_casual_leave']}</span></th>
</tr>
<tr>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Extra Leaves <span className="badge badge-primary text-right">0</span></th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Taken <span class="badge badge-danger">{totalleav['total_extra_leave']}</span></th>
</tr>

                                        </thead>
                                        
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table table-bordered dt-responsive nowrap w-100 dataTable no-footer dtr-inline" style={{ overflowX: 'scroll', display: 'block' }}>
                                        <thead>
                                            <tr>

<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Emp ID</th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>{myUser['partner_code']}</th>
</tr>
<tr>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Emp Name.</th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>{myUser['firstname']} . {myUser['lastname']}</th>
</tr>
<tr>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Leave Type</th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>{levetype(leav.leave_type)}</th> 
</tr>
<tr>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>No Of Days</th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>{leav.no_of_days}</th>
</tr>
<tr>
<th style={{ textAlign: "left",minWidth: "200px",wordWrap: "nowrap" }}>Dates</th>
<th style={{ textAlign: "left",minWidth: "200px",wordWrap: "nowrap" }}>{humanReadableDate(leav.created_date)}</th>
</tr>
<tr>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Applied Date</th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>{ONLYDATE(leav.from_date)} To {ONLYDATE(leav.to_date)}</th>
</tr>
<tr>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Status</th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>{status_type_leave(leav.status)}</th>
</tr>
<tr>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Leave Managers
</th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>
   {getUserNamesByIds(leav.emp_ids)}
</th>
</tr>

<tr>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Approved / Rejected By
</th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>{getUserName(leav.replay_by)}</th>
</tr>

<tr>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>Reply Note

</th>
<th style={{ textAlign: "left",minWidth: "400px",wordWrap: "nowrap" }}>{leav.replay}</th>
</tr>
                                        </thead>
                                        
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

export default ViewLeaveDetails;

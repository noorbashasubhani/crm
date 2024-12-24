import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno,humanReadableDate,ONLYDATE,levetype,status_type_leave } from '../utils';
import { Link } from 'react-router-dom';


const RipDetails = () => {
    const [permance, setPermance] = useState([]);
    const [user,setUser]=useState([]);
    const loginid=JSON.parse(localStorage.getItem('user'));

    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/users_all')
            .then((response) => {
                setUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

            axios.get(`http://localhost:5000/performanceDetails/${loginid['user_id']}`)
            .then((response) => {
                setPermance(response.data.data);
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
    const desgName=user.find((items)=>(items.user_id)===Number(id));
    return desgName?desgName.firstname +' - '+ desgName.lastname:'No Name ';
}

const allEmp = (ids) => {
    //alert(ids);
    if (!ids) return '-- N /A --';  // Return early if there are no IDs
    // Split the comma-separated string into an array of IDs
    const empIds = ids.split(','); // Trim any spaces
    // Map over the IDs and find the corresponding user names
    const names = empIds.map(id => {
        const foundUser = user.find(u => u.user_id === Number(id)); // Convert ID to number for comparison
        return foundUser ? `${foundUser.firstname} ${foundUser.lastname}` : '--'; // Return full name or '--' if not found
    });
    // Join the names with a comma
    return names.join(', ');
};
       


const empDetas=(ids)=>{

    if(!ids) return '--NA--';
    const idsArr=ids.split(',');

    const names=idsArr.map(id=>{
        const founUser=user.find(u=>u.user_id===Number(id));
        return founUser?founUser.firstname:'--';
    });
    return names.join('/');

}
//console.log(loginid);
    




    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> RIP  Details </h3>
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
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Emp Name</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Target Amount</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>No of Confirmations </th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Target Dates</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>No of Days</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Visible To</th> 
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Created Date</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Created By</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Status</th>
<th style={{ textAlign: "left",minWidth: "50px",wordWrap: "nowrap" }}>Action</th>
</tr>
                                        </thead>
                                        <tbody>
                                            {permance.map((items, index) => (

                                                <tr key={index}>
                                                    <td>{index + 1}</td>

<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{empdetails(items.emp_id)}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.total_vol}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.no_confirm}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.f_t_date}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.total_days}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{empDetas(items.visibleto)}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{items.created_date}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{empdetails(items.created_by)}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>{yesOrno(items.status)}</td>
<td style={{ textAlign: "left",minWidth: "50px",wordWrap: "break-word" }}>--</td>
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

export default RipDetails;

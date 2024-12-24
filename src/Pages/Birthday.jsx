import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno,partnertypeNames } from '../utils';

const Birthday = () => {
    const [holiday, setHoliday] = useState([]);
    const [user, setUser] = useState([]);
    const [bank, setBank] = useState([]);
    const [dept,setDept]=useState([]);
    const [place,setPlace]=useState([]);
    const [desg,setDesg]=useState([]);

    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/holidaysDetails')
            .then((response) => {
              setHoliday(response.data.data);
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

    // Get user name by user ID
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
    // Get bank name by bank account ID
    const getBaGETnkNames = (id) => {
    const bankDetails = bank.find(b => b.id === Number(id)); // Convert to number before comparison
   
    return bankDetails ? bankDetails.bank_name : '--';
    };

    

    const placeName=(id)=>{
        const placeDetails=place.find((p)=>p.id===id);
        return placeDetails ? placeDetails.name:'---'
    }

    const deptName=(id)=>{
         const deptdetails=dept.find((d)=>d.department_id===id);
         return deptdetails ? deptdetails.departmentName:'---'
    }

    const desgName=(id)=>{
        const desgDetails=desg.find((s)=>s.designation_id===id);
        return desgDetails ? desgDetails.designation:'--'
    }

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Birthday  Details </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Birthday</a>
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
                                                <th scope="col">Employee Id </th>
                                                <th scope="col" style={{minWidth:'50px'}}>Employee Name</th>
                                                <th scope="col">Birthday Date</th>
                                                
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {user.map((items, index) => (
                                            
                                            
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{(items.partner_code)}{(items.code)}</td>
                                                    <td>{items.firstname} {items.lastname}</td>
                                                    <td>{humandateonly(items.dateOfBirth)}</td>
                                                    
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

export default Birthday;

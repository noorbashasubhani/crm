import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno,partnertypeNames } from '../utils';

const Destinations = () => {
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


  

    // Fetch user and bank list
    useEffect(() => {

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
    
    const getHolidayName=(id)=>{
      const getholidaydetails=place.find(h=>h.id===id);
      return getholidaydetails?getholidaydetails.name:'--';
    }


   
    

    

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Destinations  Details </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Destinations</a>
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
                                                <th scope="col">Destination Name </th>
                                                <th scope="col" style={{minWidth:'50px'}}>Country Name</th>
                                                <th scope="col">Destination Type</th>
                                                <th scope="col">Latitude</th>
                                                <th scope="col">Longitude</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {place.map((items, index) => (
                                            
                                            
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{(items.name)}</td>
                                                    <td>{getHolidayName(items.country_id)} </td>
                                                    <td>{mapHolidayType(items.type)}</td>
                                                    <td>{items.lat}</td>
                                                    <td>{items.lag}</td>
                                                    
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

export default Destinations;

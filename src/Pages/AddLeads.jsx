import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly } from '../utils';

const Accounts = () => {
    const [city,setCity]=useState([]);
    const [pnaes,setPnaes]=useState([]);
    const [show,setShow]=useState(false);

    const [datains,setDatains]=useState({
        leadSource:'',
        location_name:'',
        partner_name:'',
        holidayType:'',
        customer_name:'',
        customer_mobile:'',
        customer_email:'',
        customer_desc:''
    });


    useEffect(()=>{
        axios.get('http://localhost:5000/statelist').then((Response)=>{
            setCity(Response.data.data);
        }).catch(error=>{
            console.log(error);
        });

        axios.get('http://localhost:5000/users_all').then((Response)=>{
            setPnaes(Response.data.data);
        }).catch(error=>{
            console.log(error);
        });


    },[]);

    const changestatr=(e)=>{
       const {name,value}=e.target;
      

       setDatains(prevState => {
        const updatedState = { ...prevState, [name]: value };
        
        // If leadSource is 'P', show the partner name field
        if (name === 'leadSource' && value === 'P') {
            setShow(true);
        } else if (name === 'leadSource' && value !== 'P') {
            setShow(false);
        }

        return updatedState;
    });
    }
    const alldata=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/savedata/',datains).then((Response)=>{
        console.log(Response);
        }).catch(error=>{
            console.log(error);
        });
    }

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Accounts </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Accounts</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Ledger
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="container my-5">
                    <div className="row">
                    
  <h2 className="text-center mb-4">Lead Details Form</h2>
  <form action="#" method="POST" onSubmit={alldata}>
    {/* Lead Source */}
    <div className="mb-3">
      <label htmlFor="leadSource" className="form-label">
        Lead Source
      </label>
      <select className="form-select" id="leadSource" name="leadSource" onChange={changestatr}>
        <option value="">Select Lead Source</option>
        <option value="W">Website</option>
        <option value="G">Google</option>
        <option value="I">Instra</option>
        <option value="F">Facebook</option>
        <option value="P">Partner</option>
      </select>
    </div>
    {/* Lead Location */}
    

    <div className="mb-3">
      <label htmlFor="leadSource" className="form-label">
      Lead Locations
      </label>
      <select className="form-select" id="leadSource" name="location_name" onChange={changestatr}>
        <option value="">Select Lead Location</option>
        {city.map((itemss,index)=>(
        <option value={itemss.id}>{itemss.state}</option>
         ))}

         
      </select>
    </div>
    {show && (
    <div className="mb-3">
      <label htmlFor="leadSource" className="form-label">
      Partner Names 
      </label>
      <select className="form-select" id="partner_name" name="partner_name" onChange={changestatr}>
        <option value="">Select Lead Source</option>
        {pnaes.map((items,index)=>(
        <option value="{items.user_id}">{items.firstname} {items.lastname}</option>
         ))}
      </select>
    </div>
    )}

    {/* Holiday Type */}
    <div className="mb-3">
      <label htmlFor="holidayType" className="form-label">
        Holiday Type
      </label>
      <select className="form-select" id="holidayType" name="holidayType" onChange={changestatr}>
        <option value="">Select Holiday Type</option>
        <option value="H">Homestic</option>
        <option value="I">International</option>
      </select>
    </div>
    {/* Customer Name */}
    <div className="mb-3">
      <label htmlFor="customerName" className="form-label" >
        Customer Name
      </label>
      <input
        type="text"
        className="form-control"
        id="customer_name"
        name="customer_name"
        placeholder="Enter Customer Name"
        required=""
        onChange={changestatr}
      />
    </div>
    {/* Customer Mobile Number */}
    <div className="mb-3">
      <label htmlFor="customerMobile" className="form-label">
        Customer Mobile Number
      </label>
      <input
        type="tel"
        className="form-control"
        id="customer_mobile"
        name="customer_mobile"
        placeholder="Enter Customer Mobile Number"
        pattern="[0-9]{10}"
        required=""
        onChange={changestatr}
      />
    </div>
    {/* Customer E-Mail */}
    <div className="mb-3">
      <label htmlFor="customerEmail" className="form-label">
        Customer E-Mail
      </label>
      <input
        type="email"
        className="form-control"
        id="customer_email"
        name="customer_email"
        placeholder="Enter Customer E-Mail"
        required=""
        onChange={changestatr}
      />
    </div>
    {/* Holiday Description */}
    <div className="mb-3">
      <label htmlFor="holidayDescription" className="form-label">
        Holiday Description
      </label>
      <textarea
        className="form-control"
        id="customer_desc"
        name="customer_desc"
        rows={4}
        placeholder="Enter a brief description of the holiday"
        required=""
        defaultValue={""}
        onChange={changestatr}
      />
    </div>
    {/* Submit Button */}
    <div className="mb-3 text-center">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  </form>
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

export default Accounts;

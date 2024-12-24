import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno,service_tuype,credit_status } from '../utils';

const InternationalCredits = () => {

    const [cred,setCred]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/creditsnoteslist/I')
              .then((response) => {
                setCred(response.data.data);
              })
              .catch((error) => {
                console.log('Failed to fetch users data');
              });
        
    },[]);

  return (
    <>
<table className="table table-stripped" style={{ display: "block", overflowX: "auto" }}>
    <thead>
<tr>
            <th>#</th>
            <th>City</th>
            <th>Service Type</th>
            <th>Hotel / Supplier Name</th>
            <th>CN Issued Date</th>
            <th>Towards Ref Number</th>

            <th>Amount</th>
            <th>Used Amount</th>
            <th>Balance Amount</th>
            <th>Valid Till</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
            {cred.map((items,index)=>(
            <tr>
                <td>{index+1}</td>
                <td>{items.country_name}</td>
                <td>{service_tuype(items.service_type)}</td>
                <td>{items.hotel_supply_name}</td>
                <td>{humandateonly(items.cn_issued_date)}</td>
                <td>{items.ref_number}</td>
                <td>{items.amount}</td>
                <td>{items.used_amount}</td>
                <td>{items.balance_amount}</td>
                <td>{humandateonly(items.valid_till)}</td>
                <td>{credit_status(items.status)}</td>
                <td><button className="btn btn-dark btn-sm ">View</button></td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default InternationalCredits
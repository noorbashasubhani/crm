import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno,service_tuype,credit_status } from '../utils';
import { Link } from 'react-router-dom';

const CompletedApproval = () => {

    const [cred,setCred]=useState([]);
    const [user,setUser]=useState([]);
    const [dest,setDest]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/pendingApprovals')
              .then((response) => {
                setCred(response.data.data);
              })
              .catch((error) => {
                console.log('Failed to fetch users data');
              });

              axios.get('http://localhost:5000/users_all')
              .then((response) => {
                setUser(response.data.data);
              })
              .catch((error) => {
                console.log('Failed to fetch users data');
              });

              axios.get('http://localhost:5000/destinationDetails')
              .then((response) => {
                setDest(response.data.data);
              })
              .catch((error) => {
                console.log('Failed to fetch users data');
              });

              
        
    },[]);

    const userarray=(id)=>{
      const usedetails=user.find(ites=>ites.user_id===id);
      return usedetails ? usedetails.firstname:'--';
    }

    const destinaaray=(id)=>{
      const destlist=dest.find(dds=>dds.id===id);
      return destlist ? destlist.name : '---';
    }

  return (
    <>
<table className="table table-stripped" style={{ display: "block", overflowX: "auto" }}>
    <thead>
<tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Destination</th>
            <th>Ref No</th>
            <th>Super Partner %</th>
            <th>Sales Partner %</th>
            <th>Lead Generator  %</th>
            <th>Created Date</th>
            <th>Sent By</th>
            
        </tr>
        </thead>
        <tbody>
            {cred.map((items,index)=>(
            <tr>
                <td>{index+1}</td>
                <td>{items.customer_name}</td>
                <td>{destinaaray(items.holiday_destination)}</td>
                <td>{items.ghrn_no}</td>
                
                <td>{items.super_partner_per}</td>
                <td>{items.sales_partner_per}</td>
                <td>{items.lead_generator_per}</td>
                <td>{humandateonly(items.created_date)}</td>
                <td>{userarray(items.build_by)}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default CompletedApproval
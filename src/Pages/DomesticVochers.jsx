import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType,yesOrno,service_tuype,credit_status } from '../utils';
import { Link } from 'react-router-dom';

const DomesticVochers = () => {

    const [voch,setVoch]=useState([]);
    const [user,setUser]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/vochersdetails/D')
              .then((response) => {
                //console.log(response.data.data);
                setVoch(response.data.data);
              })
              .catch((error) => {
                console.log('Failed to fetch users data');
              });

              axios.get('http://localhost:5000/users_all')
              .then((response) => {
                //console.log(response.data.data);
                setUser(response.data.data);
              })
              .catch((error) => {
                console.log('Failed to fetch users data');
              });
        
    },[]);


    const userarry=(id)=>{
      const userdetas=user.find(items=>items.user_id===id);
      return userdetas?userdetas.firstname + " " + userdetas.lastname:'---';
    }

  return (
    <>
<table className="table table-stripped" style={{ display: "block", overflowX: "auto" }}>
    <thead>
<tr>
            <th>#</th>
            <th>Issuance Date</th>
            <th>GHRN No</th>
            <th>Customer Name</th>
            <th>Holiday Type</th>
            <th>Destination</th>

            <th>Start Date	</th>
            <th>Confirmed By	</th>
            <th>Sales Manager	</th>
            <th>Customer Support Manager</th>
            <th>Download Voucher</th>
            <th>Manage</th>
            
        </tr>
        </thead>
        <tbody>
            {voch.map((items,index)=>(
            <tr>
                <td>{index+1}</td>
                <td>{humandateonly(items.voucher_permission_approved_date)}</td>
                <td>{items.ghrn_no}</td>
                <td>{items.customer_name}</td>
                <td>{mapHolidayType(items.travel_type)}</td>
                <td>{items.holiday_destination}</td>
                <td>{humandateonly(items.trip_start_date)}</td>
                <td>{userarry(items.confirmed_by)}</td>
                <td>{userarry(items.assign_tele_new)}</td>
                <td>{userarry(items.customer_supp_id)}</td>
                <td>{yesOrno(items.download_status)}</td>
                <td></td>
                
            </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default DomesticVochers
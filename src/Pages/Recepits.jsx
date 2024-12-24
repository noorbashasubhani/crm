import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly } from '../utils';
import MyComponent from './MyComponent ';

import jsPDF from 'jspdf';

const Receipts = () => {
    const [tax, setTax] = useState([]);
    const [user, setUser] = useState([]);
    const [bank, setBank] = useState([]);
    const [outflow,setOutFlow]=useState([]);

    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/taxreceipt_list')
            .then((response) => {
                setTax(response.data.data);
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

        axios.get('http://localhost:5000/banklist')
            .then((response) => {
              setOutFlow(response.data.data);
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
    }, []);

    // Get user name by user ID
    const getUserNameById = (id) => {
        const foundUser = user.find(u => u.user_id === id);
        return foundUser ? `${foundUser.firstname} ${foundUser.lastname}` : 'Unknown';
    }

    // Get bank name by bank account ID
    const getBankNames = (id) => {
    const bankDetails = bank.find(b => b.id === Number(id)); // Convert to number before comparison
   
    return bankDetails ? bankDetails.bank_name : '--';
    };

    const outName=(id)=>{
       const outFlowDetails=outflow.find(o=>o.id===id);
       return outFlowDetails ? outFlowDetails.name:'--';
    }
   // Handle PDF Download
   const downloadpdf = (id) => {
    const item = tax.find(t => t.id === id);  // Find the specific tax item based on ID

    // Create a new instance of jsPDF
    const doc = new jsPDF();

    // Add the content to the PDF
    doc.setFontSize(12);
    doc.text('Tax Receipt Details', 20, 20);  // Add title

    // Add Tax details to the PDF
    doc.text(`GHRN No: ${item.reference_no}`, 20, 30);
    doc.text(`Reference / Invoice No: ${item.receipt_num_type}`, 20, 40);
    doc.text(`Customer Name: ${item.customer_Name}`, 20, 50);
    doc.text(`Travel Destination: ${item.traveldestination}`, 20, 60);
    doc.text(`Travel Start Date: ${humandateonly(item.travelstartdate)}`, 20, 70);
    doc.text(`Issue Date: ${humandateonly(item.date_of_issue)}`, 20, 80);
    doc.html(<div>
        
    </div>);

    // Save the PDF
    doc.save(`Receipt_${item.receipt_num_type}.pdf`);
}

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Tax Invoices </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Receipts</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                Invoices
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <MyComponent />
                                    <table className="table table-dark" style={{ overflowX: 'scroll', display: 'block' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">GHRN No </th>
                                                <th scope="col">Reference / Invoice No</th>
                                                <th scope="col">Customer Name	</th>
                                                <th scope="col">Travel Destination	</th>
                                                <th scope="col">Travel Start Date</th>
                                                <th scope="col">Issue Date</th>
                                                <th scope="col">Actions</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tax.map((items, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{items.reference_no}</td>
                                                    <td>{items.receipt_num_type}</td>
                                                    <td>{items.customer_Name}</td>
                                                    <td>{items.traveldestination}</td>
                                                    <td>{humandateonly(items.travelstartdate)}</td>
                                                   
                                                    <td>{humandateonly(items.date_of_issue)}</td>
                                                    <td><button onClick={()=>downloadpdf(items.id)} className="btn btn-success btn-sm">Download Pdf</button></td>
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

export default Receipts;

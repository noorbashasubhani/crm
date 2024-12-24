import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly } from '../utils';

const Accounts = () => {
    const [acc, setAcc] = useState([]);
    const [user, setUser] = useState([]);
    const [bank, setBank] = useState([]);
    const [outflow,setOutFlow]=useState([]);

    // Fetch ledger list
    useEffect(() => {
        axios.get('http://localhost:5000/ledgerlist')
            .then((response) => {
                setAcc(response.data.data);
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
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table table-dark" style={{ overflowX: 'scroll', display: 'block' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">TXN No</th>
                                                <th scope="col">Bank TXN Date</th>
                                                <th scope="col">TXN Entry Date</th>
                                                <th scope="col">TXN Towards</th>
                                                <th scope="col">TXN Title</th>
                                                <th scope="col">TXN Particular</th>
                                                <th scope="col">Bank A/C</th>
                                                <th scope="col">Credit</th>
                                                <th scope="col">Debit</th>
                                                <th scope="col">Balance</th>
                                                <th scope="col">Action</th>
                                                <th scope="col">Entry By</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {acc.map((items, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td></td>
                                                    <td>{humandateonly(items.transaction_date)}</td>
                                                    <td>{humandateonly(items.created_date)}</td>
                                                    <td>{transactionType(items.transaction_towards)}</td>
                                                    <td>{transactionType(items.transaction_title)}</td>
                                                    <td>{items.transaction_towards==='O'?'Others':''}
                                                    {items.transaction_title !==''?items.transaction_title:''}
                                                    {outName(items.outflows_cat)}
                                                    </td>
                                                    <td>{getBankNames(items.bank_acc_name)}</td>
                                                    <td style={{ color: 'lightgreen' }}>{items.transaction_type === 'C' ? items.amount : '--'}</td>
                                                    <td style={{ color: 'lightred' }}>{items.transaction_type === 'D' ? items.amount : '--'}</td>
                                                    <td>{items.balance_amount}</td>
                                                    <td>Action</td>
                                                    <td>{getUserNameById(items.added_by)}</td>
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

export default Accounts;

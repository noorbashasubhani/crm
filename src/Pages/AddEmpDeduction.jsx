import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType, humandateonly, mapHolidayType, yesOrno } from '../utils';

const AddEmpDeduction = () => {
    const [airports, setAirports] = useState([]);
    const [user, setUser] = useState([]);
    const [bank, setBank] = useState([]);
    const [outflow, setOutFlow] = useState([]);
    const [place, setPlace] = useState([]);

    const [ded,setDed]=useState('');

    const [alldat, setAlldat] = useState({
        emp_id: '',
        deduction_type: '',
        amount: '',
        deduction_towards: '',
        deduction_cycle: '',
        f_date: '',
        t_date: '',
        particular: ''
    });

    // Fetch airport details
    useEffect(() => {
        axios.get('http://localhost:5000/airportsDetails')
            .then((response) => {
                setAirports(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Fetch user and bank details
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
                setBank(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get('http://localhost:5000/outflowlist')
            .then((response) => {
                setOutFlow(response.data.data);
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
    };

    // Get bank name by bank account ID
    const getBankNames = (id) => {
        const bankDetails = bank.find(b => b.id === Number(id));
        return bankDetails ? bankDetails.bank_name : '--';
    };

    // Get outflow name by outflow ID
    const outName = (id) => {
        const outFlowDetails = outflow.find(o => o.id === id);
        return outFlowDetails ? outFlowDetails.name : '--';
    };

    // Get place name by place ID
    const placeName = (id) => {
        const placeDetails = place.find((p) => p.id === id);
        return placeDetails ? placeDetails.name : '---';
    };

    const ensdata = (e) => {
        const { name, value } = e.target;
        setAlldat((prevData) => ({ ...prevData, [name]: value }));
    };

    const saveData = (e) => {
        e.preventDefault();

        

        axios.post('http://localhost:5000/add-deduction',alldat)
            .then((response) => {
                console.log(response.data);
                // You can display a success message here or redirect if needed
            })
            .catch((error) => {
                console.error('Error saving data:', error);
            });
    };

    const changeDeType=(e)=>{
        setDed(e.target.value);
        setAlldat((prevData) => ({ ...prevData, deduction_type: e.target.value }));

    }

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Employee Deductions Details </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Employee</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Add Deductions
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Add Deductions</h4>
                                    <form className="form-sample" onSubmit={saveData}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Select Employee</label>
                                                    <div className="col-sm-9">
                                                        <select className="form-select" name="emp_id" onChange={ensdata}>
                                                            <option value="">Select</option>
                                                            {user.map((item) => (
                                                                <option key={item.user_id} value={item.user_id}>
                                                                    {item.firstname} - {item.lastname}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Deduction Type</label>
                                                    <div className="col-sm-9">
                                                        <select className="form-select" name="deduction_type" onInput={changeDeType} onChange={ensdata} value={alldat.deduction_type}>
                                                            <option value="">Select</option>
                                                            <option value="O">One Time</option>
                                                            <option value="R">Recurring</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Amount</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" name="amount" onChange={ensdata} value={alldat.amount} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Deduction Towards</label>
                                                    <div className="col-sm-9">
                                                        <select className="form-select" name="deduction_towards" onChange={ensdata} value={alldat.deduction_towards}>
                                                            <option value="">Select</option>
                                                            <option value="E">EMI</option>
                                                            <option value="A">Advance</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {ded === 'O' && (
                                            <div className="col-md-4">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Deduction Cycle</label>
                                                    <div className="col-sm-9">
                                                        <select className="form-select" name="deduction_cycle" onChange={ensdata} value={alldat.deduction_cycle}>
                                                            <option value="">Select</option>
                                                            <option value="1">Jan</option>
                                                            <option value="2">Feb</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                              )}

                                           {ded === 'R' && (   
                                                 <>
                                            <div className="col-md-4">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">From Date</label>
                                                    <div className="col-sm-9">
                                                        <input type="date" className="form-control" name="f_date" onChange={ensdata} value={alldat.f_date} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">To Date</label>
                                                    <div className="col-sm-9">
                                                        <input type="date" className="form-control" name="t_date" onChange={ensdata} value={alldat.t_date} />
                                                    </div>
                                                </div>
                                            </div>
                                            </>
                                           )}
                                            <div className="col-md-4">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label">Particulars</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" name="particular" onChange={ensdata} value={alldat.particular} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-2">
                                                <div className="form-group row">
                                                    <label className="col-sm-3 col-form-label"></label>
                                                    <div className="col-sm-9">
                                                        <input type="submit" className="btn btn-success btn-sm" value="Save Deduction" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="d-sm-flex justify-content-center justify-content-sm-between">
                        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                            Copyright © 2023{" "}
                            <a href="https://www.bootstrapdash.com/" target="_blank" rel="noopener noreferrer">
                                BootstrapDash
                            </a>
                            . All rights reserved.
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AddEmpDeduction;

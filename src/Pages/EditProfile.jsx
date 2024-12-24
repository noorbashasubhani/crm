import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';

const EditProfile = () => {

    const [bank, setBank] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const user_id = user['user_id'];

    const [mess, setMess] = useState('');
    const [family, setFamily] = useState('');

    const [datains, setDatains] = useState({
        bank_name: '',
        branch_name: '',
        ac_number: '',
        ifce_code: ''
    });


   

    const [per,setPer]=useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/getBankdetails/${user_id}`).then((Response) => {
            setBank(Response.data.data);

            if (Response.data.data.length > 0) {
                const bankDetails = Response.data.data[0];

                setDatains({
                    bank_name: bankDetails.bankName || '',
                    branch_name: bankDetails.branchNam || '',
                    ac_number: bankDetails.accountNumber || '',
                    ifce_code: bankDetails.ifscCode || '',
                    row_id: bankDetails.bankDetail_id || ''
                });
            }
        }).catch((error) => {
            console.log(error);
        });

        axios.get(`http://localhost:5000/users/${user_id}`).then((Response) => {
           // setBank(Response.data.data);

            if (Response.data.data.length > 0) {
                const familyDetails = Response.data.data[0];

                setFamily(familyDetails);
            }
        }).catch((error) => {
            console.log(error);
        });


        axios.get(`http://localhost:5000/users/${user_id}`).then((Response) => {
           // setPer(Response.data.data);
            
            if (Response.data.data.length > 0) {
                const personalDetails = Response.data.data[0];
                setPer({
                    firstname: personalDetails.firstname || '',
                    lastname: personalDetails.lastname || '',
                    email: personalDetails.email || '',
                    contactNumber: personalDetails.contactNumber || '',
                    panNumber: personalDetails.panNumber || ''
                });
            }
        }).catch((error) => {
            console.log(error);
        });



    }, []);

    const changestatr = (e) => {
        const { name, value } = e.target;
        setDatains((preDetails) => ({ ...preDetails, [name]: value }));
    }

    const alldataPser = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/saveBank/${datains.row_id}`, datains).then((Response) => {
            setMess('Bank Details Updated Successfully..');
            const timer = setTimeout(() => {
                setMess('');  // Set message to null to hide it
            }, 2000);

            return () => clearTimeout(timer);
        }).catch(error => {
            setMess('Currently We Are Unable To Update Your Bank Details');
        });
    }

    const f_changestatr = (e) => {
        const { name, value } = e.target;
        setFamily((preFamily) => ({ ...preFamily, [name]: value }));
    }

    const alldataFamily = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/updateFamilyDetails/${user_id}`, family).then((response) => {
            setMess('Family Details Updated Successfully!');
            const timer = setTimeout(() => {
                setMess('');
            }, 2000);
            return () => clearTimeout(timer);
        }).catch((error) => {
            setMess('Currently We Are Unable To Update Your Family Details');
        });
    }

    const p_changestatr=(e)=>{
      const {name,value}=e.target;
      setPer((prePerson)=>({...prePerson,[name]:value}));
    }
    const alldataPeson=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/updatePersonalDetails/${user_id}`, per).then((response) => {
            setMess('Personal Details Updated Successfully!');
            const timer = setTimeout(() => {
                setMess('');
            }, 2000);
            return () => clearTimeout(timer);
        }).catch((error) => {
            setMess('Currently We Are Unable To Update Your Family Details');
        });
    }

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> User </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Profile</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Edit
                                </li>
                            </ol>
                        </nav>
                    </div>

                    {/* Bank Details Form */}
                    <div className="container my-5">
                        <form action="#" method="POST" onSubmit={alldataPser}>
                            <div className="card p-5 shadow">
                                <h5 className="mb-5">Bank Details</h5>
                                {mess && <span>{mess}</span>}
                                <div className="row">
                                    <div className="mb-3 col-sm-6">
                                        <label htmlFor="bank_name" className="form-label">Bank Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="bank_name"
                                            name="bank_name"
                                            placeholder="Enter Bank Name"
                                            onChange={changestatr}
                                            value={datains.bank_name}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-6">
                                        <label htmlFor="branch_name" className="form-label">Bank Branch Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="branch_name"
                                            name="branch_name"
                                            placeholder="Enter Bank Branch Name"
                                            onChange={changestatr}
                                            value={datains.branch_name}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-6">
                                        <label htmlFor="ifce_code" className="form-label">IFSC Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="ifce_code"
                                            name="ifce_code"
                                            placeholder="Enter IFSC Code"
                                            onChange={changestatr}
                                            value={datains.ifce_code}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-6">
                                        <label htmlFor="ac_number" className="form-label">A/C Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="ac_number"
                                            name="ac_number"
                                            placeholder="Enter A/C Name"
                                            onChange={changestatr}
                                            value={datains.ac_number}
                                        />
                                    </div>

                                    <div className="mb-3 text-center">
                                        <button type="submit" className="btn btn-primary">Save Bank Details</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Family Details Form */}
                    <div className="container my-5">
                        <form action="#" method="POST" onSubmit={alldataFamily}>
                            <div className="card p-5 shadow">
                                <h5 className="mb-5">Family Details</h5>
                                {mess && <span>{mess}</span>}
                                <div className="row">
                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="father_names" className="form-label">Father Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="fathername"
                                            name="fathername"
                                            placeholder="Enter Father Name"
                                            onChange={f_changestatr}
                                            value={family.fathername}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="mother_name" className="form-label">Mother Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="mother_name"
                                            name="mother_name"
                                            placeholder="Enter Mother Name"
                                            onChange={f_changestatr}
                                            value={family.mother_name}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="father_contact_no" className="form-label">Father Contact No</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="father_no"
                                            name="father_no"
                                            placeholder="Enter Father Contact No"
                                            onChange={f_changestatr}
                                            value={family.father_no}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="mother_contact_no" className="form-label">Mother Contact No</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="mother_no"
                                            name="mother_no"
                                            placeholder="Enter Mother Contact No"
                                            onChange={f_changestatr}
                                            value={family.mother_no}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="p_contact" className="form-label">Personal Contact No</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="personal_no"
                                            name="personal_no"
                                            placeholder="Enter Personal Contact No"
                                            onChange={f_changestatr}
                                            value={family.personal_no}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="in_hose_no" className="form-label">In House No</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="in_house_no"
                                            name="in_house_no"
                                            placeholder="Enter In House No"
                                            onChange={f_changestatr}
                                            value={family.in_house_no}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="caste" className="form-label">Caste</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="caste"
                                            name="caste"
                                            placeholder="Enter Caste"
                                            onChange={f_changestatr}
                                            value={family.caste}
                                        />
                                    </div>

                                    <div className="mb-3 text-center">
                                        <button type="submit" className="btn btn-primary">Save Family Details</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                   {/* Family Details Form */}
                   <div className="container my-5">
                        <form action="#" method="POST" onSubmit={alldataPeson}>
                            <div className="card p-5 shadow">
                                <h5 className="mb-5">Personal Details</h5>
                                {mess && <span>{mess}</span>}
                                <div className="row">
                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="father_names" className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstname"
                                            name="firstname"
                                            placeholder="Enter Father Name"
                                            onChange={p_changestatr}
                                            value={per.firstname}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="mother_name" className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastname"
                                            name="lastname"
                                            placeholder="Enter Mother Name"
                                            onChange={p_changestatr}
                                            value={per.lastname}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="father_contact_no" className="form-label">E-Mail</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Enter Father Contact No"
                                            onChange={p_changestatr}
                                            value={per.email}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="mother_contact_no" className="form-label">Office Mobile No</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contactNumber"
                                            name="contactNumber"
                                            placeholder="Enter Mother Contact No"
                                            onChange={p_changestatr}
                                            value={per.contactNumber}
                                        />
                                    </div>

                                    <div className="mb-3 col-sm-4">
                                        <label htmlFor="p_contact" className="form-label">PAN No</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="panNumber"
                                            name="panNumber"
                                            placeholder="Enter Personal Contact No"
                                            onChange={p_changestatr}
                                            value={per.panNumber}
                                        />
                                    </div>

                                   

                                    <div className="mb-3 text-center">
                                        <button type="submit" className="btn btn-primary">Save Personal Details</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>

                <footer className="footer">
                    <div className="d-sm-flex justify-content-center justify-content-sm-between">
                        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                            Copyright © 2023{" "}
                            <a href="https://www.bootstrapdash.com/" target="_blank">BootstrapDash</a>
                            . All rights reserved.
                        </span>
                        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                            Hand-crafted &amp; made with <i className="mdi mdi-heart text-danger" />
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default EditProfile;

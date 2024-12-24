import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';

const Payroll = () => {
    const [emp, setEmp] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [attendanceData, setAttendanceData] = useState({}); // Store attendance data per employee

    const [adv,setAdv]=useState([]);

    // Fetch employee details
    useEffect(() => {
        axios.get('http://localhost:5000/employeeDetails')
            .then((response) => {
                setEmp(response.data.data); // Assuming response.data is an array of employee objects
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                setError('Error fetching employee data');
                setLoading(false); // Set loading to false if error occurs
                console.log(error);
            });



            
    }, []);

    // Fetch attendance counts for each employee and store them
    useEffect(() => {
        if (emp.length > 0) {
            const fetchAttendanceData = async () => {
                try {
                    const attendancePromises = emp.map((employee) =>
                        axios.get(`http://localhost:5000/attendanceCunts/${employee.user_id}`)
                    );
                    const responses = await Promise.all(attendancePromises);
                    const newAttendanceData = {};

                    responses.forEach((response, index) => {
                        const employee = emp[index];
                        const total_sick_leave = response.data.data.total_sick_leave || 0;
                        const total_casual_leave = response.data.data.total_casual_leave || 0;
                        const total_extra_leave = response.data.data.total_extra_leave || 0;

                        // Calculate the sum of all leaves
                        const total_leaves = total_sick_leave + total_casual_leave + total_extra_leave;

                        newAttendanceData[employee.user_id] = {
                            total_sick_leave,
                            total_casual_leave,
                            total_extra_leave,
                            total_leaves, // Sum of all leave types
                        };
                    });

                    setAttendanceData(newAttendanceData);
                } catch (error) {
                    console.log('Error fetching attendance data', error);
                }
            };

            fetchAttendanceData();
        }
    }, [emp]); // Trigger attendance fetch when employee data is loaded


     useEffect(()=>{
        axios.get(`http://localhost:5000/getAdvance`)
        .then(response => {
        //console.log(response.data.data.amount);
        setAdv(response.data.data);
        })
        .catch(error => {
        console.log(error);
        });
     },[]);

    const getAdvance=(id)=>{
        const revedata=adv.find(a=>a.emp_id===id);
        return revedata?revedata.amount:'---';
           
            
        }





    return (
        <div className="container-fluid page-body-wrapper">
            <link rel="stylesheet" href="fley.css" />
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title">Payroll Details</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Payroll</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    List
                                </li>
                            </ol>
                        </nav>
                    </div>

                    {/* Table to display the payroll data */}
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body" style={{ overflowX: 'auto' }}>
                                    {/* Show error message if there's an error */}
                                    {error && <div className="alert alert-danger">{error}</div>}

                                    {/* Show loading message if data is still being fetched */}
                                    {loading && <div className="alert alert-info">Loading data...</div>}

                                    {/* Table with employee data */}
                                    <table className="table w-100" style={{ overflowX: 'auto' }}>
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Employee Name</th>
                                                <th>Working Days</th>
                                                <th>Paid Leave</th>
                                                <th>UnPaid Leave</th>
                                                <th>No of Days Worked</th>
                                                <th>Month</th>
                                                <th>Day</th>
                                                <th>Advance Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {emp.map((employee, index) => {
                                                const attendance = attendanceData[employee.user_id] || {};
                                                const totalWorkingDays = 30; // Assuming all employees have 30 working days
                                                const total_leaves = parseInt(attendance.total_sick_leave) + parseInt(attendance.total_casual_leave) + parseInt(attendance.total_extra_leave);
                                                const daysWorked = totalWorkingDays - total_leaves;
                                                const month_amount=employee.salary/12;
                                                const day_amount=month_amount/totalWorkingDays;
                                                const paid_leaves = parseInt(attendance.total_extra_leave);
                                                const deduction_amount=paid_leaves*day_amount;
                                                const advance= getAdvance(employee.user_id);
                                                const final_dexu=parseInt(deduction_amount)+parseInt(advance);
                                                return (
                                                    <tr key={employee.user_id}>
                                                        <td>{index + 1}</td>
                                                        <td className="text-left">
                                                            {employee.firstname}. {employee.lastname}
                                                        </td>
                                                        <td>{totalWorkingDays}</td> {/* Assuming all employees have 30 working days */}
                                                        <td>{attendance.total_casual_leave || '--'}</td>
                                                        <td>{attendance.total_extra_leave || '--'}</td>
                                                        
                                                        <td>{daysWorked}</td> 
                                                        <td>{Math.round(month_amount)}</td> 
                                                        <td>{Math.round(day_amount)}</td> 
                                                        <td>{getAdvance(employee.user_id)}</td> 
                                                        <td>{deduction_amount}</td>
                                                    </tr>
                                                );
                                            })}
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
                            <a
                                href="https://www.bootstrapdash.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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

export default Payroll;

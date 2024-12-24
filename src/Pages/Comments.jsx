import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType, humandateonly, mapHolidayType, yesOrno, sourceType } from '../utils';
import DataTable from 'react-data-table-component';
import { Tooltip } from 'react-tooltip';

const Comments = () => {
    const [airports, setAirports] = useState([]);
    const [user, setUser] = useState([]);
    const [bank, setBank] = useState([]);
    const [outflow, setOutFlow] = useState([]);
    const [place, setPlace] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [com, setCom] = useState([]);
  
    // Fetching data from APIs
    useEffect(() => {
        axios.get('http://localhost:5000/leadslist')
            .then((response) => {
                setAirports(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/users_all')
            .then((response) => {
                setUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get('http://localhost:5000/leads_comments')
            .then((response) => {
                setCom(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Handle the search term change
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter data based on search term
    const filteredAirports = airports.filter((item) => {
        if (!searchTerm) return true;
        return item.assigned_to === Number(searchTerm);
    });

    const getUserNameById = (id) => {
        const foundUser = user.find(u => u.user_id === id);
        return foundUser ? `${foundUser.firstname} ${foundUser.lastname}` : 'Unknown';
    };

    const placeName = (id) => {
        const placeDetails = place.find((p) => p.id === id);
        return placeDetails ? placeDetails.name : '---';
    };

    const getCommentsForLead = (leadId) => {
        // Filter the comments based on the lead_id
        const leadComments = com.filter(comment => comment.lead_id === leadId);
        return leadComments.length > 0 ? leadComments.map(comment => comment.comment_det).join(" / ") : "No Comments";
    };

    // DataTable columns
    const columns = [
        {
            name: "#",
            selector: (row, index) => index + 1,
            sortable: true
        },
        {
            name: "Created Date",
            selector: row => humandateonly(row.created_date),
            sortable: true
        },
        {
            name: "Source",
            selector: row => sourceType(row.lead_source) ? sourceType(row.lead_source) : 'Partners Lead',
            sortable: true
        },
        {
            name: "Partner Type",
            selector: row => getUserNameById(row.partner_id),
            sortable: true
        },
        {
            name: "Destination",
            selector: row => placeName(row.destination_id),
            sortable: true
        },
        {
            name: "Customer Name",
            selector: row => row.customer_name,
            sortable: true
        },
        {
            name: "Customer No",
            selector: row => row.customer_mobile,
            sortable: true
        },
        {
            name: "E-mail",
            selector: row => row.email_id,
            sortable: true
        },
        {
            name: "Holiday Type",
            selector: row => mapHolidayType(row.holiday_type),
            sortable: true
        },
        {
            name: "Executive Name",
            selector: row => getUserNameById(row.assigned_to),
            sortable: true
        },
        {
            name: "Comments",
            selector: row => row.comments,
            sortable: false,
            cell: (row) => (
                <>
                    <a 
                        data-tooltip-id={`tooltip-${row.lead_id}`} 
                        data-tooltip-content={getCommentsForLead(row.id)}
                        data-tooltip-place="left"  // Display comments dynamically
                    >
                        ◕‿‿◕
                    </a>
                    <Tooltip id={`tooltip-${row.lead_id}`} /> {/* Ensure tooltip id matches */}
                </>
            )
        }
    ];

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />

            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title">Leads Comments</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Leads</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Comments List
                                </li>
                            </ol>
                        </nav>
                    </div>

                    {/* Search Input */}
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <select 
                                        className="form-select" 
                                        name="executive_id" 
                                        onChange={handleSearch}
                                    >
                                        <option value="">--Select--</option>
                                        {user.map((items, index) => (
                                            <option key={index} value={items.user_id}>
                                                {items.firstname} - {items.lastname}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DataTable */}
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <DataTable
                                        columns={columns}
                                        data={filteredAirports}
                                        pagination
                                        selectableRows
                                        highlightOnHover
                                        fixedHeader
                                        fixedHeaderScrollHeight="400px"
                                        searchable
                                    />
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

export default Comments;

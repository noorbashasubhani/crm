import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';

const Productivity = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log('API URL:', apiUrl);  // Check if the value is correct in the console

    // Rest of your component code
    useEffect(() => {
        axios.get(`${apiUrl}/holidaysDetails`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />
            {/* Your JSX here */}
        </div>
    );
};

export default Productivity;

import React, { useState, useEffect } from 'react';
import Menu from './Pages/Menu';
import Sidebar from './Pages/Sidebar';
import axios from 'axios';


const LandingPage = () => {
   

    return (
        <div className="container-fluid page-body-wrapper">
            <Menu />
            <Sidebar />
           
        </div>
    );
};

export default LandingPage;

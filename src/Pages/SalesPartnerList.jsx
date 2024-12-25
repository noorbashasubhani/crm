import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import {yesOrno} from '../utils.js';

const SalesPartnerList = () => {
    const [loc, setLoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = process.env.REACT_APP_API_URL;

    // Fetch business locations
    useEffect(() => {
        axios.get(`${apiUrl}/getSalesPartnersList`)
            .then((response) => {
                setLoc(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch data");
                setLoading(false);
            });
    }, []);

    return (
        
            
            
                
                   
                    
                       
                           
                                <div>
                                    {loading && <p>Loading...</p>}
                                    {error && <p>{error}</p>}
                                    <table className="table w-100" style={{ overflowX: 'scroll', display: 'block' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Sales Partners Name</th>
                                                <th scope="col">No of Partners</th>
                                                <th scope="col" style={{minWidth:"100px;"}}>Lead Generators Names</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loc.map((items, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td style={{ minWidth: "250px" }}>{items.user_name}</td>
                                                    
                                                    <td style={{minWidth:"250px;"}}>{items.no_of_sub_users}</td>

                                                    <td style={{ 
                                                    width: "100px", 
                                                    wordWrap: "break-word", 
                                                    overflowWrap: "break-word", 
                                                    whiteSpace: "normal",
                                                    lineHeight:"20px" 
                                                    }}>
                                                    {items.sub_users}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                        
                        
                
            
                
        
        
    );
};

export default SalesPartnerList;

import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import {yesOrno} from '../utils.js';

const LeadsPartner = () => {
    const [loc, setLoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = process.env.REACT_APP_API_URL;

    // Fetch business locations
    useEffect(() => {
        axios.get(`${apiUrl}/getLeadPartnersList`)
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
                                                <th scope="col">Lead Generators Name</th>
                                                
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loc.map((items, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td style={{ minWidth: "250px" }}>{items.firstname}.{items.lastname}</td>
                                                    
                                                    
                                                   
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                        
                        
                
            
                
        
        
    );
};

export default LeadsPartner;

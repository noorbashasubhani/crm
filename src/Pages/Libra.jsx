import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';
import { transactionType,humandateonly,mapHolidayType } from '../utils';



const Libra = () => {
    const [lib, setLib] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null); // State to hold user details
    const [auser, setAUser] = useState([]); // State to hold user details
    const [sdata, setSdata] = useState({
        library_name: '',
        library: null
    });
    // Modal state
    const [showModal, setShowModal] = useState(false);

    // Retrieve user details from localStorage when the component mounts
    useEffect(() => {
        const storedUserDetails = localStorage.getItem('userdetails');
        if (storedUserDetails) {
            setUser(JSON.parse(storedUserDetails)); // Parse and store user details
        }
    }, []);


    useEffect(() => {
        axios.get('http://localhost:5000/users_all')
            .then((response) => {
                setAUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
  
    // Fetch image data from the server
    useEffect(() => {
        axios.get('http://localhost:5000/getlibrarieslist')
            .then((response) => {
                setLib(response.data.data); // Assuming response.data is an array of image objects
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                setError('Error fetching image data');
                setLoading(false); // Set loading to false if error occurs
                console.log(error);
            });
    }, []);

    // Handle the "Add Flyer" button click to show modal
    const handleAddFlyerClick = () => {
        setShowModal(true);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const evenenter = (e) => {
        const { name, value, files } = e.target;
        setSdata((preData) => ({
            ...preData,
            [name]: files ? files[0] : value,
        }));
    };

    // Get user name by user ID
    const getUserNameById = (id) => {
        const foundUser = auser.find(u => u.user_id === id);
        return foundUser ? `${foundUser.firstname} ${foundUser.lastname}` : 'Unknown';
    }

 

    const savealldetails = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('library_name', sdata.library_name);
       
        formData.append('library', sdata.library); // Image file
        
        formData.append('currentDate', new Date().toISOString()); // Current date for the record (if needed)
        formData.append('user_id', user.user_id); // User ID from localStorage
        formData.append('status', 'Y');
        axios
            .post('http://localhost:5000/saveLibdetails', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                // Handle the response data after the flyer is saved
                const newFlyer = response.data.data; // Assuming the response contains the newly created flyer
               
                axios.get('http://localhost:5000/getlibrarieslist')
            .then((response) => {
                setLib(response.data.data); // Assuming response.data is an array of image objects
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                setError('Error fetching image data');
                setLoading(false); // Set loading to false if error occurs
                console.log(error);
            });
                setShowModal(false);
                // Optionally, you can reset the form data here if needed
                setSdata({
                    title: '',
                    imageInput: null,
                    expiryDate: ''
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const remLibra=(id)=>{
     axios.delete(`http://localhost:5000/dellib/${id}`).then((response)=>{
        setLib((prevImages) => prevImages.filter((image) => image.id !== id));   
      }).catch((error)=>{
        console.log(error);
     });
    }


    const handleDownload = (filename) => {
        axios({
          url: `http://localhost:5000/download/${filename}`,
          method: 'GET',
          responseType: 'blob', // Important for file downloads
        })
          .then((response) => {
            // Create a link to trigger the download
            const fileURL = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = fileURL;
            link.setAttribute('download', filename); // Set file name
            document.body.appendChild(link);
            link.click();
          })
          .catch((error) => {
            console.log('Error downloading the file:', error);
          });
      };

    return (
        <div className="container-fluid page-body-wrapper">
            <link rel="stylesheet" href="fley.css" />
            <Menu />
            <Sidebar />
           
            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title">All Library Details</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Library</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                Library List
                                </li>
                            </ol>
                        </nav>
                        <button className="btn btn-sm btn-success mx-2" onClick={handleAddFlyerClick}>
                            + Add Library
                        </button>
                    </div>

                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    {/* Show error message if there's an error */}
                                    {error && <div className="alert alert-danger">{error}</div>}

                                    {/* Show loading message if data is still being fetched */}
                                    {loading && <div className="alert alert-info">Loading Data...</div>}

                                    {/* Show the image gallery if data is available */}
                                    <div className="gallery">
                                    <table className="table table-stripped">
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>Download</th>
                                                <th>Added By</th>
                                                <th>Created Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {lib.map((libs,index)=>(

                                           
                                            <tr>
                                             <td>{index+1}</td>
                                             <td className="text-left">{libs.library_name}</td>
                                             <td><button 
    className="btn btn-primary btn-sm"
    onClick={() => handleDownload(libs.library)} // Call the download handler
  >
    Download
  </button></td>
                                             <td>{getUserNameById(libs.added_by)}</td>
                                             <td>{humandateonly(libs.created_by)}</td>
                                             <td>
                                                <button onClick={()=>remLibra(libs.id)} className="btn btn-danger btn-sm">Remove</button>
                                             </td>
                                                 </tr>
                                             ))}
                                        </tbody>
                                    </table>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="modal show" style={{ display: 'block', zIndex: 1050 }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Library</h5>
                                    <button type="button" className="close" onClick={handleCloseModal}>
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={savealldetails}>
                                        <div className="form-group">
                                            <label htmlFor="flyerTitle">Library Name</label>
                                            <input
                                                type="text"
                                                id="title"
                                                className="form-control"
                                                name="library_name"
                                                value={sdata.library_name} // Bind value to form state
                                                onChange={evenenter}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="flyerImage">Upload Library</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="imageInput"
                                                onChange={evenenter}
                                                name="library"
                                                required
                                            />
                                        </div>
                                       
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                                Close
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Add Library 
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

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

export default Libra;

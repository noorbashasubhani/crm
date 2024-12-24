import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Sidebar from './Sidebar';
import axios from 'axios';

const Flyers = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null); // State to hold user details
    const [sdata, setSdata] = useState({
        title: '',
        imageInput: null,
        expiryDate: ''
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
  
    // Fetch image data from the server
    useEffect(() => {
        axios.get('http://localhost:5000/flyerdetails')
            .then((response) => {
                setImages(response.data.data); // Assuming response.data is an array of image objects
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

    const savealldetails = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', sdata.title);
        formData.append('expiryDate', sdata.expiryDate);
        formData.append('imageInput', sdata.imageInput); // Image file
        formData.append('user_id', user.user_id); // User ID from localStorage
        formData.append('currentDate', new Date().toISOString()); // Current date for the record (if needed)

        axios
            .post('http://localhost:5000/savefly', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                // Handle the response data after the flyer is saved
                const newFlyer = response.data.data; // Assuming the response contains the newly created flyer
               
                setImages(response.data.data);
                axios.get('http://localhost:5000/flyerdetails')
            .then((response) => {
                setImages(response.data.data); // Assuming response.data is an array of image objects
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

    const remFly=(id)=>{
     axios.delete(`http://localhost:5000/delfly/${id}`).then((response)=>{
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));   
      }).catch((error)=>{
        console.log(error);
     });
    }

    return (
        <div className="container-fluid page-body-wrapper">
            <link rel="stylesheet" href="fley.css" />
            <Menu />
            <Sidebar />
           
            <div className="main-panel mt-0">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title">All Flyers Details</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Marketing</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Flyers List
                                </li>
                            </ol>
                        </nav>
                        <button className="btn btn-sm btn-success mx-2" onClick={handleAddFlyerClick}>
                            + Add Flyer
                        </button>
                    </div>

                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    {/* Show error message if there's an error */}
                                    {error && <div className="alert alert-danger">{error}</div>}

                                    {/* Show loading message if data is still being fetched */}
                                    {loading && <div className="alert alert-info">Loading images...</div>}

                                    {/* Show the image gallery if data is available */}
                                    <div className="gallery">
                                        {images.length === 0 ? (
                                            <p>No images available</p>
                                        ) : (
                                            <div className="grid-container">
                                                {images.map((image, index) => (
                                                    <div>
                                                        
                                                        
                                                        <span class="my-5" >{image.title}</span>
                                                    <div key={index} className="gallery-item">
                                                        
                                                        <img
                                                            src={`http://localhost:5000/uploadsfly/${image.documnets}`} // Update with the correct property
                                                            alt={`Flyer ${index + 1}`}
                                                            className="gallery-img"
                                                        />
                                                        
                                                    </div>
                                    <div className="mt-2"><button className="btn btn-danger btn-sm" onClick={()=>remFly(image.id)}>Remove</button></div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
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
                                    <h5 className="modal-title">Add Flyer</h5>
                                    <button type="button" className="close" onClick={handleCloseModal}>
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={savealldetails}>
                                        <div className="form-group">
                                            <label htmlFor="flyerTitle">Title</label>
                                            <input
                                                type="text"
                                                id="title"
                                                className="form-control"
                                                name="title"
                                                value={sdata.title} // Bind value to form state
                                                onChange={evenenter}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="flyerImage">Flyer Image</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="imageInput"
                                                onChange={evenenter}
                                                name="imageInput"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="flyerDescription">Expiry Date</label>
                                            <input
                                                type="date"
                                                name="expiryDate"
                                                className="form-control"
                                                value={sdata.expiryDate} // Bind value to form state
                                                onChange={evenenter}
                                                id="expiryDate"
                                                required
                                            />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                                Close
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Save Flyer
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

export default Flyers;

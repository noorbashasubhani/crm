require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const { stringify } = require('querystring');
const nodemailer = require('nodemailer');


// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON requests

app.use('/uploadsfly', express.static(path.join(__dirname, 'uploadsfly')));
app.use('/uploadslib', express.static(path.join(__dirname, 'uploadslib')));



const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // Explicitly set Gmail SMTP server
  port: 587,               // TLS port (587) or SSL (465)
  secure: false,           // Use TLS, not SSL
  auth: {
    user: 'supportds@Gogagaholidays.com',
    pass: 'hwxvmyogaqdaqzik', // App Password
  },
  tls: {
    rejectUnauthorized: false,  // Ignore SSL certificate issues (useful in some environments)
  },
});



// Endpoint to send email
app.post('/send-email', (req, res) => {
  const { recipient, subject, message } = req.body;

  // Email options
  const mailOptions = {
    from: 'supportds@Gogagaholidays.com',
    to: recipient,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred:', error.message);  // More detailed error message
      return res.status(500).json({
        success: false,
        message: 'Failed to send email',
        error: error.message,  // Send the error message to the client
      });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  });
});

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',  // Replace with your MySQL host
  user: 'root',       // Replace with your MySQL username
  password: '',       // Replace with your MySQL password
  database: 'localcrm'  // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to MySQL');
});



// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploadsfly/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });



const storagelib = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploadslib/'); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
  }
});


const uploadlib = multer({ storage: storagelib });
// Corrected query call in the /leadslist route
app.get('/leadslist', (req, res) => {
  const sql = "SELECT * FROM tt_leads_new ORDER BY id DESC limit 1000";
  // Correct method name is query, not qeury
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});





app.get('/ledgerlist', (req, res) => {
    const sql = "SELECT * FROM tt_ledges ORDER BY id DESC";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });

app.get('/users/:id', (req, res) => {
    const id=req.params.id;
    const sql = "SELECT * FROM user where user_id=? ORDER BY user_id DESC";
    // Correct method name is query, not qeury
    db.query(sql,[id], (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });

  app.get('/users_all', (req, res) => {
    const id=req.params.id;
    const sql = "SELECT * FROM user ORDER BY user_id DESC";
    // Correct method name is query, not qeury
    db.query(sql,[id], (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });


  app.get('/banklist', (req, res) => {
    
    const sql = "SELECT * FROM tt_master_bank";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });

  
  app.get('/banklistemp/:id', (req, res) => {
    const id=req.params.id;
    const sql = "SELECT * FROM bankdetails where user_id=?";
    // Correct method name is query, not qeury
    db.query(sql,[id], (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });



  app.get('/workdetails/:id', (req, res) => {
    const id=req.params.id;
    const sql = "SELECT * FROM tt_pre_emp_details where employee_id=?";
    // Correct method name is query, not qeury
    db.query(sql,[id], (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });


  app.get('/outflowlist', (req, res) => {
    
    const sql = "SELECT * FROM tt_outflows";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });


  app.get('/leadsdetails', (req, res) => {
    
    const sql = "SELECT * FROM tt_leads_doc group by ghrn_no";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });

  app.get('/customersupportcommpleted', (req, res) => {
    // Fixed the typo in the SQL query and the method name in the comment
    const sql = "SELECT * FROM tt_leads_doc WHERE packate_status='C' AND trip_start_date < CURRENT_DATE";
  
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });


  app.get('/customersupportnotcom', (req, res) => {
    // Fixed the typo in the SQL query and the method name in the comment
    const sql = "SELECT * FROM tt_leads_doc WHERE packate_status='C' AND trip_start_date > CURRENT_DATE";
  
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });
  


  app.get('/destinationDetails', (req, res) => {
    
    const sql = "SELECT * FROM tt_best_placess order by id desc";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });


  app.get('/airportsDetails', (req, res) => {
    
    const sql = "SELECT * FROM tt_airports order by id desc";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });


  app.get('/cabsDetails', (req, res) => {
    
    const sql = "SELECT * FROM tt_cab_details order by id desc";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });


  
  app.get('/hotelsDetails', (req, res) => {
    const sql = "SELECT * FROM tt_hotel_details order by id desc";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });


  app.get('/teamDetails', (req, res) => {
    const sql = "SELECT * FROM tt_dept_head order by id desc";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });


  app.get('/departmentDetails', (req, res) => {
    const sql = "SELECT * FROM department order by department_id desc";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });

  
  app.get('/designationDetails', (req, res) => {
    const sql = "SELECT * FROM designation order by designation_id desc";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });


  app.get('/holidaysDetails', (req, res) => {
    const sql = "SELECT * FROM tt_holidays order by id desc";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });



  app.get('/exclusiveAndInclusiveDetails', (req, res) => {
    const sql = "SELECT * FROM tt_exclisives_table order by id desc";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });

  app.get('/statelist', (req, res) => {
    const sql = "SELECT * FROM states order by state desc";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });

  app.post('/savedata', (req, res) => {
    // Extract data from the request body
    const { customer_name, customer_mobile, holidayType, customer_desc, partner_name, customer_email } = req.body;
  
    // SQL query with placeholders for parameterized values
    const sql = `INSERT INTO tt_leads_new(customer_name, customer_mobile, holiday_type, customer_desc, created_date, status, partner_id, package_type, email_id)VALUES (?, ?, ?, ?, NOW(), 'S', ?, 'I', ?)`;
  
    // Values to insert into the database (the array of values for the placeholders)
    const values = [
      customer_name, 
      customer_mobile, 
      holidayType, 
      customer_desc, 
      partner_name, 
      customer_email
    ];
  
    // Execute the query using parameterized input
    db.query(sql, values, (err, result) => {
      if (err) {
        // Handle error (respond with status 500)
        res.status(500).json({
          message: 'Data not Inserted',
          error: err
        });
      } else {
        // Success response (status 200)
        res.status(200).json({
          message: 'Data inserted successfully',
          data: result
        });
      }
    });
  });
  

 


  app.get('/dashboard', (req, res) => {
    const { month, year } = req.query;
  
    // Validate month and year
    if (!month || !year) {
      return res.status(400).json({
        message: 'Month and year are required',
      });
    }
  
    // SQL query to count leads based on package status
    const sql = `
      SELECT 
        NVL(COUNT(DISTINCT CASE WHEN packate_status IN ('C', 'L') THEN lead_id END), 0) AS total_publish_L_or_C,
        NVL(COUNT(DISTINCT CASE WHEN packate_status = 'C' THEN lead_id END), 0) AS total_publish_C,
        NVL(COUNT(DISTINCT CASE WHEN packate_status IN ('C', 'L') THEN lead_id END), 0) AS total_iond_L_or_C,
        NVL(COUNT(DISTINCT CASE WHEN packate_status = 'C' THEN lead_id END), 0) AS total_publish_Cd
      FROM tt_leads_doc
      WHERE MONTH(published_date) = ? AND YEAR(published_date) = ?;
    `;
  
    // Perform the database query
    db.query(sql, [month, year], (err, result) => {
      if (err) {
        console.error('Error fetching data:', err); // Log the error for debugging purposes
        return res.status(500).json({
          message: 'Data not fetched',
          error: err,
        });
      }
  
      // Check if data is found
      if (result.length === 0) {
        return res.status(404).json({
          message: 'No data found for the specified month and year',
        });
      }
  
      // Return the result
      res.status(200).json({
        message: 'Success',
        data: result,
      });
    });
  });
  


  

// Register Route
app.post('/registerdata', (req, res) => {
  const { email, react_password } = req.body;



  // Hash the password using bcrypt
  bcrypt.hash(react_password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ error: 'Error hashing password' });
    }

    // Insert data into MySQL
    const query = 'INSERT INTO user (email, react_password) VALUES (?, ?)';
    db.query(query, [email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Failed to register user' });
      }
      res.status(200).json({ message: 'Registration successful!' });
    });
  });
});
  

// Login endpoint
app.post('/logintest', (req, res) => {
  

  const email = req.body.email;
  const password = req.body.react_password; // Assuming you're getting the password field from frontend
  
  if (email && password) {
      // Query to get the user's data from the database using the email
      db.query('SELECT * FROM user WHERE email = ?', [email], (error, results, fields) => {
          if (error) {
              res.status(500).send('Database error');
              return;
          }
  
          if (results.length > 0) {
              const storedHash = results[0].r_password; // Assuming 'r_password' is the column storing the hashed password
  
              // Compare the entered password with the stored hashed password
              const bcryptPassword = bcrypt.compareSync(password, storedHash);
  
              if (bcryptPassword) {
                  // If password matches, login successful
                  res.status(200).json({
                    message: 'Data inserted successfully',
                    data: results
                  });
              } else {
                  // If password does not match
                  res.status(500).json({
                    message: 'Invali User Name Or Password',
                    error: results
                  });
              }
          } else {
              // No user found with the provided email
              res.send('Incorrect Email and/or Password!');
          }
  
          res.end();
      });
  } else {
      // If email or password is missing
      res.send('Please enter Email and Password!');
      res.end();
  }
 


});


app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.react_password; // Assuming you're getting the password field from frontend
  
  if (email && password) {
      // Query to get the user's data from the database using the email
      db.query('SELECT * FROM user WHERE email = ?', [email], (error, results, fields) => {
          if (error) {
              // Database error
              console.error(error);  // Log the error for debugging
              return res.status(500).json({ message: 'Database error' });
          }

          if (results.length > 0) {
              const storedHash = results[0].r_password; // Assuming 'r_password' is the column storing the hashed password
  
              // Compare the entered password with the stored hashed password
              const bcryptPassword = bcrypt.compareSync(password, storedHash);
  
              if (bcryptPassword) {
                  // If password matches, login successful
                  res.status(200).json({
                      message: 'Login successful',
                      data: results[0], // You can return only the necessary user data here
                  });
              } else {
                  // If password does not match
                  res.status(400).json({
                      message: 'Invalid Username or Password'
                  });
              }
          } else {
              // No user found with the provided email
              res.status(400).json({
                  message: 'Incorrect Email and/or Password!'
              });
          }
      });
  } else {
      // If email or password is missing
      res.status(400).json({
          message: 'Please enter Email and Password!'
      });
  }
});





app.post('/change-password/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const { oldPassword, newPassword } = req.body;

  // Find the user in the database
  db.query('SELECT * FROM user WHERE user_id = ?', [user_id], (err, results) => {
      if (err) {
          return res.status(500).json({ message: 'Database query error' });
      }

      if (results.length === 0) {
          return res.status(404).json({ message: 'User not found' });
      }

      const user = results[0];

      // Check if the old password matches the one stored in the database
      bcrypt.compare(oldPassword, user.r_password, (err, isMatch) => {
          if (err) {
              return res.status(500).json({ message: 'Error comparing passwords' });
          }

          if (!isMatch) {
              return res.status(400).json({ message: 'Old password is incorrect' });
          }

          // Hash the new password
          bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
              if (err) {
                  return res.status(500).json({ message: 'Error hashing the password' });
              }

              // Update the password in the database
              db.query('UPDATE user SET r_password = ? WHERE user_id = ?', [hashedPassword, user_id], (err, result) => {
                  if (err) {
                      return res.status(500).json({ message: 'Error updating password' });
                  }

                  return res.status(200).json({ message: 'Password changed successfully!' });
              });
          });
      });
  });
});
  
  app.get('/flyerdetails', (req, res) => {
    const sql = "SELECT * FROM tt_flyer order by id desc";
    // Correct method name is query, not qeury
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({
          message: 'Data not fetched',
          error: err
        });
      } else {
        res.status(200).json({
          message: 'Success',
          data: result
        });
      }
    });
  });





  // POST route to insert data into MySQL
app.post('/savefly', upload.single('imageInput'), (req, res) => {
  console.log(req.body);
  const { title, expiryDate, user_id, currentDate } = req.body;
  const imagePath = req.file ? req.file.filename : ''; // If an image is uploaded, get the filename

  const query = `INSERT INTO tt_flyer (title, documnets, upload_date,created_by,created_date) VALUES (?, ?, ?,?,?)`;
  db.query(query, [title, imagePath, expiryDate, user_id, currentDate], (err, result) => {
    if (err) {
      //console.log('Error inserting data:', err);
      res.status(500).json({
        message:'data not insert',
        error: err
      });
    } else {
      res.status(500).json({
        message:'data not insert',
        data: result.data
      });
    }
  });
});
app.use('/uploadsfly', express.static('uploads'));





 // POST route to insert data into MySQL
 app.post('/saveLibdetails', uploadlib.single('library'), (req, res) => {
  const { library_name, currentDate, user_id } = req.body;
  const imagePath = req.file ? req.file.filename : ''; // If an image is uploaded, get the filename

  const query = `INSERT INTO tt_libraries (library_name, library, created_by, added_by, status) 
                 VALUES (?, ?, ?, ?, ?)`;

  db.query(query, [library_name, imagePath, currentDate, user_id, 'Y'], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not inserted',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Data inserted successfully',
        data: result // Corrected from result.data to result
      });
    }
  });
});

// Make uploaded files publicly accessible
app.use('/uploadslib', express.static('uploadslib'));



// DELETE route to remove flyer by ID
app.delete('/delfly/:id', (req, res) => {
  const flyerId = req.params.id;

  // SQL query to delete a flyer by ID
  const deleteQuery = 'DELETE FROM tt_flyer WHERE id = ?';

  db.query(deleteQuery, [flyerId], (err, result) => {
      if (err) {
          console.error('Error deleting flyer:', err);
          return res.status(500).json({ error: 'Failed to delete flyer' });
      }

      if (result.affectedRows > 0) {
          return res.status(200).json({ message: 'Flyer deleted successfully' });
      } else {
          return res.status(404).json({ error: 'Flyer not found' });
      }
  });
});




// DELETE route to remove flyer by ID
app.delete('/dellib/:id', (req, res) => {
  const flyerId = req.params.id;

  // SQL query to delete a flyer by ID
  const deleteQuery = 'DELETE FROM tt_libraries WHERE id = ?';

  db.query(deleteQuery, [flyerId], (err, result) => {
      if (err) {
          console.error('Error deleting flyer:', err);
          return res.status(500).json({ error: 'Failed to delete flyer' });
      }

      if (result.affectedRows > 0) {
          return res.status(200).json({ message: 'Flyer deleted successfully' });
      } else {
          return res.status(404).json({ error: 'Flyer not found' });
      }
  });
});



app.get('/getlibrarieslist', (req, res) => {
  const sql = "SELECT * FROM tt_libraries order by id desc";
  // Correct method name is query, not qeury
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});


app.get('/download/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'uploadslib', filename);
  
  res.download(filePath, (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});



app.get('/getEsclDetails', (req, res) => {
  const sql = "SELECT * FROM tt_escalation order by id desc";
  // Correct method name is query, not qeury
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});

app.get('/empDeduction', (req, res) => {
  const sql = "SELECT * FROM tt_emp_deductions order by id desc";
  // Correct method name is query, not qeury
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});

app.get('/taxreceipt_list', (req, res) => {
  const sql = "SELECT * FROM tt_gst_invoice order by id desc";
  // Correct method name is query, not qeury
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});



app.get('/leave_mst_details', (req, res) => {
  const sql = "SELECT * FROM leave_mst order by id desc";
  // Correct method name is query, not qeury
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});


app.post('/add-deduction',(req,res)=>{
 
  const currdate = new Date().toISOString().split('T')[0];
  const { emp_id, deduction_type, amount, deduction_towards, deduction_cycle, f_date, t_date, particular } = req.body;
  const sql="insert into tt_emp_deductions(	emp_id,deduction_type,amount,deduction_cycle,f_date,t_date,deductions_towards,particulars,created_date,added_by  ) VALUES(?,?,?,?,?,?,?,?,?,?)";
  db.query(sql, [emp_id,deduction_type,amount,deduction_cycle,f_date,t_date,deduction_towards,particular,currdate,21] ,(err,result)=>{
    if(err){
       res.status(500).json({
         message:'Data NO INSERTE',
         error:err
       });
    }else{
      res.status(200).json({
        message:'Data INSERTE',
        data:result
      });
    }
  });
});

app.get('/rec_list', (req, res) => {
  const sql = "SELECT * FROM recoveries_table order by id desc";
  // Correct method name is query, not qeury
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});



app.post('/add-recovery',(req,res)=>{
 
  
  const { title, serviceType, totalAmount, paidAmount, pendingAmount} = req.body;
  const sql="insert into recoveries_table(	title,type_of_service,total_amount,paid_amount,pending_amount,added_by) VALUES(?,?,?,?,?,?)";
  db.query(sql, [title,serviceType,totalAmount,paidAmount,pendingAmount,21] ,(err,result)=>{
    if(err){
       res.status(500).json({
         message:'Data NO INSERTE',
         error:err
       });
    }else{
      res.status(200).json({
        message:'Data INSERTE',
        data:result
      });
    }
  });
});

app.put('/saveBank/:row_id',(req,res)=>{
  const { bank_name, branch_name, ac_number, ifce_code } = req.body; 
  const id=req.params.row_id;
  const sql="update bankdetails set bankName=?, branchNam=?,accountNumber=?,ifscCode=? where bankDetail_id=?";
  db.query(sql,[bank_name, branch_name, ac_number, ifce_code, id],(err,result)=>{
    if(err){
      res.status(500).json({
        message:'Data NO Fetch',
        error:err
      });
    }else{
      res.status(200).json({
        message:'Data fecht',
        data:result
      });
    }
  });
});

app.get('/getBankdetails/:row_id',(req,res)=>{
   const rowid=req.params.row_id;
   const sql="select * from bankdetails where user_id=?";
   db.query(sql,[rowid],(err,result)=>{
      if(err){
        res.status(500).json({
          message:'Data NO Fetch',
          error:err
        });
      }else{
        res.status(200).json({
          message:'Data fecht',
          data:result
        });
      }
   });
});



app.get('/getDesignation/:id',(req,res)=>{
  const rowid=req.params.id;
  const sql="select * from designation where designation_id=?";
  db.query(sql,[rowid],(err,result)=>{
     if(err){
       res.status(500).json({
         message:'Data NO Fetch',
         error:err
       });
     }else{
       res.status(200).json({
         message:'Data fecht',
         data:result
       });
     }
  });
});


app.put('/updateFamilyDetails/:user_id',(req,res)=>{
  const { fathername, mother_name, father_no, mother_no,personal_no,in_house_no,caste} = req.body; 
  const id=req.params.user_id;
  const sql="update user set fathername=?, mother_name=?,father_no=?,mother_no=?,personal_no=?,in_house_no=?,caste=? where user_id=?";
  db.query(sql,[fathername, mother_name, father_no, mother_no,personal_no,in_house_no,caste, id],(err,result)=>{
    if(err){
      res.status(500).json({
        message:'Not UPdatedd',
        error:err
      });
    }else{
      res.status(200).json({
        message:'Data Updated successfully....',
        data:result
      });
    }
  });
});

app.put('/updatePersonalDetails/:user_id',(req,res)=>{
  const { firstname, lastname, email, contactNumber,pan_card} = req.body; 
  const id=req.params.user_id;
  const sql="update user set firstname=?, lastname=?,email=?,contactNumber=?,pan_card=? where user_id=?";
  db.query(sql,[firstname, lastname, email, contactNumber,pan_card, id],(err,result)=>{
    if(err){
      res.status(500).json({
        message:'Not UPdatedd',
        error:err
      });
    }else{
      res.status(200).json({
        message:'Data Updated successfully....',
        data:result
      });
    }
  });
});



app.get('/leave_mst_details_id/:row_id', (req, res) => {
  const row_id=req.params.row_id;
  const sql = "SELECT * FROM leave_mst where id=? order by id desc";
  // Correct method name is query, not qeury
  db.query(sql,[row_id], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    }else{
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});


app.get('/leave_mst_leavetotal/:row_id', (req, res) => {
  const row_id=req.params.row_id;
  const sql = "SELECT sum(no_of_sick) as total_sick_leave,sum(no_of_casual) as total_casual_leave,sum(no_of_extra) as total_extra_leave FROM leave_mst where id=? order by id desc";
  // Correct method name is query, not qeury
  db.query(sql,[row_id], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    }else{
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});



app.get('/performanceDetails/:row_id', (req, res) => {
  const row_id=req.params.row_id;
  const sql = "SELECT * FROM tt_performance_table where emp_id=? order by id desc";
  // Correct method name is query, not qeury
  db.query(sql,[row_id], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    }else{
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});


app.get('/salaryAdvance/:row_id', (req, res) => {
  const row_id=req.params.row_id;
  const sql = "SELECT * FROM tt_salarty_adv  order by id desc";
  // Correct method name is query, not qeury
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    }else{
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});



app.get('/notificationDetails', (req, res) => {
  const sql = "SELECT * FROM notifications_mst  order by id desc";
  // Correct method name is query, not qeury
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    }else{
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});

app.get('/employeeDetails', (req, res) => {
  const sql = "SELECT * FROM user where status='Y' AND user_type='E'  order by user_id ASC";
  // Correct method name is query, not qeury
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    }else{
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});



app.get('/getAdvance', (req, res) => {
  const user_id=req.params.user_id;
  const sql = "SELECT * FROM tt_salarty_adv where  Month(date)='11' group by emp_id order by id ASC";
  // Correct method name is query, not qeury
  db.query(sql,[user_id], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    }else{
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});


app.get('/attendanceCunts/:row_id', (req, res) => {
  const row_id = req.params.row_id;  // Get emp_id from the URL parameter

  // SQL query to fetch total sick leave, casual leave, and extra leave for a given employee in November 2024
  const sql = `
    SELECT 
  emp_id,
  SUM(CASE WHEN attendance = 'S' THEN 1 ELSE 0 END) AS total_sick_leave,
  SUM(CASE WHEN attendance = 'C' THEN 1 ELSE 0 END) AS total_casual_leave,
  SUM(CASE WHEN attendance = 'E' THEN 1 ELSE 0 END) AS total_extra_leave
FROM attendance_mst 
WHERE MONTH(att_date) = 11 
  AND YEAR(att_date) = 2024
  AND emp_id=?
GROUP BY emp_id;
  `;
  
  // Execute query with row_id parameter
  db.query(sql, [row_id], (err, result) => {
    if (err) {
      console.error('Error fetching attendance data:', err); // Log the error for debugging
      return res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    }

    // If no data found (result is empty), return a 404
    if (result.length === 0) {
      return res.status(404).json({
        message: 'No attendance data found for the given employee and date range'
      });
    }

    // Return the fetched data
    res.status(200).json({
      message: 'Success',
      data: result[0]  // Assuming the result is an array of 1 object, we use result[0]
    });
  });
});



app.get('/leads_comments', (req, res) => {
  const sql = "SELECT * FROM comment_details ORDER BY id DESC";
  // Correct method name is query, not qeury
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});



app.get('/getsalesDate', (req, res) => {
    
  const part_id=req.params.part_id;
  
  const sql = "SELECT u.operation_district,u.partner_type,u.firstname, u.lastname, IFNULL(SUM(t.after_emi), 0) AS total_cases_amount, MAX(t.partner_pay_date) AS recent_month, IFNULL(( SELECT SUM(t1.after_emi) FROM tt_leads_doc t1 WHERE (u.user_id = t1.super_partner OR u.user_id = t1.sales_partner OR u.user_id = t1.lead_generator) AND t1.partner_pay_status = 'A' AND DATE_FORMAT(t1.partner_pay_date, '%Y-%m') = DATE_FORMAT(MAX(t.partner_pay_date), '%Y-%m') ), 0) AS latest_month_after_emi FROM user u JOIN tt_leads_doc t ON (u.user_id = t.super_partner OR u.user_id = t.sales_partner OR u.user_id = t.lead_generator) WHERE t.partner_pay_status = 'A' GROUP BY u.user_id, u.firstname, u.lastname ";

  // Correct method name is query, not qeury
  db.query(sql,[part_id], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});


app.get('/recentebussiness/:part_id/:type', (req, res) => {
    
  const part_id=req.params.part_id;
  const type=req.params.type;
  
  let sql = "";

  // Constructing the SQL query based on partner type
  if (type === 'S') {
    sql = "select nvl(SUM(after_emi),0) as total_cases_amount1 from tt_leads_doc WHERE  super_partner=? AND partner_pay_status='A'";
  } else if (type === 'P') {
    sql = "select nvl(SUM(after_emi),0) as total_cases_amount1 from tt_leads_doc WHERE sales_partner=? AND partner_pay_status='A'";
   } else if (type === 'L') {
    sql = "select nvl(SUM(after_emi),0) as total_cases_amount1 from tt_leads_doc WHERE lead_generator=? AND partner_pay_status='A'";
  } else {
    sql = "select nvl(SUM(after_emi),0) as total_cases_amount1 from tt_leads_doc WHERE super_partner=? AND partner_pay_status='A'";
  }
  // Correct method name is query, not qeury
  db.query(sql,[part_id], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});


app.get('/getProductDetials/:m/:y', (req, res) => {
    
  const month=req.params.m;
  const year=req.params.y;
  
  const sql = "select * from tt_leads_doc where packate_status='C' AND YEAR(confirm_date) =? AND MONTH(confirm_date)=? order by confirm_date desc ";

  // Correct method name is query, not qeury
  db.query(sql,[year,month], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});




app.get('/creditsnoteslist/:type', (req, res) => {
  const type=req.params.type;
  const sql = "SELECT * FROM tt_credits where credit_type=? ORDER BY id DESC";
  // Correct method name is query, not qeury
  db.query(sql,[type], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});



app.get('/vochersdetails/:type', (req, res) => {
  const type=req.params.type;
  const sql = `
        SELECT * FROM tt_leads_doc 
        WHERE voucher_permission_status = 'A' 
        AND packate_status = 'C' 
        AND travel_type = ?
        ORDER BY trip_end_date DESC
`;
    
    const currentDate = new Date().toISOString().split('T')[0];
  db.query(sql,[type], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});

app.get('/creditsnoteIdget/:id', (req, res) => {
  const id=req.params.id;
  const sql = "SELECT * FROM tt_credits where id=? ORDER BY id DESC";
  // Correct method name is query, not qeury
  db.query(sql,[id], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});

app.get('/giftdetails', (req, res) => {
  const type=req.params.type;
  const sql = "SELECT * FROM tt_leads_new where gigt_vocher='Y' ORDER BY id DESC";
  // Correct method name is query, not qeury
  db.query(sql,[type], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});


app.get('/qualiticheck', (req, res) => {
  const type=req.params.type;
  const sql = "SELECT * FROM tt_leads_doc where packate_status='P' OR packate_status='Q' order by id desc";
  // Correct method name is query, not qeury
  db.query(sql,[type], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});

app.get('/pendingApprovals', (req, res) => {
  const type=req.params.type;
  const sql = "SELECT * FROM tt_leads_doc where supper_approve ='N' OR sales_approve ='N' OR ledgen_approve ='N'";
  // Correct method name is query, not qeury
  db.query(sql,[type], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Data not fetched',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Success',
        data: result
      });
    }
  });
});
// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

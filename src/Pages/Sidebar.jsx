import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'



const Sidebar = () => {

  const [user, setUser] = useState(null); // State to hold user details
  const [desg,setDesg]=useState([]);

  // Retrieve user details from localStorage when the component mounts
  useEffect(() => {
    const storedUserDetails = localStorage.getItem('userdetails');
    if (storedUserDetails) {
      setUser(JSON.parse(storedUserDetails)); // Parse and store user details
    }
  }, []);

   // Fetch ledger list
   useEffect(() => {
    axios.get('http://localhost:5000/designationDetails')
        .then((response) => {
            setDesg(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);



  const destination_names=(id)=>{
    const deptdetails=desg.find((d)=>d.designation_id===id);
    return deptdetails ? deptdetails.designation:'---'
}
if (!user) {
  return null; // Or you can return a loading spinner/message
}

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <ul className="nav">
      <li className="nav-item nav-profile">
        <a href="#" className="nav-link">
          <div className="nav-profile-image">
          <img src={`${process.env.PUBLIC_URL}/dist/assets/images/faces/face1.jpg`} alt="User Face" />

            <span className="login-status online" />
            {/*change to offline or busy as needed*/}
          </div>
          <div className="nav-profile-text d-flex flex-column">
            <span className="font-weight-bold mb-2">{ user.firstname ? user.firstname.charAt(0): ''}.{user.lastname}</span>
            <span className="text-secondary text-small">{destination_names(user.designation)}</span>
          </div>
          <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
        </a>
      </li>
      <li className="nav-item">
        <Link to="/dashbords" className="nav-link">
          <span className="menu-title">Dashboard</span>
          <i className="mdi mdi-home menu-icon" />
        </Link>
      </li>
      <li className="nav-item">
        <a to="/leads"
          className="nav-link"
          data-bs-toggle="collapse"
          href="#ui-basic"
          aria-expanded="false"
          aria-controls="ui-basic"
        >
          <span className="menu-title">Leads</span>
          <i className="menu-arrow" />
          <i className="mdi mdi-crosshairs-gps menu-icon" />
        </a>
        <div className="collapse" id="ui-basic">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
              <Link className="nav-link" to="/leads">
                Leads
              </Link>
            </li>
           
            

           


            
           
            

          </ul>
        </div>
      </li>



      <li className="nav-item">
        <a to="/leads"
          className="nav-link"
          data-bs-toggle="collapse"
          href="#itenary"
          aria-expanded="false"
          aria-controls="uitenary"
        >
          <span className="menu-title">Itenary</span>
          <i className="menu-arrow" />
          <i className="mdi mdi-crosshairs-gps menu-icon" />
        </a>
        <div className="collapse" id="itenary">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
              <Link className="nav-link" to="/itenary">
                Itenary
              </Link>
            </li>
           
           

            <li className="nav-item">
            <Link className="nav-link" to="/quality-check">
            Quality Check
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/approvals">
            Parner Approval
              </Link>
            </li>
           
          
            

          </ul>
        </div>
      </li>
     

     
      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="collapse"
          href="#forms"
          aria-expanded="false"
          aria-controls="forms"
        >
          <span className="menu-title">Accounts</span>
          <i className="mdi mdi-format-list-bulleted menu-icon" />
        </a>
        <div className="collapse" id="forms">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
            <Link className="nav-link" to="/ledger">
            Ledger Details
              </Link>
              
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/tax_invoices">
            Receipts List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/emp_deductions"> Employee Deduction List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recovery-list"> Recovery</Link>
            </li>
            
          </ul>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="collapse"
          href="#vpc"
          aria-expanded="false"
          aria-controls="forms"
        >
          <span className="menu-title">Vouchers</span>
          <i className="fi fi-ts-gift-card" />
        </a>
        <div className="collapse" id="vpc">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
            <Link className="nav-link" to="/vouchers">
            Vouchers Details
              </Link>
              
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/giftlist">
            Gift Vouchers 
              </Link>
            </li>
            
            
          </ul>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="collapse"
          href="#resv"
          aria-expanded="false"
          aria-controls="forms"
        >
          <span className="menu-title">Reservations</span>
          <i className="mdi mdi-format-list-bulleted menu-icon" />
        </a>
        <div className="collapse" id="resv">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
            <Link className="nav-link" to="/test">
            Package Payments
              </Link>
              
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/credits_notes">
            Credits Notes 
              </Link>
            </li>
            
            
          </ul>
        </div>
      </li>


      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="collapse"
          href="#formsh"
          aria-expanded="false"
          aria-controls="forms"
        >
          <span className="menu-title">HRM</span>
          <i className="mdi mdi-format-list-bulleted menu-icon" />
        </a>
        <div className="collapse" id="formsh">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
            <Link className="nav-link" to="/employees">
            Employee List
              </Link>
              
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/holidays">
            Holidays List
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/birthdays">
            Birthday List
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact-details">
            Contact Details 
              </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/requested-leave">
            Leave
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/RIP">
            Rip Details
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/advance-salary">
            Advance Salary Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/payroll">
                Payroll
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/notifications">
                Notifications
              </Link>
            </li>
            
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="collapse"
          href="#charts"
          aria-expanded="false"
          aria-controls="charts"
        >
          <span className="menu-title">Master</span>
          <i className="mdi mdi-chart-bar menu-icon" />
        </a>
        <div className="collapse" id="charts">
          <ul className="nav flex-column sub-menu">
          <li className="nav-item">
            <Link className="nav-link" to="/Partnersdetails">
            Parners Details
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/deprtments_and_desinations">
            Department & Designations
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/ex_in_clusives">
            Exclusives & Inclusives
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/destinations">
            Destinations List
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/business-locations">
            Business Location List
              </Link>
            </li>

          </ul>
        </div>
      </li>





      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="collapse"
          href="#repp"
          aria-expanded="false"
          aria-controls="chrepparts"
        >
          <span className="menu-title">Reports</span>
          <i className="mdi mdi-crosshairs-gps menu-icon" />
        </a>
        
        <div className="collapse" id="repp">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
            <Link className="nav-link" to="/productivity_report">
            Productivity Report
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/ex_in_clusives">
            Daily Sales
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/comments-datails">
            Lead Comments
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/partner-sales">
            Partner Report
              </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/customer-support">
           Customer Supports
              </Link>
            </li>

          </ul>
        </div>
      </li>

      
      <li className="nav-item">
        <a to="/leads"
          className="nav-link"
          data-bs-toggle="collapse"
          href="#supp"
          aria-expanded="false"
          aria-controls="uitenary"
        >
          <span className="menu-title">Supliers</span>
          <i className="menu-arrow" />
          <i className="mdi mdi-crosshairs-gps menu-icon" />
        </a>
        <div className="collapse" id="supp">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item">
              <Link className="nav-link" to="/cabs">
                Cabs
              </Link>
            </li>
           
            <li className="nav-item">
            <Link className="nav-link" to="/airports">
            Airport
              </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/hotel">
           Hotels
              </Link>
            </li>

         
          
            

          </ul>
        </div>
      </li>
    
      
      <li className="nav-item">
      <Link className="nav-link" to="/partners"
          className="nav-link"
         
          
        >
          <span className="menu-title">
            
           Partners
             </span>
          <i className="mdi mdi-file-document-box menu-icon" ></i>
          </Link>
      </li>
      <li className="nav-item">
        <Link to="/team" className="nav-link">
          <span className="menu-title">Teams</span>
          <i className="mdi mdi-home menu-icon" />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/escalation" className="nav-link">
          <span className="menu-title">Escalations</span>
          <i className="mdi mdi-alert-circle-outline menu-icon" />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/library" className="nav-link">
          <span className="menu-title">Libraries List</span>
          <i className="mdi mdi-alert-circle-outline menu-icon" />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/flyers" className="nav-link">
          <span className="menu-title">Marketting</span>
          <i className="mdi mdi-home menu-icon" />
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Sidebar
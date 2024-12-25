import './App.css';
import Header from './componts/Header.js';
import Home from './componts/Home.js';
import Contact from './componts/Contact.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import the correct router and routing elements
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login.jsx';
import Dashboard from './Pages/Dashbord.jsx';
import Buttons from './Pages/Buttons.jsx';
import Dropdowns from './Pages/Dropdowns.jsx';
import Leads from './Leads.jsx';
import Accounts from './Pages/Accounts.jsx';
import Itenary from './Pages/Itenary.jsx';
import Airport from './Pages/Airport.jsx';
import Cabs from './Pages/Cabs.jsx';
import Hotels from './Pages/Hotels.jsx';
import Partner from './Pages/Partner.jsx';
import Teams from './Pages/Teams.jsx';
import Employees from './Pages/Employees.jsx';
import Holidays from './Pages/Holidays.jsx';
import Birthday from './Pages/Birthday.jsx';
import Productivity from './Pages/Productivity.jsx';
import DeptDesign from './Pages/DeptDesign.jsx';
import ExclusiveInclusive from './Pages/ExclusiveInclusive.jsx';
import Destinations from './Pages/Destinations.js';
import AddLeads from './Pages/AddLeads.jsx';
import Reg from './Pages/Reg.jsx';
import ProtectedRoute from './Pages/ProtectedRoute.jsx';
import Profile from './Pages/Profile.jsx';
import { useState } from 'react';
import ChangePassword from './Pages/ChangePassword.jsx';
import Flyers from './Pages/Flyers.jsx';
import Escalation from './Pages/Escalation.jsx';
import Libra from './Pages/Libra';
import Recepits from './Pages/Recepits.jsx';
import EmpoyeeDeductions from './Pages/EmpoyeeDeductions.jsx';
import AddEmpDeduction from './Pages/AddEmpDeduction.jsx';
import Recovery from './Pages/Recovery.jsx';
import Invoice from './Pages/Invoice.jsx';
import EditProfile from './Pages/EditProfile.jsx';
import ContactDetails from './Pages/ContactDetails.jsx';
import LeaveDetails from './Pages/LeaveDetails.jsx';
import ViewLeaveDetails from './Pages/ViewLeaveDetails.jsx';
import RipDetails from './Pages/RipDetails.jsx';
import AdvanceSalary from './Pages/AdvanceSalary.jsx';
import Notifictins from './Pages/Notifictins.jsx';
import Payroll from './Pages/Payroll.jsx';
import Comments from './Pages/Comments.jsx';
import CustomerSupport from './Pages/CustomerSupport.jsx';
import CustomerSupportComyes from './Pages/CustomerSupportComyes';
import LandingPage from './LandingPage.jsx';
import PartnerSales from './Pages/PartnerSales.jsx';
import ProductvityReport from './Pages/ProductvityReport.jsx';
import CreditsNotes from './Pages/CreditsNotes.jsx';
import ViewCredits from './Pages/ViewCredits.jsx';
import VochersLanding from './Pages/VochersLanding.jsx';
import GiftList from './Pages/GiftList.jsx';
import QualityCheck from './Pages/QualityCheck.jsx';
import PartnerApproval from './Pages/PartnerApproval.jsx';
import BusinessLocations from './Pages/BusinessLocations.jsx';
import PartnersDetails from './Pages/PartnersDetails.jsx';


function App() {

  const [cat, setCat] = useState(0);
  const [like, setLike] = useState(0);

  const addcart = () => {
    setCat(cat + 1);
  };

  const addlike = () => {
    setLike(like + 1);
  };

  return (
    <div className="App">
      {/* Wrap the app in Router */}
      <Router>
        {/* You can optionally add a header or sidebar here */}
        <Header />

        {/* Define your protected routes */}
        <Routes>
          <Route path="/" element={<Login addcart={addcart} addlike={addlike} />} />
          <Route path="/registration" element={<Reg />} />

          <Route path="/home" element={<ProtectedRoute element={<Home addcart={addcart} addlike={addlike} />} />} />
          <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
          <Route path="/dashbords" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/buttons" element={<ProtectedRoute element={<Buttons />} />} />
          <Route path="/dropdown" element={<ProtectedRoute element={<Dropdowns />} />} />
          <Route path="/leads" element={<ProtectedRoute element={<Leads />} />} />
          <Route path="/ledger" element={<ProtectedRoute element={<Accounts />} />} />
          <Route path="/itenary" element={<ProtectedRoute element={<Itenary />} />} />
          <Route path="/airports" element={<ProtectedRoute element={<Airport />} />} />
          <Route path="/cabs" element={<ProtectedRoute element={<Cabs />} />} />
          <Route path="/hotel" element={<ProtectedRoute element={<Hotels />} />} />
          <Route path="/partners" element={<ProtectedRoute element={<Partner />} />} />
          <Route path="/team" element={<ProtectedRoute element={<Teams />} />} />
          <Route path="/employees" element={<ProtectedRoute element={<Employees />} />} />
          <Route path="/holidays" element={<ProtectedRoute element={<Holidays />} />} />
          <Route path="/birthdays" element={<ProtectedRoute element={<Birthday />} />} />
          <Route path="/productivity" element={<ProtectedRoute element={<Productivity />} />} />
          <Route path="/deprtments_and_desinations" element={<ProtectedRoute element={<DeptDesign />} />} />
          <Route path="/ex_in_clusives" element={<ProtectedRoute element={<ExclusiveInclusive />} />} />
          <Route path="/destinations" element={<ProtectedRoute element={<Destinations />} />} />
          <Route path="/addLeads" element={<ProtectedRoute element={<AddLeads />} />} />
          <Route path="/profilepage" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/changepassword" element={<ProtectedRoute element={<ChangePassword />} />} />
          <Route path="/flyers" element={<ProtectedRoute element={<Flyers />} />} />
          <Route path="/escalation" element={<ProtectedRoute element={<Escalation />} />} />
          <Route path="/library" element={<ProtectedRoute element={<Libra />} />} />
          <Route path="/tax_invoices" element={<ProtectedRoute element={<Recepits />} />} />
          <Route path="/emp_deductions" element={<ProtectedRoute element={<EmpoyeeDeductions />} />} />
          <Route path="/add-dedction" element={<ProtectedRoute element={<AddEmpDeduction />} />} />
          <Route path="/recovery-list" element={<ProtectedRoute element={<Recovery />} />} />
          <Route path="/Invoice" element={<ProtectedRoute element={<Invoice />} />} />
          <Route path="/Edit-profile" element={<ProtectedRoute element={<EditProfile />} />} />
          <Route path="/contact-details" element={<ProtectedRoute element={<ContactDetails />} />} />
          <Route path="/requested-leave" element={<ProtectedRoute element={<LeaveDetails />} />} />
          <Route path="/view-leave-details/:id" element={<ProtectedRoute element={<ViewLeaveDetails />} />} />
          <Route path="/RIP" element={<ProtectedRoute element={<RipDetails />} />} />
          <Route path="/advance-salary" element={<ProtectedRoute element={<AdvanceSalary />} />} />
          <Route path="/notifications" element={<ProtectedRoute element={<Notifictins />} />} />
          <Route path="/payroll" element={<ProtectedRoute element={<Payroll />} />} />
          <Route path="/comments-datails" element={<ProtectedRoute element={<Comments />} />} />
          <Route path="/customer-support" element={<ProtectedRoute element={<CustomerSupport />} />} />
          <Route path="/customer-support-com" element={<ProtectedRoute element={<CustomerSupportComyes />} />} />
          <Route path="/partner-sales" element={<ProtectedRoute element={<PartnerSales />} />} />
          <Route path="/land-page" element={<ProtectedRoute element={<LandingPage />} />} />
          <Route path="/productivity_report" element={<ProtectedRoute element={<ProductvityReport />} />} />
          <Route path="/credits_notes" element={<ProtectedRoute element={<CreditsNotes />} />} />
          <Route path="/view-credits-details/:id" element={<ProtectedRoute element={<ViewCredits />} />} />
          <Route path="/vouchers" element={<ProtectedRoute element={<VochersLanding />} />} />
          <Route path="/giftlist" element={<ProtectedRoute element={<GiftList />} />} />
          <Route path="/quality-check" element={<ProtectedRoute element={<QualityCheck />} />} />
          <Route path="/approvals" element={<ProtectedRoute element={<PartnerApproval />} />} />
          <Route path="/business-locations" element={<ProtectedRoute element={<BusinessLocations />} />} />
          <Route path="/Partnersdetails" element={<ProtectedRoute element={<PartnersDetails />} />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

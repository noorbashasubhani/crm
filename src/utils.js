// utils.js

import axios from "axios";
import moment from 'moment';

export const humanReadableDate = (isoDate) => {
    // Check if the date is the placeholder value '0000-00-00 00:00:00'
    if (isoDate === '0000-00-00') {
      return '--';  // Return '--' for invalid date
    } else {
      // Use moment.js to format the valid ISO date
      return moment(isoDate).format(' Do MMM YYYY, hh:mm:ss a');
    }
  };

  export const humandateonly = (isoDate) => {
    // Check if the date is the placeholder value '0000-00-00 00:00:00'
    if (isoDate === '0000-00-00') {
      return '--';  // Return '--' for invalid date
    } else {
      // Use moment.js to format the valid ISO date
      return moment(isoDate).format(' Do MM YYYY');
    }
  };


  export const ONLYDATE = (isoDate) => {
    // Check if the date is the placeholder value '0000-00-00 00:00:00'
    if (isoDate === '0000-00-00') {
      return '--';  // Return '--' for invalid date
    } else {
      // Use moment.js to format the valid ISO date
      return moment(isoDate).format(' Do MMM YYYY');
    }
  };



export const mapHolidayType = (type) => {
    if (type === 'D') {
      return "Domestic";
    } else if (type === 'I') {
      return "International";
    } else {
      return "Not Specified";
    }
  };

  export const qc_Status = (type) => {
    if (type === 'Y') {
      return "Process";
    } else {
      return "Pending";
    }
  };


  export const partnertypeNames=(type)=>{
    if(type==='S'){
        return 'Super Partner';
    }else if(type==='P'){
        return 'Sales Partner';
    }else if(type==='L'){
        return 'Lead Generator';
    }else{
        return 'No - Partner ';
    }
  }


  export const service_tuype=(type)=>{
    if(type==='S'){
        return 'Transport';
    }else if(type==='H'){
        return 'Accommodation';
    }else if(type==='D'){
        return 'DCM';
    }else{
        return '--';
    }
  }

  
  export const credit_status=(type)=>{
    if(type==='Y'){
        return 'Active';
    }else if(type==='N'){
        return 'Used';
    }else{
        return '--';
    }
  }

  
  export const levetype=(type)=>{
    if(type==='E'){
        return 'Extra Leave';
    }else if(type==='C'){
        return 'Casual Leave';
    }else if(type==='S'){
        return 'Sick Leave';
    }else{
        return '--';
    }
  }


  export const sourceType=(type)=>{
    if(type==='W'){ return "Website"; }
    if(type==='I'){ return "Instagram"; }
    if(type==='G'){ return "Google"; }
    if(type==='F'){ return "Facebook"; }
    if(type==='E'){ return "Existing Customer"; }
    if(type==='C'){ return "Customer Reference"; }
    if(type==='R'){ return "Personal Reference"; }
    if(type==='T'){ return "Telecalling"; }
    if(type==='S'){ return "Telecalling-CS"; }
    if(type==='L'){ return "Telecalling-CRM"; }
    if(type==='M'){ return "Marketing"; }
    if(type==='K'){ return "MICE-Marketing"; }
    if(type==='B'){ return "Bulk SMS Activity"; }
    if(type==='Q'){ return "Web Request"; }
    if(type==='U'){ return "QR Code Scan"; }
    if(type==='D'){ return "Direct Call"; }
  };

 
  export const fetchExecutiveNames = async (userIds) => {
    const executiveNames = {};
    // Fetch executive names for all unique user IDs
    for (const userId of userIds) {
      try {
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        executiveNames[userId] = `${response.data.data[0].firstname} ${response.data.data[0].lastname}`;
      } catch (error) {
        console.error(`Error fetching executive name for ID ${userId}:`, error);
      }
    }
    return executiveNames;
  };
  

  export const partType = async (userIds) => {
    const executiveNames = {};
    // Fetch executive names for all unique user IDs
    for (const userId of userIds) {
      try {
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        executiveNames[userId] = `${response.data.data[0].partner_type}`;
      } catch (error) {
        console.error(`Error fetching executive name for ID ${userId}:`, error);
      }
    }
    return executiveNames;
  };

  

export const transactionType=(type)=>{
if(type==='P'){ return "Package"; }
if(type ==='O'){ return "Others"; }
if(type ==='F'){ return "Flights"; }
if(type ==='C'){ return "Cruise"; }
if(type ==='V'){ return "Visa"; }
if(type ==='B'){ return "Cabs"; }
if(type ==='R'){ return "Reversal"; }
if(type ==='T'){ return "Trains"; }
if(type ==='H'){ return "Hotel"; }
if(type ==='I'){ return "Travel Insurance"; }
if(type ==='L'){ return "Handloan"; }
  }

  export const yesOrno=(type)=>{
    if(type==='Y'){
      return 'Yes';
    }else if(type==='N'){
      return 'No';
    }else{
      return '--';
    }
  }

  export const inextype=(type)=>{
     if(type==='I'){
      return 'Inclusives';
     }else if(type==='E'){
      return 'Exclusive';
     }else{
      return 'No--';
     }
  }

  
  export const deductin_type=(type)=>{
    if(type==='O'){
     return 'One Time';
    }else if(type==='R'){
     return 'Requrring';
    }else{
     return 'No--';
    }
 }

 export const deductin_towards=(type)=>{
  if(type==='E'){
   return 'EMI';
  }else if(type==='A'){
   return 'Advance';
  }else{
   return 'No--';
  }
}

export const status_type_leave=(type)=>{
  if(type==='A'){
   return 'Approved';
  }else if(type==='R'){
   return 'Rejected';
  }else if(type==='P'){
    return 'Pending';
   }else{
   return 'No--';
  }
}


  export const education_qualification=(type)=>{
   if(type==='S'){
    return "SSC";
   }else if(type==='I'){
    return "Intermediate";
   }else if(type==='G'){
    return "Graduation";
   }else if(type==='P'){
    return "Post Graduation";
   }else if(type==='M'){
    return "Master";
   }else if(type==='D'){
    return "Diploma";
   }else{
    return "--No--";
   }
  }

  export const Escaltype=(type)=>{
    if(type==='E'){
     return 'Employee';
    }else if(type==='I'){
     return 'Timings';
    }else if(type==='W'){
      return 'Work Culture';
     }else if(type==='T'){
      return 'Training';
     }else if(type==='O'){
      return 'Others';
     }else{
     return 'No--';
    }
 }

 export const service_type=(type)=>{
  if(type==='H'){
   return 'Hotel';
  }else if(type==='F'){
   return 'Flights';
  }else if(type==='P'){
    return 'Packages';
   }else if(type==='V'){
    return 'Visa';
   }else if(type==='L'){
    return 'Handlooms';
   }else{
   return 'No--';
  }
}
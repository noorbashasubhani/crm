import React, { useState } from 'react';

const MyComponent = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('tax');

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      {/* Tab Navigation */}
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'tax' ? 'active' : ''}`} 
          onClick={() => handleTabClick('tax')}
        >
          Tax Invoices
        </div>
        <div 
          className={`tab ${activeTab === 'lat' ? 'active' : ''}`} 
          onClick={() => handleTabClick('lat')}
        >
          LAT Invoices
        </div>
        <div 
          className={`tab ${activeTab === 'proforma' ? 'active' : ''}`} 
          onClick={() => handleTabClick('proforma')}
        >
          Proforma Invoices
        </div>
        <div 
          className={`tab ${activeTab === 'receipts' ? 'active' : ''}`} 
          onClick={() => handleTabClick('receipts')}
        >
          Receipts
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'tax' && <div>Content for Tax Invoices</div>}
        {activeTab === 'lat' && <div>Content for LAT Invoices</div>}
        {activeTab === 'proforma' && <div>Content for Proforma Invoices</div>}
        {activeTab === 'receipts' && <div>Content for Receipts</div>}
      </div>

      <style jsx>{`
        .tabs {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        }

        .tab {
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          background-color: #f1f1f1;
          border: 1px solid #ddd;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        .tab:hover {
          background-color: #ddd;
        }

        .tab.active {
          background-color: #007bff;
          color: white;
        }

        .tab-content {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
};

export default MyComponent;

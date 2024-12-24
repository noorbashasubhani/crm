import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <Sidebar />
        {/* Main content goes here */}
        <div className="content-wrapper">
          <h2>Main Content</h2>
          {/* Your main content */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

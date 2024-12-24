// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const PieChat = () => {
  // Example data for the Sales Pie Chart
  const salesData = {
    labels: ['Electronics', 'Clothing', 'Groceries', 'Furniture'],
    datasets: [
      {
        label: 'Sales Distribution',
        data: [5000, 3000, 2000, 1500], // Sample data
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'], // Custom colors
        hoverOffset: 4,
      },
    ],
  };

  // Example data for the Product Pie Chart
  const productData = {
    labels: ['Laptops', 'T-Shirts', 'Fruits', 'Couches'],
    datasets: [
      {
        label: 'Product Distribution',
        data: [200, 500, 300, 150], // Sample data
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'], // Custom colors
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      <div>
        <h3>Sales Distribution</h3>
        <Pie data={salesData} />
      </div>
      <div>
        <h3>Product Distribution</h3>
        <Pie data={productData} />
      </div>
    </div>
  );
};

export default PieChat;

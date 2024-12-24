// src/components/ItineraryChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ItineraryChart = () => {
  // Example data for the Month-Wise Confirmed and Published Itinerary Bar Chart
  const itineraryData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ], // Labels for months
    datasets: [
      {
        label: 'Confirmed Itinerary',  // Data for confirmed itinerary
        data: [3, 5, 2, 4, 6, 3, 7, 8, 4, 6, 5, 7],  // Confirmed activities per month
        backgroundColor: '#42A5F5',  // Blue color for confirmed activities
        borderColor: '#1E88E5',  // Border color for confirmed activities
        borderWidth: 1,
      },
      {
        label: 'Published Itinerary',  // Data for published itinerary
        data: [2, 4, 3, 5, 7, 4, 6, 9, 5, 8, 6, 7],  // Published activities per month
        backgroundColor: '#66BB6A',  // Green color for published activities
        borderColor: '#388E3C',  // Border color for published activities
        borderWidth: 1,
      },
    ],
  };

  // Chart options to customize the chart
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Activities',
        },
        beginAtZero: true,  // Start Y-axis from 0
      },
    },
    plugins: {
      legend: {
        position: 'top',  // Position of the legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Activities: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', marginTop: '40px' }}>
      <h3>Confirmed and Published Itinerary</h3>
      <Bar data={itineraryData} options={chartOptions} />
    </div>
  );
};

export default ItineraryChart;

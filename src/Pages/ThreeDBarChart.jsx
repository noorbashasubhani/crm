// src/components/ProfitComparisonChart.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ProfitComparisonChart = () => {
  const chartOptions = {
    chart: {
      type: 'spline',  // Use spline for a smooth, curved line
    },
    title: {
      text: 'Monthly Profit Comparison',
    },
    xAxis: {
      categories: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ],
      title: {
        text: 'Month',
      },
    },
    yAxis: {
      title: {
        text: 'Profit (USD)',
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: '{series.name}: <b>${point.y}</b>',
    },
    series: [
      {
        name: 'Profit for 2024',
        data: [5000, 7000, 8000, 6500, 9000, 11000, 10000, 9500, 12000, 14000, 13000, 16000],
        color: '#1E90FF', // Line color for 2024
        marker: {
          symbol: 'circle', // Marker style for the data points
        },
      },
      {
        name: 'Profit for 2023',
        data: [4500, 6200, 7000, 6000, 8000, 10000, 9500, 9200, 11000, 13000, 12000, 15000],
        color: '#32CD32', // Line color for 2023
        marker: {
          symbol: 'circle', // Marker style for the data points
        },
      },
    ],
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', marginTop: '40px' }}>
      <h3>Monthly Profit Comparison (Curved Line)</h3>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default ProfitComparisonChart;

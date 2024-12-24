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
        data: [12000000, 15000000, 12008000, 10000500, 10009000, 11001000, 19010000, 18009500, 12000000, 14000000, 13000000, 1600000],
        color: '#1E90FF', // Line color for 2024
        marker: {
          symbol: 'circle', // Marker style for the data points
        },
      },
      {
        name: 'Profit for 2023',
        data: [4500000, 6200000, 1200000, 6000000, 1130000, 11000000, 1500000, 1920000, 2200000, 11003000, 3200000, 1950000],
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



import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {Chart, ChartJS} from 'chart.js/auto'

const BarChart = ({ Data }) => {
  const chartData = {
    labels: ['Feb', 'Mar', 'Apr', 'May', 'Aug', 'Oct', 'Sep', 'Nov'],
    datasets: [
      {
        label: 'Emissions - 2022',
        backgroundColor: 'rgb(0, 162, 255)',
        borderWidth: 1,
        data: Data.filter((item) => item.Year === 2022).map((item) => item.Emissions),
      },
      {
        label: 'Emissions - 2023',
        backgroundColor: 'rgb(60, 179, 113)',
        borderWidth: 1,
        data: Data.filter((item) => item.Year === 2023).map((item) => item.Emissions),
      },
    ],
  };

  const filteredData = Data.filter((entry) => entry.Year === 2022 || entry.Year === 2023);

  const lineData = {
    labels: ['Feb', 'Mar', 'Apr', 'May', 'Aug', 'Oct', 'Sep', 'Nov'],
    datasets: [
      {
        label: 'E_R (2022)',
        data: filteredData.filter((entry) => entry.Year === 2022).map((entry) => entry.E_R),
        fill: false,
        borderColor: 'rgba(0, 123, 255, 1)', // Blue color
      },
      {
        label: 'E_R (2023)',
        data: filteredData.filter((entry) => entry.Year === 2023).map((entry) => entry.E_R),
        fill: false,
        borderColor: 'rgba(0, 255, 0, 1)', // Green color
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Emissions',
        },
      },
      y1: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'E_R',
        },
        position: 'right',
      },
    },
  };

  return (
    <div  style={{width: 600  , display: "flex"}}>
      <Bar data={chartData} options={options} />
      <Line data={lineData} options={options} />
    </div>
  );
};

export default BarChart;









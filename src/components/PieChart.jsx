import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ChartJS} from 'chart.js/auto'

const PieChart = ({ Data }) => {
  const suppliersData = Data.map((item) => ({ supplier: item.Supplier, emissions: item.Emissions }));

  // Group emissions data by supplier
  const groupedData = suppliersData.reduce((acc, item) => {
    if (!acc[item.supplier]) {
      acc[item.supplier] = 0;
    }
    acc[item.supplier] += item.emissions;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        data: Object.values(groupedData),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(205, 92, 92)',
          'rgb(0, 255, 127)',
          'rgb(255, 140, 0)',
          'rgb(70, 130, 180)',
        ],
        borderWidth: 1,
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    // Adjust the size of the chart
    width: 400,
    height: 400,
  };

  return(
  <div style={{width: 550, height: 530, border:"2px solid blue", marginRight:"50px", marginTop:"50px"}}>
     <Pie data={chartData} options={options} />;
  </div>
  
  )
};

export default PieChart;


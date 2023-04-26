import React from 'react';
import { Doughnut } from 'react-chartjs-2';

// Drawing doughnut char
const DoughnutChart = (props) => {
  
const data = {
  labels: [],
  datasets: [
    {
      label: 'Percentage: ',
      data: props.data,
      backgroundColor: props.color,
      borderColor: props.color,
      borderWidth: 1,
    },
  ],
};

const options = {
  cutoutPercentage: 90,
};

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

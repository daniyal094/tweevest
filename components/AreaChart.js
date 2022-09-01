import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["Q1.19", "Q2.19", "Q3.19", "Q4.19", "Q1.20", "Q2.20"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: [6, 12, 15, 11, 12, 15],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      lineTension: 0.5,  
    },
  ],
};

const AreaChart = () => {
  return <Line options={options} data={data} height={"100vh"} />;
};

export default AreaChart;

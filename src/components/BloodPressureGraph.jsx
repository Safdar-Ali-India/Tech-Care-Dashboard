import React from "react";
import { Line } from "react-chartjs-2";

const BloodPressureGraph = ({ data }) => {
  const chartData = {
    labels: ["Nov 2023", "Dec 2023", "Jan 2024", "Feb 2024", "Mar 2024"],
    datasets: [
      {
        label: "Systolic",
        data: data.systolic,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
      {
        label: "Diastolic",
        data: data.diastolic,
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default BloodPressureGraph;

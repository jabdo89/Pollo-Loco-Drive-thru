import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Container } from "./elements";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ profile }) => {
  const labels = ["1", "2", "3", "4", "5", "6", "7"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Indicador",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "#d93831",
        borderColor: "#fff056",
        tension: 0.2,
      },
    ],
  };
  return (
    <Container>
      <Line data={data} />
    </Container>
  );
};

export default LineChart;

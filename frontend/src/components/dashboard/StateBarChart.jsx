import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function StateBarChart({ data }) {
  const chartData = {
    labels: Object.keys(data || {}),
    datasets: [
      {
        label: "Schemes",
        data: Object.values(data || {}),
        backgroundColor: "#3B82F6",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        State-wise Schemes
      </h2>

      <Bar data={chartData} />
    </div>
  );
}
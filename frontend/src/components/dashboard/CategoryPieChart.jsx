import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function CategoryPieChart({ data }) {
  const chartData = {
    labels: Object.keys(data || {}),
    datasets: [
      {
        data: Object.values(data || {}),
        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
          "#06B6D4",
          "#F97316",
          "#84CC16",
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        Category Distribution
      </h2>

      <Pie data={chartData} />
    </div>
  );
}
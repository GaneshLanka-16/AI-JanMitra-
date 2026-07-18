export default function StatsCard({ title, value, color }) {
  return (
    <div
      className={`rounded-2xl shadow-lg p-6 text-white ${color} hover:scale-105 transition`}
    >
      <h3 className="text-lg">{title}</h3>

      <h1 className="text-4xl font-bold mt-3">{value}</h1>
    </div>
  );
}
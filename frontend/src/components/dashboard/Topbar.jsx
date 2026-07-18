export default function Topbar() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-slate-500">
          Welcome to AI JanMitra
        </p>
      </div>

      <div className="bg-blue-600 text-white px-5 py-2 rounded-xl">
        AI Online
      </div>
    </div>
  );
}
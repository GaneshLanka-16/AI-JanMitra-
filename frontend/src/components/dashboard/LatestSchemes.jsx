export default function LatestSchemes({ schemes }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        Latest Government Schemes
      </h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3">Scheme</th>
            <th className="p-3">State</th>
            <th className="p-3">Ministry</th>
          </tr>
        </thead>

        <tbody>
          {schemes.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{item.scheme_name}</td>
              <td className="p-3">{item.state}</td>
              <td className="p-3">{item.ministry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
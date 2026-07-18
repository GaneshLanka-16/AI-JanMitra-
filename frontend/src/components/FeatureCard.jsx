export default function FeatureCard({
  icon,
  title,
  description,
  color,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 duration-300">

      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl ${color}`}
      >
        {icon}
      </div>

      <h2 className="text-2xl font-bold mt-6">
        {title}
      </h2>

      <p className="text-slate-500 mt-4 leading-7">
        {description}
      </p>

    </div>
  );
}
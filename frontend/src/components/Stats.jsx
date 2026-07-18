import { Users, FileText, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: <Users size={40} />,
    number: "10K+",
    title: "Citizens Helped",
  },
  {
    icon: <FileText size={40} />,
    number: "500+",
    title: "Government Schemes",
  },
  {
    icon: <Award size={40} />,
    number: "95%",
    title: "AI Accuracy",
  },
  {
    icon: <Globe size={40} />,
    number: "25+",
    title: "Indian States",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl duration-300"
            >
              <div className="text-blue-600 flex justify-center">
                {item.icon}
              </div>

              <h2 className="text-5xl font-black mt-5 text-slate-800">
                {item.number}
              </h2>

              <p className="mt-3 text-slate-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
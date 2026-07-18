import {
  BadgeCheck,
  Sparkles,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function RecommendationCard({ scheme }) {
  return (
    <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Top Gradient */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500"></div>

      <div className="p-8">

        {/* Header */}
        <div className="flex justify-between items-start">

          <div>

            <div className="flex items-center gap-2">

              <BadgeCheck
                className="text-green-600"
                size={24}
              />

              <h2 className="text-2xl font-bold">
                {scheme.name}
              </h2>

            </div>

            <p className="text-gray-500 mt-2">
              AI Recommended Government Scheme
            </p>

          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">

            <Sparkles size={16} />

            {scheme.confidence}

          </div>

        </div>

        {/* Description */}

        <div className="bg-slate-50 rounded-2xl p-6 mt-8">

          <div className="flex items-center gap-2 mb-4">

            <FileText
              className="text-blue-600"
              size={22}
            />

            <h3 className="font-bold text-lg">
              AI Explanation
            </h3>

          </div>

          <p className="text-gray-700 whitespace-pre-line leading-8">

            {scheme.description}

          </p>

        </div>

        {/* Footer */}

        <div className="flex justify-between items-center mt-8">

          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">

            {scheme.category}

          </span>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-2">

            Learn More

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}
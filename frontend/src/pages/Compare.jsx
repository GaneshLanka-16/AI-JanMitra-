import { useState } from "react";
import Navbar from "../components/Navbar";
import { askGemini } from "../services/gemini";
import { Scale, Sparkles } from "lucide-react";

export default function Compare() {
  const [scheme1, setScheme1] = useState("");
  const [scheme2, setScheme2] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const compareSchemes = async () => {
    if (!scheme1 || !scheme2) {
      alert("Please enter both scheme names.");
      return;
    }

    setLoading(true);

    const prompt = `
You are AI Janmitra.

Compare these two Government Schemes.

Scheme 1: ${scheme1}

Scheme 2: ${scheme2}

Give the comparison in this format:

📌 Overview

🎯 Eligibility

💰 Benefits

📄 Required Documents

✅ Best For

⚖️ Final Recommendation

Keep it simple and easy to understand.
`;

    try {
      const response = await askGemini(prompt);
      setResult(response);
    } catch (err) {
      setResult("Unable to compare schemes.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 pt-28 pb-16">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-5 py-2 rounded-full">

              <Sparkles size={18} />

              AI Powered Comparison

            </div>

            <h1 className="text-5xl font-black mt-5">

              Compare Government Schemes

            </h1>

            <p className="text-gray-600 mt-4">

              Compare benefits, eligibility, documents and recommendations using Gemini AI.

            </p>

          </div>

          <div className="bg-white shadow-2xl rounded-3xl mt-10 p-8">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                value={scheme1}
                onChange={(e) => setScheme1(e.target.value)}
                placeholder="First Scheme"
                className="border rounded-xl p-4"
              />

              <input
                value={scheme2}
                onChange={(e) => setScheme2(e.target.value)}
                placeholder="Second Scheme"
                className="border rounded-xl p-4"
              />

            </div>

            <button
              onClick={compareSchemes}
              className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition"
            >

              <Scale className="inline mr-2" size={20} />

              Compare Using AI

            </button>

          </div>

          {loading && (

            <div className="text-center mt-10">

              <h2 className="text-2xl font-bold text-blue-600">

                Comparing Schemes...

              </h2>

            </div>

          )}

          {result && !loading && (

            <div className="bg-white shadow-xl rounded-3xl p-8 mt-10">

              <h2 className="text-3xl font-bold mb-6">

                AI Comparison Result

              </h2>

              <div className="whitespace-pre-line leading-8 text-gray-700">

                {result}

              </div>

            </div>

          )}

        </div>

      </div>
    </>
  );
}
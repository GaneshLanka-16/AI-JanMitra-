import { useState } from "react";
import Navbar from "../components/Navbar";
import EligibilityForm from "../components/EligibilityForm";
import AadhaarUpload from "../components/AadhaarUpload";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import { askGemini } from "../services/gemini";

export default function Eligibility() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    state: "",
    occupation: "",
    income: "",
    category: "",
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Auto-fill data from Aadhaar OCR
  const handleOCRData = (data) => {
    setFormData({
      age: data.age || "",
      gender: data.gender || "",
      state: data.state || "",
      occupation: data.occupation || "",
      income: data.income || "",
      category: data.category || "",
    });
  };

  // AI Eligibility Check
  const checkEligibility = async () => {
    setLoading(true);
    setResults([]);

    const prompt = `
You are AI Janmitra, an intelligent Government Scheme Recommendation Assistant.

Citizen Details:

Age: ${formData.age}
Gender: ${formData.gender}
State: ${formData.state}
Occupation: ${formData.occupation}
Annual Income: ₹${formData.income}
Category: ${formData.category}

Suggest the best Government Schemes.

For each scheme provide:

1. Scheme Name
2. Why Eligible
3. Benefits
4. Required Documents
5. How to Apply

Keep the response simple.
Do not guarantee eligibility.
Say "May be Eligible" wherever appropriate.
`;

    try {
      const response = await askGemini(prompt);

      setResults([
        {
          id: 1,
          name: "AI Janmitra Recommendation",
          category: "Gemini AI",
          confidence: "AI Generated",
          description: response,
        },
      ]);
    } catch (error) {
      console.error(error);

      setResults([
        {
          id: 1,
          name: "Error",
          category: "System",
          confidence: "Failed",
          description:
            "Unable to connect to Gemini AI. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-28 pb-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Hero Section */}

          <div className="text-center">

            <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">

              🤖 AI Powered Government Scheme Recommendation

            </span>

            <h1 className="text-5xl md:text-6xl font-black mt-6 leading-tight">

              Find Your{" "}

              <span className="text-blue-600">

                Eligible Government Schemes

              </span>

            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">

              Upload Aadhaar → AI extracts details → AI analyses your profile →
              Instantly recommends the most suitable Government Schemes.

            </p>

          </div>

          {/* Process Cards */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

            <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-2xl transition">

              <div className="text-5xl">📄</div>

              <h3 className="font-bold mt-4">Upload Aadhaar</h3>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-2xl transition">

              <div className="text-5xl">👤</div>

              <h3 className="font-bold mt-4">Profile Details</h3>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-2xl transition">

              <div className="text-5xl">🧠</div>

              <h3 className="font-bold mt-4">AI Analysis</h3>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-2xl transition">

              <div className="text-5xl">🎯</div>

              <h3 className="font-bold mt-4">Recommendations</h3>

            </div>

          </div>

          {/* Main Content */}

          <div className="grid lg:grid-cols-2 gap-8 mt-14">

            <div>

              <AadhaarUpload onData={handleOCRData} />

            </div>

            <div>

              <EligibilityForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={checkEligibility}
              />

            </div>

          </div>

          {/* Loading */}

          {loading && (

            <div className="mt-12">

              <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

                <div className="text-6xl mb-5 animate-bounce">

                  🤖

                </div>

                <h2 className="text-3xl font-bold text-blue-700">

                  AI is analysing your profile...

                </h2>

                <p className="text-gray-500 mt-3">

                  Finding the most relevant Government Schemes for you.

                </p>

                <div className="w-full bg-gray-200 h-3 rounded-full mt-8">

                  <div className="bg-blue-600 h-3 rounded-full animate-pulse w-3/4"></div>

                </div>

              </div>

            </div>

          )}

          {/* AI Result */}

          {!loading && results.length > 0 && (

            <div className="mt-16">

              <h2 className="text-4xl font-bold mb-8">

                🎯 Recommended Schemes

              </h2>

              <div className="space-y-8">

                {results.map((scheme) => (

                  <RecommendationCard
                    key={scheme.id}
                    scheme={scheme}
                  />

                ))}

              </div>

            </div>

          )}

        </div>

      </div>

    </>
  );
}
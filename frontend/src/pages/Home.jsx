import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  BrainCircuit,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white">

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center justify-between">

          <div className="max-w-2xl">

            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full mb-6">
              <Sparkles size={18} />
              <span>AI Powered Government Assistant</span>
            </div>

            <h1 className="text-6xl font-black leading-tight">
              AI Janmitra
            </h1>

            <p className="text-2xl mt-4 text-blue-100 font-medium">
              Discover Government Schemes in Seconds using AI.
            </p>

            <p className="mt-6 text-lg text-blue-100 leading-8">
              Upload Aadhaar, verify eligibility, compare schemes,
              chat with AI, and receive personalized recommendations
              in one platform.
            </p>

            <div className="flex gap-4 mt-10">

              <Link
                to="/eligibility"
                className="bg-white text-blue-700 px-7 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/chat"
                className="border border-white px-7 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
              >
                AI Assistant
              </Link>

            </div>

          </div>

          {/* Right Card */}
          <div className="mt-16 lg:mt-0">

            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 w-[360px] shadow-2xl border border-white/20">

              <h3 className="text-2xl font-bold mb-6">
                AI Analysis
              </h3>

              <div className="space-y-5">

                <div className="flex justify-between">
                  <span>Profile Match</span>
                  <span className="font-bold text-green-300">
                    95%
                  </span>
                </div>

                <div className="w-full h-3 bg-white/20 rounded-full">
                  <div className="h-3 bg-green-400 rounded-full w-[95%]"></div>
                </div>

                <div className="mt-6">

                  <div className="flex justify-between mb-2">
                    <span>Eligible Schemes</span>
                    <span>12</span>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span>Verified Documents</span>
                    <span>4</span>
                  </div>

                  <div className="flex justify-between">
                    <span>AI Confidence</span>
                    <span>98%</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-center mb-14">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">

            <BrainCircuit className="text-blue-600" size={42} />

            <h3 className="text-xl font-bold mt-5">
              AI Assistant
            </h3>

            <p className="mt-3 text-gray-600">
              Ask questions in natural language and receive AI-powered answers.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">

            <ShieldCheck className="text-green-600" size={42} />

            <h3 className="text-xl font-bold mt-5">
              Eligibility Check
            </h3>

            <p className="mt-3 text-gray-600">
              Instantly discover government schemes you qualify for.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">

            <FileCheck2 className="text-purple-600" size={42} />

            <h3 className="text-xl font-bold mt-5">
              Aadhaar Verification
            </h3>

            <p className="mt-3 text-gray-600">
              Upload documents and verify user information using OCR.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">

            <Sparkles className="text-orange-500" size={42} />

            <h3 className="text-xl font-bold mt-5">
              Smart Recommendation
            </h3>

            <p className="mt-3 text-gray-600">
              AI suggests the most relevant schemes based on your profile.
            </p>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="bg-blue-700 text-white py-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-10">

          <div>
            <h2 className="text-5xl font-black">500+</h2>
            <p className="mt-2">Government Schemes</p>
          </div>

          <div>
            <h2 className="text-5xl font-black">36</h2>
            <p className="mt-2">States Covered</p>
          </div>

          <div>
            <h2 className="text-5xl font-black">AI</h2>
            <p className="mt-2">Powered Recommendation</p>
          </div>

          <div>
            <h2 className="text-5xl font-black">24×7</h2>
            <p className="mt-2">Virtual Assistant</p>
          </div>

        </div>

      </section>

    </div>
  );
}
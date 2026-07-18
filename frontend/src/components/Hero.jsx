import { ArrowRight, Sparkles, Bot, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 text-white min-h-screen pt-28">

      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-[140px] opacity-30 -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[140px] opacity-20 bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Side */}
        <div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-2 rounded-full">
            <Sparkles size={18}/>
            <span className="text-sm">
              India's AI Powered Citizen Platform
            </span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mt-8">
            Discover Every
            <br/>
            Government Scheme
            <span className="text-cyan-300"> Instantly.</span>
          </h1>

          <p className="mt-8 text-xl text-slate-200 leading-9">
            AI JanMitra helps every citizen find personalized Central &
            State Government schemes using Artificial Intelligence.
            No paperwork confusion. No searching multiple websites.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <button className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 duration-300 shadow-xl">
              Try AI Assistant
              <ArrowRight size={22}/>
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black duration-300">
              Watch Demo
            </button>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>
              <h2 className="text-4xl font-black">500+</h2>
              <p className="text-slate-300 mt-2">Schemes</p>
            </div>

            <div>
              <h2 className="text-4xl font-black">95%</h2>
              <p className="text-slate-300 mt-2">AI Accuracy</p>
            </div>

            <div>
              <h2 className="text-4xl font-black">25+</h2>
              <p className="text-slate-300 mt-2">States</p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8">
              AI Recommendation
            </h2>

            <div className="space-y-5">

              <div className="bg-white/10 rounded-xl p-5 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">PM Kisan</h3>
                  <p className="text-sm text-slate-300">
                    Agriculture Support
                  </p>
                </div>

                <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                  95%
                </span>
              </div>

              <div className="bg-white/10 rounded-xl p-5 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Ayushman Bharat</h3>
                  <p className="text-sm text-slate-300">
                    Healthcare
                  </p>
                </div>

                <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                  91%
                </span>
              </div>

              <div className="bg-white/10 rounded-xl p-5 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">
                    Telangana Rythu Bandhu
                  </h3>
                  <p className="text-sm text-slate-300">
                    State Scheme
                  </p>
                </div>

                <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                  88%
                </span>
              </div>

            </div>

          </div>

          <div className="absolute -left-10 top-20 bg-white rounded-2xl shadow-xl p-5 text-slate-800">
            <Bot className="text-blue-600"/>
            <p className="font-bold mt-2">
              AI Assistant
            </p>
          </div>

          <div className="absolute -right-8 bottom-10 bg-white rounded-2xl shadow-xl p-5 text-slate-800">
            <ShieldCheck className="text-green-600"/>
            <p className="font-bold mt-2">
              Verified Schemes
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
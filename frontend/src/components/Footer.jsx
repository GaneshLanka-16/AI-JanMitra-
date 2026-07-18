import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">

          <div>

            <h2 className="text-3xl font-bold text-blue-400">
              AI JanMitra
            </h2>

            <p className="mt-5 text-slate-300 leading-8">
              AI-powered citizen welfare assistant helping
              people discover government schemes,
              compare benefits,
              upload documents,
              and receive personalized recommendations.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 mt-5">

              <li>Home</li>
              <li>Eligibility</li>
              <li>AI Chat</li>
              <li>Compare</li>
              <li>Dashboard</li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Connect
            </h3>

            <div className="flex gap-5 mt-5">

              <Github className="cursor-pointer hover:text-blue-400" />

              <Linkedin className="cursor-pointer hover:text-blue-400" />

              <Mail className="cursor-pointer hover:text-blue-400" />

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-14 pt-8 text-center text-slate-400">

          © 2026 AI JanMitra • Built for NxtWave National Hackathon

        </div>

      </div>

    </footer>
  );
}
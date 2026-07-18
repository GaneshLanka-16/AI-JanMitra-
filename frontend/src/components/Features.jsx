import {
  Bot,
  ScanSearch,
  FileSearch,
  Scale,
  Languages,
  ShieldCheck,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      icon: <Bot />,
      title: "AI Recommendation",
      description:
        "Get personalized government schemes using AI.",
      color: "bg-blue-600",
    },

    {
      icon: <ScanSearch />,
      title: "OCR Upload",
      description:
        "Upload Aadhaar or documents for quick analysis.",
      color: "bg-green-600",
    },

    {
      icon: <FileSearch />,
      title: "Eligibility Checker",
      description:
        "Know whether you're eligible before applying.",
      color: "bg-cyan-600",
    },

    {
      icon: <Scale />,
      title: "Compare Schemes",
      description:
        "Compare benefits, eligibility and documents.",
      color: "bg-purple-600",
    },

    {
      icon: <Languages />,
      title: "Multi-language",
      description:
        "Supports regional Indian languages.",
      color: "bg-orange-500",
    },

    {
      icon: <ShieldCheck />,
      title: "Secure Platform",
      description:
        "Privacy-first citizen assistance.",
      color: "bg-pink-600",
    },
  ];

  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-black text-center">
          Powerful Features
        </h1>

        <p className="text-center text-slate-500 mt-5">
          Everything needed to help citizens discover the right schemes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
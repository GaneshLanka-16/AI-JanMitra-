import { LayoutDashboard, Bot, Search, Scale, Upload, Info } from "lucide-react";
import { Link } from "react-router-dom";

const menus = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "AI Chat", icon: Bot, path: "/chat" },
  { name: "Eligibility", icon: Search, path: "/eligibility" },
  { name: "Compare", icon: Scale, path: "/compare" },
  { name: "Upload", icon: Upload, path: "/upload" },
  { name: "About", icon: Info, path: "/about" },
];

export default function Sidebar() {
  return (
    <div className="w-72 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-black mb-10">AI JanMitra</h1>

      <div className="space-y-3">
        {menus.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-600 duration-300"
            >
              <Icon size={22} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
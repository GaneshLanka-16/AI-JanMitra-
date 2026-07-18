import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BrainCircuit,
  Home,
  LayoutDashboard,
  BadgeCheck,
  MessageCircleMore,
  Scale,
  FileUp,
  Info,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Eligibility",
      path: "/eligibility",
      icon: <BadgeCheck size={18} />,
    },
    {
      name: "AI Chat",
      path: "/chat",
      icon: <MessageCircleMore size={18} />,
    },
    {
      name: "Compare",
      path: "/compare",
      icon: <Scale size={18} />,
    },
    {
      name: "Upload",
      path: "/upload",
      icon: <FileUp size={18} />,
    },
    {
      name: "About",
      path: "/about",
      icon: <Info size={18} />,
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">

        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl text-white shadow-lg">

              <BrainCircuit size={26} />

            </div>

            <div>

              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Janmitra
              </h1>

              <p className="text-xs text-gray-500">
                Smart Government Assistant
              </p>

            </div>

          </Link>

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-2">

            {navItems.map((item) => {

              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium

                  ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {item.icon}

                  {item.name}

                </Link>
              );
            })}
          </div>

          {/* AI Badge */}

          <div className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full shadow-lg font-semibold">

            AI Powered

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      {open && (
        <div className="fixed top-20 left-0 w-full bg-white shadow-xl lg:hidden z-40">

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-6 py-4 border-b hover:bg-gray-100"
            >
              {item.icon}

              {item.name}
            </Link>
          ))}

        </div>
      )}
    </>
  );
}
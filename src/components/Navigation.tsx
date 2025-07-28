import React, { JSX } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Calendar, Code, GraduationCap } from "lucide-react";

interface NavigationProps {
  refs: {
    homeRef: React.RefObject<HTMLDivElement | null>;
    experienceRef: React.RefObject<HTMLDivElement | null>;
    skillsRef: React.RefObject<HTMLDivElement | null>;
    educationRef: React.RefObject<HTMLDivElement | null>;
  };
}

interface NavItem {
  path: string;
  label: string;
  icon: JSX.Element;
  refKey: string;
}

const navItems = [
  { path: "/", label: "Home", icon: <Home className="w-5 h-5" />, refKey: "homeRef" },
  { path: "/experience", label: "Experience", icon: <Calendar className="w-5 h-5" />, refKey: "experienceRef" },
  { path: "/skills", label: "Skills", icon: <Code className="w-5 h-5" />, refKey: "skillsRef" },
  { path: "/education", label: "Education", icon: <GraduationCap className="w-5 h-5" />, refKey: "educationRef" },
];

const Navigation: React.FC<NavigationProps> = ({ refs }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("Current Path:", location.pathname);

  const handleNav = (item: NavItem) => {
    console.log(`Current navigation refs:`, refs);
    const ref = refs[item.refKey as keyof typeof refs];
    console.log(`Navigating to ${item.path} with ref:`, ref);

    if (ref && ref.current) {
      console.log(`Scrolling to ref:`, ref.current);
      ref.current.scrollIntoView({ behavior: "smooth" });
      navigate(item.path, { replace: true });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => handleNav(navItems[0])}
            className="text-2xl font-bold text-purple-700 hover:text-purple-900 transition-colors"
          >
            Amol Gupta
          </button>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
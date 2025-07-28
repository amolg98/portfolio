// import React from "react";
// import { ArrowDownRight } from "lucide-react";

// const Home: React.FC = () => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#d1fae5]">
//       {/* Blurred gradient blobs for depth */}
//       <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-br from-emerald-400 via-sky-300 to-blue-400 opacity-30 rounded-full filter blur-3xl z-0" />
//       <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-tr from-fuchsia-300 via-purple-200 to-indigo-300 opacity-20 rounded-full filter blur-2xl z-0" />
//       <div className="absolute top-1/2 left-1/2 w-[18rem] h-[18rem] bg-gradient-to-br from-yellow-200 via-emerald-100 to-sky-100 opacity-30 rounded-full filter blur-2xl z-0 -translate-x-1/2 -translate-y-1/2" />

//       {/* Glassmorphism Card */}
//       <div className="relative z-10 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl px-10 py-16 max-w-2xl w-full text-center">
//         {/* Animated Gradient Name */}
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
//           Amol Gupta
//         </h1>
//         <div className="flex justify-center items-center mb-4">
//           <span className="inline-block w-8 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-400 opacity-70" />
//         </div>
//         <p className="text-lg md:text-2xl text-slate-700 mb-8 font-medium">
//           Building elegant, scalable software.<br />
//           <span className="text-sky-600">Backend, Cloud, and Product Engineering.</span>
//         </p>
//         <div className="flex justify-center mb-8">
//           <ArrowDownRight className="w-8 h-8 text-emerald-400 animate-bounce" />
//         </div>
//         <a
//           href="experience"
//           className="inline-block mt-2 px-10 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold text-lg shadow-lg transition-all duration-200 border-2 border-white/30"
//         >
//           View Experience
//         </a>
//       </div>

//       {/* Subtle animated gradient for text */}
//       <style>
//         {`
//           @keyframes gradient-x {
//             0%, 100% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//           }
//           .animate-gradient-x {
//             background-size: 200% 200%;
//             animation: gradient-x 4s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { ArrowDownRight, Code, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Option 1: Typewriter Effect with Cursor
const TypewriterName: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Amol Gupta";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
      {displayText}
      <span className="animate-pulse text-sky-500">|</span>
    </h1>
  );
};

// Option 2: Glitch Effect
const GlitchName: React.FC = () => {
  return (
    <div className="relative mb-4">
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
        Amol Gupta
      </h1>
      {/* Glitch layers */}
      <h1 className="absolute top-0 left-0 text-5xl md:text-6xl font-extrabold text-red-500 opacity-20 animate-pulse">
        Amol Gupta
      </h1>
      <h1 className="absolute top-0 left-0 text-5xl md:text-6xl font-extrabold text-blue-500 opacity-20 animate-bounce">
        Amol Gupta
      </h1>
    </div>
  );
};

// Option 3: 3D Floating Letters
const FloatingName: React.FC = () => {
  return (
    <div className="mb-4">
      <h1 className="text-5xl md:text-6xl font-extrabold">
        {"Amol Gupta".split("").map((letter, index) => (
          <span
            key={index}
            className="inline-block bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-200"
            style={{
              animation: `float 3s ease-in-out infinite ${index * 0.1}s`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};

// Option 4: Neon Glow Effect
const NeonName: React.FC = () => {
  return (
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent relative">
      <span className="relative">
        Amol Gupta
        <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse">
          Amol Gupta
        </span>
      </span>
    </h1>
  );
};

// Option 5: Split Reveal Animation
const SplitRevealName: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 overflow-hidden">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <span className="bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
          Amol
        </span>
      </div>
      <div
        className={`transition-all duration-1000 delay-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Gupta
        </span>
      </div>
    </h1>
  );
};

// Option 6: Morphing Text with Background
const MorphingName: React.FC = () => {
  return (
    <div className="relative mb-4">
      {/* Background morphing shape */}
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-sky-400/20 to-blue-400/20 rounded-2xl animate-pulse blur-xl"></div>
      <h1 className="relative text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
        Amol Gupta
      </h1>
    </div>
  );
};

// Option 7: Coding Theme with Brackets
const CodingName: React.FC = () => {
  return (
    <div className="mb-4 font-mono">
      <div className="text-emerald-400 text-lg mb-2">
        <Code className="inline w-5 h-5 mr-2" />
        const developer = {`{`}
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent pl-8">
        "Amol Gupta"
      </h1>
      <div className="text-emerald-400 text-lg mt-2">{`}`}</div>
    </div>
  );
};

// Option 8: Sparkle Animation
const SparkleName: React.FC = () => {
  return (
    <div className="relative mb-4">
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
        Amol Gupta
      </h1>
      {/* Floating sparkles */}
      <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-pulse" />
      <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-emerald-400 animate-bounce" />
      <Sparkles className="absolute top-1/2 -right-6 w-4 h-4 text-sky-400 animate-ping" />
    </div>
  );
};

// Option 9: Gradient Border Box
const BorderBoxName: React.FC = () => {
  return (
    <div className="relative mb-4 p-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 p-[2px]">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
          Amol Gupta
        </h1>
      </div>
    </div>
  );
};

// Option 10: Wave Animation
const WaveName: React.FC = () => {
  return (
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
      {"Amol Gupta".split("").map((letter, index) => (
        <span
          key={index}
          className="inline-block bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent"
          style={{
            animation: `wave 2s ease-in-out infinite ${index * 0.1}s`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
      <style>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-5deg);
          }
        }
      `}</style>
    </h1>
  );
};

// Demo Component showing all options
const NameHeaderDemo: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const navigate = useNavigate();

  const options = [
    { id: 1, name: "Typewriter Effect", component: <TypewriterName /> },
    { id: 2, name: "Glitch Effect", component: <GlitchName /> },
    { id: 3, name: "Floating Letters", component: <FloatingName /> },
    { id: 4, name: "Neon Glow", component: <NeonName /> },
    { id: 5, name: "Split Reveal", component: <SplitRevealName /> },
    { id: 6, name: "Morphing Background", component: <MorphingName /> },
    { id: 7, name: "Coding Theme", component: <CodingName /> },
    { id: 8, name: "Sparkle Animation", component: <SparkleName /> },
    { id: 9, name: "Gradient Border", component: <BorderBoxName /> },
    { id: 10, name: "Wave Animation", component: <WaveName /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#d1fae5] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Name Header Options
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedOption === option.id
                    ? "bg-emerald-500 text-white"
                    : "bg-white/70 text-gray-700 hover:bg-white/90"
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl p-16 text-center">
          {options.find((option) => option.id === selectedOption)?.component}

          <div className="mt-8 pt-8 border-t border-gray-200/50">
            <p className="text-lg text-slate-700 mb-4 font-medium">
              Building elegant, scalable software.
              <br />
              <span className="text-sky-600">
                Backend, Cloud, and Product Engineering.
              </span>
            </p>
            <div className="flex justify-center mb-6">
              <ArrowDownRight className="w-8 h-8 text-emerald-400 animate-bounce" />
            </div>
            <div
              onClick={() => navigate("/experience", { replace: true })}
              className="inline-block mt-2 px-10 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold text-lg shadow-lg transition-all duration-200 border-2 border-white/30"
            >
              View Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameHeaderDemo;

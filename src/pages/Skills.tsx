import { Code, Database, Settings, Cloud } from "lucide-react";
import React from "react";

const skillCategories = [
  {
    title: "Programming Languages & Frameworks",
    skills: [
      { name: "Java Spring Boot", icon: <Code className="w-4 h-4" /> },
      { name: "JavaScript", icon: <Code className="w-4 h-4" /> },
      { name: "Go", icon: <Code className="w-4 h-4" /> },
      { name: "Python", icon: <Code className="w-4 h-4" /> },
      { name: "NodeJS", icon: <Code className="w-4 h-4" /> },
      { name: "ReactJS", icon: <Code className="w-4 h-4" /> },
      { name: "VueJS", icon: <Code className="w-4 h-4" /> },
      { name: "Bash", icon: <Code className="w-4 h-4" /> },
    ],
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-400 via-sky-400 to-emerald-400"
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL", icon: <Database className="w-4 h-4" /> },
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
      { name: "Amazon DynamoDB", icon: <Database className="w-4 h-4" /> },
    ],
    icon: <Database className="w-8 h-8" />,
    color: "from-emerald-400 via-teal-400 to-cyan-400"
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <Settings className="w-4 h-4" /> },
      { name: "GitHub", icon: <Settings className="w-4 h-4" /> },
      { name: "Algolia Search", icon: <Settings className="w-4 h-4" /> },
      { name: "Apache Kafka", icon: <Settings className="w-4 h-4" /> },
      { name: "Maven", icon: <Settings className="w-4 h-4" /> },
      { name: "Split", icon: <Settings className="w-4 h-4" /> },
      { name: "JIRA", icon: <Settings className="w-4 h-4" /> },
      { name: "Confluence", icon: <Settings className="w-4 h-4" /> },
      { name: "VSCode", icon: <Settings className="w-4 h-4" /> },
      { name: "IntelliJ", icon: <Settings className="w-4 h-4" /> },
    ],
    icon: <Settings className="w-8 h-8" />,
    color: "from-orange-400 via-pink-400 to-fuchsia-400"
  },
  {
    title: "Cloud & Environments",
    skills: [
      { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
      { name: "Azure", icon: <Cloud className="w-4 h-4" /> },
      { name: "Linux", icon: <Cloud className="w-4 h-4" /> },
      { name: "Windows", icon: <Cloud className="w-4 h-4" /> },
    ],
    icon: <Cloud className="w-8 h-8" />,
    color: "from-purple-400 via-indigo-400 to-blue-400"
  }
];

const pastelBg = [
  "bg-gradient-to-tr from-emerald-50 via-white to-emerald-100 text-emerald-700 border-emerald-100",
  "bg-gradient-to-tr from-sky-50 via-white to-sky-100 text-sky-700 border-sky-100",
  "bg-gradient-to-tr from-pink-50 via-white to-pink-100 text-pink-700 border-pink-100",
  "bg-gradient-to-tr from-indigo-50 via-white to-indigo-100 text-indigo-700 border-indigo-100"
];

const Skills: React.FC = () => {
  return (
    <div className="relative min-h-screen py-24 overflow-hidden flex flex-col items-center justify-center">
      {/* Diagonal split background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#d1fae5]" />
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-gradient-to-br from-emerald-300 via-sky-200 to-blue-200 opacity-30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-tr from-fuchsia-200 via-purple-100 to-indigo-200 opacity-20 rounded-full filter blur-2xl" />
        <div className="absolute top-1/3 left-1/2 w-[24rem] h-[24rem] bg-gradient-to-br from-yellow-100 via-emerald-100 to-sky-100 opacity-20 rounded-full filter blur-2xl -translate-x-1/2" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent drop-shadow animate-gradient-x">
            My Skillset
          </h2>
          <div className="flex justify-center mb-4">
            <span className="inline-block w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-400 opacity-70" />
          </div>
          <p className="text-xl text-slate-600">A blend of engineering, cloud, and product expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-3xl p-10 flex flex-col items-center hover:shadow-emerald-200/60 hover:scale-[1.03] transition-all duration-300"
            >
              <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-tr ${category.color} shadow-lg border-4 border-white flex items-center justify-center`}>
                {category.icon}
              </div>
              <h3 className="mt-16 text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium shadow-sm transition-all duration-200 ${pastelBg[index % pastelBg.length]} hover:scale-105`}
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Skills;

// import { Code, FileText, Briefcase, Star } from "lucide-react";
// import React from "react";

// const skillCategories = [
//   {
//     title: "Programming Languages",
//     skills: ["Java Spring Boot", "JavaScript", "Go", "Golang", "Python", "NodeJS", "ReactJS", "VueJS", "Bash"],
//     icon: <Code className="w-8 h-8" />,
//     color: "from-blue-400 via-sky-400 to-emerald-400"
//   },
//   {
//     title: "Databases",
//     skills: ["SQL", "PostgreSQL", "Amazon DynamoDB"],
//     icon: <FileText className="w-8 h-8" />,
//     color: "from-emerald-400 via-teal-400 to-cyan-400"
//   },
//   {
//     title: "Tools & Technologies",
//     skills: ["Git", "GitHub", "Algolia Search", "Apache Kafka", "Maven", "Split", "JIRA", "Confluence", "VSCode", "IntelliJ"],
//     icon: <Briefcase className="w-8 h-8" />,
//     color: "from-orange-400 via-pink-400 to-fuchsia-400"
//   },
//   {
//     title: "Cloud & Environments",
//     skills: ["AWS", "Azure", "Linux", "Windows"],
//     icon: <Star className="w-8 h-8" />,
//     color: "from-purple-400 via-indigo-400 to-blue-400"
//   }
// ];

// const pastelBg = [
//   "bg-emerald-50 text-emerald-700 border-emerald-100",
//   "bg-sky-50 text-sky-700 border-sky-100",
//   "bg-pink-50 text-pink-700 border-pink-100",
//   "bg-indigo-50 text-indigo-700 border-indigo-100"
// ];

// const Skills: React.FC = () => {
//   return (
//     <div className="relative min-h-screen py-20 bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#d1fae5] overflow-hidden">
//       {/* Blurred blobs for depth */}
//       <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-br from-emerald-300 via-sky-200 to-blue-200 opacity-20 rounded-full filter blur-3xl z-0" />
//       <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-tr from-fuchsia-200 via-purple-100 to-indigo-200 opacity-10 rounded-full filter blur-2xl z-0" />

//       <div className="relative max-w-6xl mx-auto px-4 z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent drop-shadow animate-gradient-x">
//             Technical Skills
//           </h2>
//           <p className="text-xl text-slate-600">Technologies and tools I work with</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10">
//           {skillCategories.map((category, index) => (
//             <div
//               key={index}
//               className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//             >
//               <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr ${category.color} text-white mb-6 shadow-lg`}>
//                 {category.icon}
//               </div>
//               <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
//                 {category.title}
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {category.skills.map((skill, i) => (
//                   <span
//                     key={i}
//                     className={`px-4 py-2 rounded-full border text-sm font-medium shadow-sm transition-all duration-200 ${pastelBg[index % pastelBg.length]} hover:scale-105`}
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <style>
//         {`
//           @keyframes gradient-x {
//             0%, 100% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//           }
//           .animate-gradient-x {
//             background-size: 200% 200%;
//             animation: gradient-x 5s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Skills;
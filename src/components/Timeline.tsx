// import { Star } from "lucide-react";
// import React from "react";

// // Timeline Component
// const Timeline: React.FC = () => {
//   const experiences = [
//     {
//       id: 1,
//       company: "GEICO",
//       position: "Senior Engineer",
//       period: "Apr 2024 - Present",
//       location: "Backend Software Developer | Amazon Connect",
//       description: "Developed Recording Interview functionality for Amazon Connect, optimized call recording operations leading to $3 million in annual revenue savings.",
//       achievements: [
//         "Developed SetRecordingState method for call recordings",
//         "Designed serverless APIs using AWS API Gateway and Lambda",
//         "Integrated AWS Transcribe for automatic transcription",
//         "Led Spring Boot project with Java and DynamoDB"
//       ],
//       technologies: ["Python", "Spring Boot", "ReactJS", "AWS Lambda", "DynamoDB", "Amazon Connect", "Azure"],
//       color: "from-teal-500 to-emerald-400"
//     },
//     {
//       id: 2,
//       company: "ANGI Inc",
//       position: "Software Engineer 2",
//       period: "Dec 2021 - Mar 2024",
//       location: "Backend Software Developer | Angi memberships",
//       description: "Developed 'Project Action' feature, drove $500k revenue increase in FY 2023 resulting in $200k profit boost.",
//       achievements: [
//         "Led entire development process from requirements to approval",
//         "Designed NoSQL DynamoDB schema",
//         "Implemented Apache Kafka producers and consumers",
//         "Integrated Algolia Search increasing conversion rate by 5%"
//       ],
//       technologies: ["Java", "Spring Boot", "Apache Kafka", "DynamoDB", "Docker", "Kubernetes", "Vue.js"],
//       color: "from-sky-500 to-blue-400"
//     },
//     {
//       id: 3,
//       company: "SIOS TECHNOLOGY CORP.",
//       position: "Software Engineer",
//       period: "Aug 2017 – Dec 2021",
//       location: "Python Developer | SAP HANA Application Recovery",
//       description: "Architected and led SAP HANA application recovery kit, collaborated with SAP Labs and SIOS Germany teams.",
//       achievements: [
//         "Designed complete disaster recovery solution",
//         "Collaborated with international stakeholders",
//         "Developed cloud-based infrastructure solutions",
//         "Integrated with SIOS LifeKeeper product"
//       ],
//       technologies: ["Java", "Python", "Spring Boot", "PostgreSQL", "AWS EC2", "CloudWatch"],
//       color: "from-violet-500 to-indigo-400"
//     },
//     {
//       id: 4,
//       company: "TATA CONSULTANCY SERVICES",
//       position: "Software Engineer",
//       period: "Jan 2012 – Jul 2015",
//       location: "Java J2EE Developer",
//       description: "Worked on Store Inventory applications for GlaxoSmithKline and Deutsche Bank, maintained 99% SLA.",
//       achievements: [
//         "Performed requirement gathering and system design",
//         "Developed Use Case and business flow diagrams",
//         "Created Data Access Objects for CRUD operations",
//         "Met 99% SLA for troubleshooting"
//       ],
//       technologies: ["Java", "Spring Boot", "MySQL", "Oracle 11g", "Apache Tomcat"],
//       color: "from-orange-400 to-pink-400"
//     }
//   ];

//   return (
//     <div className="relative min-h-screen py-24 overflow-hidden flex flex-col items-center justify-center">
//       {/* Deep gradient and blurred blobs for depth */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#f3e8ff] via-[#f0fdfa] to-[#cffafe]" />
//         <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-300 via-pink-200 to-cyan-200 opacity-30 rounded-full filter blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-tr from-fuchsia-200 via-purple-100 to-cyan-200 opacity-20 rounded-full filter blur-2xl" />
//         <div className="absolute top-1/3 left-1/2 w-[24rem] h-[24rem] bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 opacity-20 rounded-full filter blur-2xl -translate-x-1/2" />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow animate-gradient-x">
//             Professional Journey
//           </h2>
//           <div className="flex justify-center mb-4">
//             <span className="inline-block w-16 h-1 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-70" />
//           </div>
//           <p className="text-xl text-slate-600">A timeline of my career progression and achievements</p>
//         </div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 shadow-lg rounded-full" />

//           {experiences.map((exp, index) => (
//             <div key={exp.id} className={`relative flex items-center mb-20 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`} style={{ minHeight: '220px' }}>
//               {/* Timeline dot with glow */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-pink-400 shadow-2xl rounded-full z-10 flex items-center justify-center">
//                 <div className="w-4 h-4 bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 rounded-full shadow-lg animate-pulse" />
//               </div>

//               {/* Content card */}
//               <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}> 
//                 <div className="relative bg-white/80 backdrop-blur-2xl border-2 border-pink-200 shadow-2xl rounded-3xl p-10 hover:shadow-pink-200/60 hover:scale-[1.03] transition-all duration-300">
//                   <div className={`inline-block px-5 py-2 rounded-full text-white text-base font-semibold mb-4 bg-gradient-to-r ${exp.color} shadow-lg animate-gradient-x border-2 border-white/30`}> 
//                     {exp.period}
//                   </div>
//                   <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-2 animate-gradient-x">{exp.position}</h3>
//                   <h4 className="text-xl text-pink-600 font-semibold mb-2">{exp.company}</h4>
//                   <p className="text-slate-500 mb-4 italic">{exp.location}</p>
//                   <p className="text-slate-700 mb-6">{exp.description}</p>
//                   <div className="mb-6">
//                     <h5 className="font-semibold text-pink-700 mb-3">Key Achievements:</h5>
//                     <ul className="space-y-2">
//                       {exp.achievements.map((achievement, i) => (
//                         <li key={i} className="flex items-start space-x-2">
//                           <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
//                           <span className="text-slate-700 text-sm">{achievement}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {exp.technologies.map((tech, i) => (
//                       <span key={i} className="px-3 py-1 bg-gradient-to-tr from-pink-50 via-white to-cyan-100 text-pink-700 rounded-full text-xs font-medium border border-pink-100">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
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
//             animation: gradient-x 6s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Timeline;

import { Star } from "lucide-react";
import React from "react";

// Timeline Component
const Timeline: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: "GEICO",
      position: "Senior Engineer",
      period: "Apr 2024 - Present",
      location: "Backend Software Developer | Amazon Connect",
      description: "Developed Recording Interview functionality for Amazon Connect, optimized call recording operations leading to $3 million in annual revenue savings.",
      achievements: [
        "Developed SetRecordingState method for call recordings",
        "Designed serverless APIs using AWS API Gateway and Lambda",
        "Integrated AWS Transcribe for automatic transcription",
        "Led Spring Boot project with Java and DynamoDB"
      ],
      technologies: ["Python", "Spring Boot", "ReactJS", "AWS Lambda", "DynamoDB", "Amazon Connect", "Azure"],
      color: "from-teal-500 to-emerald-400"
    },
    {
      id: 2,
      company: "ANGI Inc",
      position: "Software Engineer 2",
      period: "Dec 2021 - Mar 2024",
      location: "Backend Software Developer | Angi memberships",
      description: "Developed 'Project Action' feature, drove $500k revenue increase in FY 2023 resulting in $200k profit boost.",
      achievements: [
        "Led entire development process from requirements to approval",
        "Designed NoSQL DynamoDB schema",
        "Implemented Apache Kafka producers and consumers",
        "Integrated Algolia Search increasing conversion rate by 5%"
      ],
      technologies: ["Java", "Spring Boot", "Apache Kafka", "DynamoDB", "Docker", "Kubernetes", "Vue.js"],
      color: "from-sky-500 to-blue-400"
    },
    {
      id: 3,
      company: "SIOS TECHNOLOGY CORP.",
      position: "Software Engineer",
      period: "Aug 2017 – Dec 2021",
      location: "Python Developer | SAP HANA Application Recovery",
      description: "Architected and led SAP HANA application recovery kit, collaborated with SAP Labs and SIOS Germany teams.",
      achievements: [
        "Designed complete disaster recovery solution",
        "Collaborated with international stakeholders",
        "Developed cloud-based infrastructure solutions",
        "Integrated with SIOS LifeKeeper product"
      ],
      technologies: ["Java", "Python", "Spring Boot", "PostgreSQL", "AWS EC2", "CloudWatch"],
      color: "from-violet-500 to-indigo-400"
    },
    {
      id: 4,
      company: "TATA CONSULTANCY SERVICES",
      position: "Software Engineer",
      period: "Jan 2012 – Jul 2015",
      location: "Java J2EE Developer",
      description: "Worked on Store Inventory applications for GlaxoSmithKline and Deutsche Bank, maintained 99% SLA.",
      achievements: [
        "Performed requirement gathering and system design",
        "Developed Use Case and business flow diagrams",
        "Created Data Access Objects for CRUD operations",
        "Met 99% SLA for troubleshooting"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Oracle 11g", "Apache Tomcat"],
      color: "from-orange-400 to-pink-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50 to-emerald-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-emerald-700 mb-4 drop-shadow">Professional Journey</h2>
          <p className="text-xl text-slate-600">A timeline of my career progression and achievements</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-sky-400 to-violet-400"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-emerald-400 shadow-md rounded-full z-10"></div>

              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-100">
                  <div className={`inline-block px-4 py-2 rounded-full text-white text-sm font-semibold mb-4 bg-gradient-to-r ${exp.color} shadow`}>
                    {exp.period}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-emerald-700 mb-2">{exp.position}</h3>
                  <h4 className="text-xl text-sky-600 font-semibold mb-2">{exp.company}</h4>
                  <p className="text-slate-500 mb-4 italic">{exp.location}</p>
                  <p className="text-slate-700 mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-emerald-700 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium border border-emerald-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
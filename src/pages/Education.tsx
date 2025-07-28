import { GraduationCap, Code, Award, Star } from "lucide-react";
import React from "react";

// Education Component
const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Science, Electrical and Computer Engineering",
      school: "University of Florida",
      year: "2017",
      gpa: "3.50/4.00",
      color: "from-blue-500 to-purple-600"
    },
    {
      degree: "Bachelor of Technology, Electronics and Communication Engineering",
      school: "Punjab Technical University",
      year: "2011",
      gpa: "3.81/4.00",
      color: "from-green-500 to-teal-600"
    }
  ];

  const projects = [
    {
      name: "Car Tracker",
      technologies: ["Java Spring", "Hibernate", "SQL", "ReactJS"],
      year: "2017",
      description: "Full-stack REST web services with real-time car tracking on Google Maps"
    }
  ];

  const awards = [
    "Certificate of Excellence in SIOS Technology Corp. 2018",
    "Achievement Award at University of Florida 2015"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Achievements</h2>
          <p className="text-xl text-gray-600">Academic background and recognitions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} text-white mb-6`}>
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
              <p className="text-lg text-purple-600 font-semibold mb-2">{edu.school}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{edu.year}</span>
                <span className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-medium`}>
                  GPA: {edu.gpa}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white mb-6">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Projects</h3>
            {projects.map((project, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-800">{project.name} ({project.year})</h4>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Awards & Achievements</h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
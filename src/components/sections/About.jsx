import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const frontendSkills = [
    { name: "React", level: 85, color: "bg-blue-500" },
    { name: "TailwindCSS", level: 92, color: "bg-cyan-400" },
    { name: "Javascript", level: 95, color: "bg-purple-500" },
    { name: "NextJS", level: 50, color: "bg-blue-400" }
    
  ];

  const backendSkills = [
  { name: "Python", level: 85, color: "bg-yellow-300" },   
  { name: "Node.js", level: 90, color: "bg-orange-300" },   
  { name: "MongoDB", level: 88, color: "bg-rose-300" },     
  { name: "MySQL", level: 80, color: "bg-pink-300" },     
];


  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const SkillBar = ({ skill, delay = 0 }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
            boxShadow: `0 0 12px ${skill.color.replace(
              "bg-",
              ""
            )}/40)`,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="mb-12">
            <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto leading-relaxed">
              Passionate developer crafting scalable web applications and
              innovative solutions. I enjoy exploring new technologies and
              turning ideas into real-world products.
            </p>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Frontend */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Frontend</h3>
              </div>
              <p className="text-gray-400 mb-6 text-sm">
                Crafting beautiful, responsive user interfaces
              </p>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 200} />
              ))}
            </div>

            {/* Backend */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Backend</h3>
              </div>
              <p className="text-gray-400 mb-6 text-sm">
                Building robust server-side solutions
              </p>
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={index * 200 + 1000}
                />
              ))}
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">🏫</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    B.Tech in Computer Science and Engineering
                  </h4>
                  <p className="text-blue-400 text-sm mb-2">
                    Kalinga Institute Of Industrial Technology (2023-2027)
                  </p>
                  <p className="text-white-800 text-bold text-sm mb-2">
                    CGPA - 9.05
                  </p>
                  <p className="text-gray-200 text-sm">
                    Coursework: Data Structures, OOPs, DBMS, Operating Systems, Computer Networks, Machine Learning, Software Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Web Development Intern - Codeunia
                  </h4>
                  <p className="text-green-400 text-sm mb-2">
                    July 2025 – Aug 2025
                  </p>
                  <p className="text-gray-200 text-sm">
                    Developing TrackATS.io, an AI-powered resume analyzer using React, React Router, and full-stack integrations, improving candidate–job matching efficiency. 
                    Contributed to production-ready features on GitHub, improving maintainability and debugging.
                  </p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Open Source Contributor - Social Summer of Code (SSoC) Season 4
                  </h4>
                  <p className="text-cyan-400 text-sm mb-2">
                    June 2025 - Aug 2025
                  </p>
                  <p className="text-gray-300 text-sm">
                    Improved UI, layout, and accessibility in open-source projects like Civix and EventMappr, fixing 10+ bugs. Merged 6+ pull requests and reviewed docs using GitHub collaboration practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

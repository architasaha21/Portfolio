import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Cloud Platform",
      description: "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
      category: "Web",
      techs: ["React", "Node.js", "AWS", "Docker"],
      featured: true
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      description: "ML-powered data visualization platform with predictive analytics and interactive reports.",
      category: "ML",
      techs: ["Python", "TensorFlow", "D3.js", "Flask"],
      featured: true
    },
    {
      id: 3,
      title: "E-Commerce Web App",
      description: "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
      category: "Web",
      techs: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      featured: true
    },
    {
      id: 4,
      title: "Real-Time Chat App",
      description: "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
      category: "Web",
      techs: ["Socket.IO", "Express", "React", "Redis"],
      featured: false
    },
    {
      id: 5,
      title: "Data Structures Visualizer",
      description: "Interactive tool for visualizing algorithms and data structures with step-by-step execution.",
      category: "Java",
      techs: ["Java", "JavaFX", "Spring Boot", "MySQL"],
      featured: false
    },
    {
      id: 6,
      title: "Neural Network Framework",
      description: "Custom deep learning framework built from scratch with GPU acceleration support.",
      category: "ML",
      techs: ["Python", "CUDA", "NumPy", "OpenCV"],
      featured: false
    }
  ];

  const categories = ["All", "Web", "ML", "Java"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">FEATURED WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Recent <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my expertise in building modern web applications and solving complex problems.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-2 inline-flex space-x-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-400 hover:text-white hover:bg-blue-500/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-gray-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-blue-600/20 flex items-center justify-center overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-6 h-6 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-6 left-8 w-4 h-4 bg-blue-300 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute bottom-4 right-6 w-5 h-5 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
                  </div>
                  
                  {/* Project type icon */}
                  <div className="relative z-10 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Featured
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4 bg-gray-900/70 backdrop-blur-sm text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/30">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center group"
                    >
                      View Project 
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
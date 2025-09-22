import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950"
    >
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
      `}</style>
      {/* Animated gradient background with blue streaks */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Animated diagonal streaks */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/20 transform rotate-12 scale-150 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cyan-400/15 via-transparent to-blue-600/15 transform -rotate-12 scale-150 animate-pulse delay-700"></div>
      </div>

      {/* Enhanced floating particles effect - More dots scattered */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/6 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-5/6 right-1/2 w-1 h-1 bg-cyan-500 rounded-full animate-bounce delay-900"></div>
        <div className="absolute top-2/5 left-1/6 w-2 h-2 bg-blue-200 rounded-full animate-bounce delay-600"></div>
        <div className="absolute top-3/5 right-1/6 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce delay-400"></div>
        <div className="absolute top-1/8 right-2/3 w-1 h-1 bg-blue-300 rounded-full animate-bounce delay-800"></div>
        <div className="absolute top-7/8 left-2/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-1100"></div>
        <div className="absolute top-1/5 right-1/4 w-2 h-2 bg-cyan-200 rounded-full animate-bounce delay-350"></div>
        <div className="absolute top-4/5 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-750"></div>
        <div className="absolute top-1/2 right-1/8 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-450"></div>
        <div className="absolute top-3/8 left-7/8 w-1 h-1 bg-blue-300 rounded-full animate-bounce delay-650"></div>
        <div className="absolute top-5/8 right-7/8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-850"></div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent leading-tight animate-pulse drop-shadow-2xl">
            Hi, I'm Archita Saha
          </h1>

          {/* Typing effect underline */}
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full opacity-80 animate-pulse shadow-lg shadow-blue-500/50"></div>

          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto leading-relaxed drop-shadow-lg">
            I'm a <span className="text-blue-400 font-semibold glow-text">full-stack developer</span> who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59, 130, 246, 0.4)] hover:scale-105 group shadow-xl"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
            // change HEREEEEE
              href="#contact" 
              className="border-2 border-blue-500/50 text-blue-400 py-3 px-8 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59, 130, 246, 0.3)] hover:bg-blue-500/10 hover:border-blue-400 group shadow-xl"
            >
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </RevealOnScroll>


      {/* Additional ambient lighting */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950/20 to-transparent"></div>
      
      {/* Sleek corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cyan-500/10 to-transparent"></div>
      
      {/* Subtle scanline effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent h-1 animate-pulse"></div>
      </div>
    </section>
  );
};
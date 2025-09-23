import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";

export const CodingJourney = () => {
  const [animateProgress, setAnimateProgress] = useState(false);
  const [animateHeatmap, setAnimateHeatmap] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimateProgress(true), 800);
    const timer2 = setTimeout(() => setAnimateHeatmap(true), 1200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Generate GitHub contribution heatmap data
  const generateHeatmapData = () => {
    const data = [];
    const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    
    for (let week = 0; week < 53; week++) {
      for (let day = 0; day < 7; day++) {
        const intensity = Math.floor(Math.random() * 5); // 0-4 intensity levels
        data.push({
          week,
          day,
          intensity,
          contributions: intensity === 0 ? 0 : Math.floor(Math.random() * 8) + 1
        });
      }
    }
    return data;
  };

  const heatmapData = generateHeatmapData();

  const getHeatmapColor = (intensity) => {
    const colors = [
      'bg-gray-800/50', // 0 contributions
      'bg-blue-900/60', // 1-2 contributions
      'bg-blue-700/70', // 3-4 contributions
      'bg-blue-500/80', // 5-6 contributions
      'bg-blue-400/90'  // 7+ contributions
    ];
    return colors[intensity];
  };

  return (
    <section
      id="coding-journey"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          {/* LeetCode Progress Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                LeetCode Progress
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* LeetCode Stats Card */}
              <div className="bg-gray-900/40 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full blur-xl"></div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">LC</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">noobcoder1260</h3>
                      <p className="text-gray-400 text-sm">#754,407</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white bg-gray-800/50 rounded-full w-16 h-16 flex items-center justify-center border-2 border-orange-400/30">
                      180
                    </div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  {[
                    { level: 'Easy', solved: 100, total: 901, color: 'bg-green-500' },
                    { level: 'Medium', solved: 70, total: 1920, color: 'bg-orange-500' },
                    { level: 'Hard', solved: 15, total: 870, color: 'bg-red-500' }
                  ].map((item, index) => (
                    <div key={item.level}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{item.level}</span>
                        <span className="text-gray-400 text-sm">{item.solved} / {item.total}</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: animateProgress ? `${(item.solved / item.total) * 100}%` : '0%',
                            transitionDelay: `${index * 300}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Heatmap */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Heatmap (Last 52 Weeks)</h4>
                  <div className="bg-gray-800/30 rounded-xl p-4">
                    <div className="grid grid-cols-53 gap-1 mb-2" style={{ gridTemplateColumns: 'repeat(53, minmax(0, 1fr))' }}>
                      {Array.from({ length: 53 * 7 }, (_, i) => {
                        const intensity = Math.floor(Math.random() * 5);
                        return (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-sm transition-all duration-300 ${getHeatmapColor(intensity)}`}
                            style={{
                              animationDelay: animateHeatmap ? `${i * 2}ms` : '0ms',
                            }}
                          ></div>
                        );
                      })}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>2024.9.23</span>
                      <span>2025.9.22</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Journey Description */}
              <div className="lg:pl-8">
                <h3 className="text-3xl font-bold text-blue-400 mb-6">My LeetCode Journey</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  I have solved <span className="text-blue-400 font-bold">180 problems</span>, with a ranking of{' '}
                  <span className="text-cyan-400 font-bold">#754,407</span> globally. My max streak is{' '}
                  <span className="text-green-400 font-bold">90 days!</span>
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  My expertise spans across topics like Dynamic Programming, Trees, Linked Lists and more. I keep challenging 
                  myself daily to grow as a competitive programmer and strengthen my problem-solving skills.
                </p>
                <a href="https://leetcode.com/u/noobcoder1260/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                        View My Profile
                    </button>
                </a>
              </div>
            </div>
          </div>

          {/* GitHub Contributions Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                GitHub Contributions
              </h2>
            </div>

            {/* GitHub Heatmap */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 mb-8 hover:-translate-y-1 transition-all duration-500">
              <div className="mb-6">
                <div className="grid grid-cols-12 gap-4 text-center text-gray-400 text-sm mb-4">
                  {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map(month => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
                <div className="grid grid-cols-53 gap-1 mb-4" style={{ gridTemplateColumns: 'repeat(53, minmax(0, 1fr))' }}>
                  {heatmapData.map((cell, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-sm transition-all duration-300 hover:scale-125 cursor-pointer ${getHeatmapColor(cell.intensity)}`}
                      style={{
                        animationDelay: animateHeatmap ? `${i * 1}ms` : '0ms',
                      }}
                      title={`${cell.contributions} contributions`}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">558 contributions in the last year</span>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>Less</span>
                    <div className="flex space-x-1">
                      {[0, 1, 2, 3, 4].map(level => (
                        <div key={level} className={`w-3 h-3 rounded-sm ${getHeatmapColor(level)}`}></div>
                      ))}
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Description */}
            <div className="text-center mb-8">
              <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
                My GitHub contributions reflect my consistent commitment to open-source development and personal projects. 
                Explore my repositories to learn more about the projects I've worked on and the skills I bring to the table.
              </p>
            </div>

            {/* GitHub Profile Card */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center border-2 border-blue-500/30">
                    <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">GitHub Avatar</h3>
                    <p className="text-gray-400">@archita21</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-sm">5 Followers</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                      <span className="text-sm">51 Repos</span>
                    </div>
                  </div>
                  <a href="https://github.com/architasaha21" target="_blank" rel="noopener noreferrer">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                        View My Profile
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
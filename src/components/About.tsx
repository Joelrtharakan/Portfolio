import React from 'react';
import { User, Lightbulb, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const skills = {
    'Languages & Frameworks': [
      'Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'Flask', 'React', 'Tailwind CSS', 'PostgreSQL'
    ],
    'AI & Data Science': [
      'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Data Analysis', 
      'Data Visualization', 'Pandas', 'NumPy', 'Ollama (llama3.2)', 'NLU Chatbot'
    ],
    'Tools & Platforms': [
      'Git & GitHub', 'Jira API', 'WeasyPrint', 'Joblib', 'Chart.js', 'Gmail API', 
      'OAuth2', 'VS Code', 'Cloudinary'
    ]
  };

  const highlights = [
    {
      icon: <User className="w-6 h-6 text-blue-400" />,
      title: "Full-Stack Developer",
      description: "Building end-to-end solutions with modern technologies"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      title: "AI Enthusiast",
      description: "Integrating intelligent features into real-world applications"
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: "Problem Solver",
      description: "Transforming complex challenges into elegant solutions"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Passionate about creating intelligent solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dnd5jmhjf/image/upload/v1750754683/IMG_1108_zf3f7w.jpg"
                  alt="Joel R Tharakan - AI and Full-Stack Developer"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-slate-700/50"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face';
                  }}
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50" />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-6 text-white">Hello! I'm Joel R Tharakan</h3>
                
                <div className="prose prose-slate text-slate-300 space-y-4 mb-8">
                  <p>
                    I'm a dedicated developer with a passion for building intelligent, user-focused digital solutions. 
                    I specialize in AI-powered applications, full-stack web development, and data-driven projects.
                  </p>
                  <p>
                    Currently pursuing a B.Tech in Artificial Intelligence and Data Science, I continuously strive to 
                    expand my knowledge and stay updated with the latest trends in technology. I believe in writing 
                    clean, efficient code and designing with purpose.
                  </p>
                  <p>
                    Beyond development, I'm passionate about exploring new frameworks, learning how AI is shaping 
                    our world, and contributing meaningfully to impactful projects.
                  </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        {highlight.icon}
                        <h4 className="font-semibold text-white text-sm">{highlight.title}</h4>
                      </div>
                      <p className="text-slate-400 text-xs">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div
                  key={category}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold mb-4 text-white">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 hover:scale-105 ${
                          index === 0
                            ? 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20'
                            : index === 1
                            ? 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20'
                            : 'bg-green-500/10 text-green-300 border-green-500/20 hover:bg-green-500/20'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
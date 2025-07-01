import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "AI Development & Software Integration Intern",
      company: "LQMS Software Solutions LLC",
      period: "Summer 2025",
      location: "Dubai, UAE (ONSITE)",
      type: "Internship",
      description: [
        "Completed a 4-week internship focused on AI development and software system integration",
        "Designed and developed an AI-powered support ticketing system with Jira integration to enhance customer service workflows",
        "Integrated an AI-driven chatbot using Ollama’s LLaMA 3.2 model to assist users in real-time with support queries",
        "Streamlined support workflows by merging conversational AI with enterprise-grade issue tracking systems",
      ],
      technologies: ["AI Systems Integration", "Automation", "Ollama LLaMA 3.2", "Python", "Web Application Development", "Jira Integration"],
      color: "blue"
    },
    {
      title: "Data Science & Analytics Intern",
      company: "Innovate",
      period: "Summer 2024",
      location: "Remote",
      type: "Internship",
      description: [
        "Worked on the project 'Veracity Vigilance: Leveraging Machine Learning for Fake News Detection'",
        "Utilized data analytics and classification techniques for real-world data verification solutions",
        "Developed and evaluated machine learning models to identify misinformation with improved accuracy and interpretability"
      ],
      technologies: ["Python", "Machine Learning", "Data Analytics", "Classification", "Model Evaluation"],
      color: "red"
    },
    {
      title: "Omni Sports Leader",
      company: "Decathlon Sports India",
      period: "Apr 2023 - Jul 2023",
      location: "Bangalore",
      type: "Full-time",
      description: [
        "Responsible for driving sales and enhancing customer experience across multiple sports categories",
        "Actively engaged with customers to understand their needs and provided tailored product recommendations",
        "Maintained product displays and ensured a seamless in-store and online shopping experience"
      ],
      technologies: ["Customer Service", "Sales", "Product Management", "Team Leadership"],
      color: "purple"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A journey through impactful roles and meaningful contributions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-2 border-slate-900 z-10 ${
                    exp.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                  }`} />

                  {/* Experience Card */}
                  <div className="ml-16 w-full">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-slate-300 mb-2">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-semibold">{exp.company}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              exp.type === 'Internship' 
                                ? 'bg-blue-500/20 text-blue-300' 
                                : 'bg-green-500/20 text-green-300'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3 text-slate-300">
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                exp.color === 'blue' ? 'bg-blue-400' : 'bg-purple-400'
                              }`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 hover:scale-105 ${
                                exp.color === 'blue'
                                  ? 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20'
                                  : 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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

export default Experience;
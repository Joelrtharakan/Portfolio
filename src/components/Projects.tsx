import React from 'react';
import { ExternalLink, Zap, Database, Bot, Mail } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "SmartBill AI – Invoice & Analytics Platform",
      description:
        "Flask-based web app for invoice generation, analytics, and AI chatbot. Features secure invoicing with login, PDF generation, and real-time analytics with Chart.js. Integrated NLU chatbot for natural language queries.",
      image:
        "https://res.cloudinary.com/dnd5jmhjf/image/upload/v1750754838/Screenshot_2025-06-18_at_12.33.53_PM_trfeie.png",
      technologies: ["Flask", "SQL Server", "Tailwind CSS", "Chart.js", "WeasyPrint", "NLU Chatbot"],
      category: "AI & Analytics",
      icon: <Zap className="w-6 h-6" />,
      color: "blue",
      liveLink: "https://github.com/Joelrtharakan/SmartBill-AI-ChatBot.git"
    },
    {
      title: "AI-Powered Support Ticketing System",
      description:
        "Flask-based application with AI-driven chatbot powered by Ollama's llama3.2 model. Automates ticket creation in Jira with file attachments, streamlining support workflows through conversational AI.",
      image:
        "https://res.cloudinary.com/dnd5jmhjf/image/upload/v1750754909/WhatsApp_Image_2025-06-23_at_09.38.00_dii9ss.jpg",
      technologies: ["Flask", "Ollama (llama3.2)", "Jira API", "Python", "AI Chatbot"],
      category: "AI & Automation",
      icon: <Bot className="w-6 h-6" />,
      color: "purple",
      liveLink: "https://github.com/Joelrtharakan/Support-Chat-Bot.git"
    },
    {
      title: "Automated Email-to-Jira System",
      description:
        "Python automation tool that connects to Gmail using OAuth2 to fetch and parse emails with attachments. Intelligently detects duplicates and automatically creates corresponding Jira tickets.",
      image:
        "https://res.cloudinary.com/dnd5jmhjf/image/upload/v1750755043/Screenshot_2025-06-24_at_12.50.24_PM_cej53k.png",
      technologies: ["Python", "Gmail API", "Jira API", "OAuth2", "Email Automation"],
      category: "Automation",
      icon: <Mail className="w-6 h-6" />,
      color: "green",
      liveLink: "https://github.com/Joelrtharakan/Email-ticket-Project.git"
    },
    {
      title: "Web-Based Support Ticket System",
      description:
        "Full-stack web application enabling users to submit support tickets via HTML forms. Features file upload capabilities and secure data storage in PostgreSQL database with comprehensive ticket management.",
      image:
        "https://res.cloudinary.com/dnd5jmhjf/image/upload/v1750755312/Screenshot_2025-06-24_at_12.54.30_PM_vclwzd.png",
      technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL", "File Uploads"],
      category: "Full-Stack",
      icon: <Database className="w-6 h-6" />,
      color: "orange",
      liveLink: "https://github.com/Joelrtharakan/Support-Ticket-Webpage.git"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-500/10 to-blue-600/10',
        border: 'border-blue-500/20',
        text: 'text-blue-400',
        hover: 'hover:border-blue-400/50'
      },
      purple: {
        bg: 'from-purple-500/10 to-purple-600/10',
        border: 'border-purple-500/20',
        text: 'text-purple-400',
        hover: 'hover:border-purple-400/50'
      },
      green: {
        bg: 'from-green-500/10 to-green-600/10',
        border: 'border-green-500/20',
        text: 'text-green-400',
        hover: 'hover:border-green-400/50'
      },
      orange: {
        bg: 'from-orange-500/10 to-orange-600/10',
        border: 'border-orange-500/20',
        text: 'text-orange-400',
        hover: 'hover:border-orange-400/50'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Showcasing innovative solutions that blend AI, automation, and modern web technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const colorClasses = getColorClasses(project.color);

              return (
                <div
                  key={index}
                  className={`group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border ${colorClasses.border} ${colorClasses.hover} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop';
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm border ${colorClasses.border}`}>
                      <div className="flex items-center space-x-2">
                        <div className={colorClasses.text}>
                          {project.icon}
                        </div>
                        <span className={`text-sm font-medium ${colorClasses.text}`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs rounded-full bg-slate-700/50 ${colorClasses.text} border ${colorClasses.border} transition-all duration-300 hover:scale-105`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Single View Button */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${colorClasses.bg} ${colorClasses.text} border ${colorClasses.border} rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorClasses.bg}`} />
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${colorClasses.bg}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "joelrtharakan@gmail.com",
      href: "mailto:joelrtharakan@gmail.com",
      color: "blue"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/joel-r-tharakan/",
      color: "blue"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/Joelrtharakan",
      color: "purple"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          {/* Contact Info + Stats Only */}
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                Whether you have a question about my work or want to explore working together, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`p-3 rounded-lg ${
                    info.color === 'blue' 
                      ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30' 
                      : 'bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30'
                  } transition-colors`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {info.label}
                    </h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
                <div className="text-2xl font-bold text-blue-400 mb-1">4+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
                <div className="text-2xl font-bold text-purple-400 mb-1">24h</div>
                <div className="text-sm text-slate-400">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
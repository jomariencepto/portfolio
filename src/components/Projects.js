import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaIceCream, FaReceipt, FaRobot } from 'react-icons/fa';

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: 'Sweet Scoop Order and Billing',
      description: 'Ordering and billing system for managing menu items, customer orders, totals, and transaction records.',
      icon: FaIceCream,
      tags: ['HTML', 'CSS', 'JavaScript', 'Billing'],
      liveLink: '#',
      githubLink: 'https://github.com/jomariencepto',
      features: ['Order Entry', 'Billing', 'Transaction Records'],
    },
    {
      title: "Jerry's Grill Order and Billing",
      description: 'Restaurant order and billing application focused on faster order processing, item management, and bill calculation.',
      icon: FaReceipt,
      tags: ['HTML', 'CSS', 'JavaScript', 'Database'],
      liveLink: '#',
      githubLink: 'https://github.com/jomariencepto',
      features: ['Menu Management', 'Order Tracking', 'Bill Calculation'],
    },
    {
      title: 'AI-Assisted Exam Generator',
      description: 'Academic tool that uses term frequency and inverse document frequency to support exam item generation from learning materials.',
      icon: FaRobot,
      tags: ['Python', 'TF-IDF', 'AI-Assisted', 'NLP'],
      liveLink: '#',
      githubLink: 'https://github.com/jomariencepto',
      features: ['Keyword Scoring', 'Question Support', 'Document Processing'],
    },
  ];

  return (
    <section id="projects" className={`${darkMode ? 'bg-slate-800' : 'bg-white'} py-20 px-4 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`${darkMode ? 'text-white' : 'text-slate-950'} section-title`}>Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`${darkMode ? 'card' : 'card-light'} group overflow-hidden`}>
              <div className={`${darkMode ? 'bg-slate-700 text-blue-300' : 'bg-blue-50 text-blue-600'} w-16 h-16 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon size={32} />
              </div>

              <h3 className={`${darkMode ? 'text-white' : 'text-slate-950'} text-2xl font-bold mb-3`}>{project.title}</h3>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-4 text-sm leading-relaxed`}>{project.description}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, fidx) => (
                    <span key={fidx} className={`${darkMode ? 'bg-slate-700 text-blue-300' : 'bg-slate-100 text-blue-700'} text-xs px-2 py-1 rounded`}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'border-slate-700' : 'border-slate-200'} mb-6 pb-6 border-b`}>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tidx) => (
                    <span key={tidx} className={`${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-700'} text-xs px-3 py-1 rounded-full`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a href={project.liveLink} className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors flex-1 justify-center py-2 border border-blue-400 rounded-lg hover:bg-blue-500 hover:text-white font-semibold">
                  <span>Details</span>
                  <FaExternalLinkAlt size={14} />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? 'text-slate-300 hover:text-white border-slate-600 hover:border-slate-400' : 'text-slate-700 hover:text-slate-950 border-slate-300 hover:border-slate-500'} flex items-center space-x-2 transition-colors flex-1 justify-center py-2 border rounded-lg font-semibold`}
                >
                  <span>Code</span>
                  <FaGithub size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/jomariencepto?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

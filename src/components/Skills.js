import React from 'react';
import { FaReact, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiJavascript, SiTailwindcss, SiVuedotjs } from 'react-icons/si';

export default function Skills({ darkMode }) {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: SiHtml5, level: 80 },
        { name: 'CSS', icon: SiCss3, level: 80 },
        { name: 'JavaScript', icon: SiJavascript, level: 78 },
        { name: 'React', icon: FaReact, level: 45 },
        { name: 'Vue.js', icon: SiVuedotjs, level: 40 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: FaPython, level: 78 },
        { name: 'REST API Concepts', level: 62 },
        { name: 'Server-side Logic', level: 65 },
        { name: 'Data Processing', level: 70 },
      ],
    },
    {
      title: 'Systems',
      skills: [
        { name: 'Order Management', level: 76 },
        { name: 'Billing Workflows', level: 76 },
        { name: 'Database Design', level: 72 },
        { name: 'TF-IDF', level: 68 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 70 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 65 },
        { name: 'Debugging', level: 70 },
        { name: 'Documentation', level: 68 },
      ],
    },
  ];

  return (
    <section id="skills" className={`${darkMode ? 'bg-slate-900' : 'bg-slate-50'} py-20 px-4 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`${darkMode ? 'text-white' : 'text-slate-950'} section-title`}>Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-blue-400 mb-8">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, sidx) => (
                  <div key={sidx}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        {skill.icon && <skill.icon size={24} className="text-blue-400" />}
                        <span className={`${darkMode ? 'text-white' : 'text-slate-900'} font-semibold`}>{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className={`${darkMode ? 'bg-slate-700' : 'bg-slate-200'} w-full rounded-full h-3`}>
                      <div
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-400 mb-8">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'REST APIs',
              'Responsive Design',
              'Order & Billing Systems',
              'Exam Generation',
              'Term Frequency',
              'Inverse Document Frequency',
              'Database CRUD',
              'Project Documentation',
            ].map((skill, idx) => (
              <div key={idx} className={`${darkMode ? 'card' : 'card-light'} text-center`}>
                <p className={`${darkMode ? 'text-slate-200' : 'text-slate-800'} font-semibold`}>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

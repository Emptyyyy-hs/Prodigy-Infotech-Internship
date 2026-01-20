
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
          <div className="space-y-2">
            <h2 className="text-6xl md:text-8xl serif italic dark:text-white">Recent <span className="text-neutral-400">Works</span></h2>
            <p className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">Built with passion 🛠️</p>
          </div>
          <div className="hidden md:block">
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Selected Works / 0{PROJECTS.length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bento-card p-5 group flex flex-col h-full hover:border-accent transition-all duration-300 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl">
              <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden mb-6 border border-neutral-100 dark:border-neutral-800 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 dark:text-neutral-100 leading-tight group-hover:text-accent transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black text-neutral-500 dark:text-neutral-400 uppercase border border-neutral-200 dark:border-neutral-700 px-2.5 py-1 rounded-full bg-neutral-50 dark:bg-neutral-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
                  <a href={project.link} className="text-[10px] font-black uppercase tracking-widest text-neutral-900 dark:text-white flex items-center group/link">
                    Explore Case <span className="ml-2 group-hover/link:translate-x-1 transition-transform inline-block">→</span>
                  </a>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-accent text-xs">
                    0{project.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bento-card border-none bg-neutral-950 dark:bg-neutral-900 text-white p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-5xl md:text-6xl serif italic leading-none mb-6 text-accent">Power <br/>Stack</h2>
              <p className="text-sm text-neutral-400 italic leading-relaxed">
                Focused on high-performance web development and modern backend systems. 💻
              </p>
            </div>
            
            {categories.map(cat => (
              <div key={cat}>
                <h3 className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.5em] mb-10 border-b border-neutral-800 pb-2">{cat}</h3>
                <ul className="space-y-8">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <li key={skill.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm tracking-tight text-neutral-100">{skill.name}</span>
                        <span className="text-[10px] font-black text-accent italic">{skill.level}%</span>
                      </div>
                      <div className="w-full h-[3px] bg-neutral-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-accent transition-all duration-1000" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

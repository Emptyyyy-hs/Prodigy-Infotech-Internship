
import React from 'react';
import { EXPERIENCES, EDUCATIONS, USER_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bento-card bg-neutral-950 dark:bg-neutral-900 text-white shadow-2xl border-none">
            <h2 className="text-5xl md:text-6xl serif italic mb-8 text-white">About Me</h2>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8 italic font-medium">
              Currently an IT student at <span className="text-accent font-black">Tolani College</span>, focused on modern software engineering. 
              My motto: <span className="text-white font-black border-b-4 border-accent uppercase">{USER_INFO.motto}</span>. 
              Efficiency and clean architecture are my primary goals in every project.
            </p>
            
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-8">Work Experience</h3>
            <div className="space-y-10">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="pb-8 border-b border-neutral-800 last:border-0">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-black text-3xl text-white tracking-tight">{exp.company}</h4>
                    <span className="text-[10px] font-black text-accent bg-accent/20 px-4 py-1.5 rounded-full border border-accent/30 uppercase tracking-widest shadow-sm">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-accent text-sm font-black mb-6 uppercase tracking-widest">{exp.position}</p>
                  <ul className="space-y-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-lg text-neutral-200 flex items-start leading-snug">
                        <span className="text-accent mr-4 mt-1">●</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bento-card shadow-lg bg-white dark:bg-neutral-900">
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter dark:text-white">Academic Journey</h2>
              {EDUCATIONS.map((edu, i) => (
                <div key={i} className="flex flex-col p-8 bg-neutral-50 dark:bg-neutral-800 rounded-3xl border border-neutral-100 dark:border-neutral-800">
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-black text-2xl text-neutral-900 dark:text-white leading-tight">{edu.institution}</div>
                    <div className="text-[10px] font-black text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-lg">{edu.year}</div>
                  </div>
                  <div className="text-lg font-bold text-neutral-500 dark:text-neutral-400 italic">{edu.degree}</div>
                </div>
              ))}
              <div className="mt-8 p-8 rounded-3xl bg-accent text-white shadow-xl shadow-accent/20">
                <p className="text-lg font-black leading-tight mb-2 uppercase">Core Focus</p>
                <p className="text-sm font-bold opacity-90 leading-relaxed">
                  Specializing in Web Systems and full-stack development. I am dedicated to mastering modern tech stacks and system scalability.
                </p>
              </div>
            </div>
            
            <div className="bento-card bg-neutral-950 text-white border-none relative overflow-hidden group shadow-2xl flex flex-col justify-center min-h-[250px]">
              <div className="relative z-10">
                <h3 className="text-6xl md:text-7xl serif italic mb-4 leading-none text-accent">Software <br/> Innovation</h3>
                <p className="text-xl font-bold text-neutral-200 max-w-xs">
                  Relentless pursuit of engineering excellence through advanced project-based development.
                </p>
              </div>
              <div className="absolute -right-10 -bottom-10 text-[15rem] text-white/5 font-black italic select-none pointer-events-none uppercase">Code</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import { FINAL_YEAR_PROJECT } from '../constants';

const Mediscan: React.FC = () => {
  return (
    <section id="final-year" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bento-card border-accent/30 dark:border-accent/30 bg-white dark:bg-neutral-900 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white shadow-lg">🏆</div>
                <div className="text-xs font-black text-accent uppercase tracking-[0.4em]">Final Year Project</div>
              </div>
              <h2 className="text-6xl md:text-8xl serif italic mb-8 dark:text-white">{FINAL_YEAR_PROJECT.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-10 italic">
                "{FINAL_YEAR_PROJECT.description}"
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                  <p className="text-[10px] font-black uppercase text-neutral-400 mb-1">Role</p>
                  <p className="text-sm font-bold dark:text-neutral-100">{FINAL_YEAR_PROJECT.role}</p>
                </div>
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                  <p className="text-[10px] font-black uppercase text-neutral-400 mb-1">Impact</p>
                  <p className="text-xs font-bold dark:text-neutral-100">{FINAL_YEAR_PROJECT.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {FINAL_YEAR_PROJECT.tech.map((t, i) => (
                  <span key={i} className="px-4 py-1.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-[10px] font-black rounded-full uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative aspect-square lg:aspect-video rounded-3xl overflow-hidden border-4 border-neutral-100 dark:border-neutral-800 shadow-inner">
               <img 
                 src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" 
                 alt="Medical Tech Analysis"
                 className="w-full h-full object-cover grayscale-0 dark:grayscale-[0.2]"
               />
               <div className="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>
               <div className="absolute bottom-6 right-6 p-4 glass rounded-2xl border border-white/20 shadow-xl hidden sm:block">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white">Diagnostic Analysis System</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mediscan;

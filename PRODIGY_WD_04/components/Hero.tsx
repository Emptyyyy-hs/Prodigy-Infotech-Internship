import React from 'react';
import { USER_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-4 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Headline */}
          <div className="lg:col-span-8 bento-card flex flex-col justify-between min-h-[400px] border-none shadow-none bg-transparent dark:bg-transparent !p-0">
            <div className="bento-card flex flex-col justify-between h-full w-full">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Available for hire</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black serif italic leading-[0.85] dark:text-white">
                  {USER_INFO.motto}
                </h1>
                <div className="flex items-center space-x-3 text-neutral-500 dark:text-neutral-400">
                  <span className="h-[1px] w-12 bg-neutral-300 dark:bg-neutral-700"></span>
                  <p className="text-xl font-bold tracking-tight">BSc IT @ Tolani College</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col md:flex-row items-end justify-between">
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">
                  {USER_INFO.bio} <br/> 
                  <span className="font-bold text-accent italic mt-2 inline-block">Crafting high-performance web experiences.</span>
                </p>
                <div className="mt-6 md:mt-0 flex space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-xl shadow-sm">
                     💻
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-xl shadow-sm">
                     🛠️
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-4 bento-card p-0 overflow-hidden relative group h-[400px] shadow-2xl bg-neutral-900 dark:bg-neutral-900 flex flex-col items-center justify-center border-none">
            <div className="relative w-56 h-56 mb-4">
              <svg viewBox="0 0 200 200" className="w-full h-full text-white/10 fill-current">
                <circle cx="100" cy="70" r="50" className="text-white/20" />
                <path d="M100,130 C60,130 20,150 20,190 L180,190 C180,150 140,130 100,130 Z" className="text-white/10" />
              </svg>
              <div className="absolute inset-0 rounded-full border-8 border-accent/20"></div>
              <div className="absolute inset-4 rounded-full border-2 border-white/5"></div>
            </div>
            
            <div className="text-center px-8 relative z-10">
               <p className="font-black text-white text-4xl uppercase tracking-tighter mb-1">{USER_INFO.name}</p>
               <div className="flex items-center justify-center space-x-2">
                 <span className="w-2 h-2 rounded-full bg-accent"></span>
                 <p className="text-[10px] text-neutral-400 font-black uppercase tracking-[0.2em]">Prodigy Infotech Intern</p>
               </div>
            </div>
            <div className="absolute top-0 right-0 p-8 text-white/5 text-8xl font-black italic select-none uppercase">Hitesh</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
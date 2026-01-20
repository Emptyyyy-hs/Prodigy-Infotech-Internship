
import React from 'react';
import { USER_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-neutral-900 dark:bg-neutral-800 text-white rounded-[48px] overflow-hidden">
          <div className="p-12 md:p-24 text-center">
            <h2 className="text-6xl md:text-8xl serif italic leading-none mb-12">
              Let's <span className="text-neutral-500">collaborate.</span>
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-12">
              <div className="space-y-4">
                <p className="text-accent font-black uppercase tracking-[0.2em] text-xs">Reach out directly</p>
                <a 
                  href={`mailto:${USER_INFO.email}`} 
                  className="text-2xl md:text-4xl font-bold hover:text-accent transition-colors break-all"
                >
                  {USER_INFO.email}
                </a>
              </div>

              <div className="flex justify-center space-x-8 md:space-x-12">
                {Object.entries(USER_INFO.socials).map(([name, url]) => (
                  <a key={name} href={url} className="text-neutral-500 font-bold uppercase tracking-widest text-[10px] hover:text-white flex flex-col items-center">
                    <span className="mb-2">↗</span> {name}
                  </a>
                ))}
              </div>

              <div className="pt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-neutral-600">
                <p>© {new Date().getFullYear()} — Hitesh | BSc IT</p>
                <p className="mt-4 md:mt-0 italic">{USER_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

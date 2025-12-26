import React from 'react';
import { Lap } from '../types';
import { formatTime } from '../utils/timeFormatter';

interface LapListProps {
  laps: Lap[];
  theme: 'dark' | 'light';
}

const LapList: React.FC<LapListProps> = ({ laps, theme }) => {
  if (laps.length === 0) return null;

  const isDark = theme === 'dark';

  return (
    <div className={`w-full max-w-lg overflow-hidden rounded-[3rem] border-2 transition-all duration-700 slide-in-right h-[400px] md:h-[500px] flex flex-col font-body
      ${isDark 
        ? 'bg-zinc-900/90 border-zinc-700/80 backdrop-blur-3xl dark-box-shadow' 
        : 'bg-white border-slate-200 backdrop-blur-xl shadow-2xl'}`}>
      <div className={`px-10 py-6 border-b-2 flex justify-between font-header text-[10px] tracking-[0.4em] font-bold uppercase
        ${isDark ? 'border-zinc-800 text-zinc-400' : 'border-slate-100 text-slate-400'}`}>
        <span>Lap #</span>
        <span>Interval</span>
        <span>Total</span>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {laps.map((lap) => {
          const lTime = formatTime(lap.time);
          const oTime = formatTime(lap.overallTime);
          
          return (
            <div key={lap.id} 
              className={`px-10 py-5 flex justify-between items-center border-b last:border-0 transition-all group
                ${isDark 
                  ? 'border-zinc-800/50 text-zinc-100 hover:bg-cyan-500/5' 
                  : 'border-slate-50 text-slate-800 hover:bg-blue-500/5'}`}>
              <span className="opacity-40 group-hover:opacity-100 transition-opacity font-bold text-[11px] tracking-widest uppercase">L {lap.id.toString().padStart(2, '0')}</span>
              <span className={`font-bold text-xl font-timer ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                {lTime.m}:{lTime.s}.<small className="text-[0.7em] opacity-80 font-semibold">{lTime.c}</small>
              </span>
              <span className="font-semibold text-lg opacity-60 group-hover:opacity-100 font-timer">
                {oTime.m}:{oTime.s}.<small className="text-[0.7em] opacity-50 font-medium">{oTime.c}</small>
              </span>
            </div>
          );
        })}
      </div>
      <div className={`p-5 text-center text-[10px] tracking-[0.3em] font-black uppercase opacity-40
        ${isDark ? 'text-zinc-300 border-t-2 border-zinc-800' : 'text-slate-500 border-t border-slate-100'}`}>
        Session Splits ({laps.length})
      </div>
    </div>
  );
};

export default LapList;
import React from 'react';
import { formatTime } from '../utils/timeFormatter';

interface TimerDisplayProps {
  time: number;
  isRunning: boolean;
  theme: 'dark' | 'light';
  hasLaps: boolean;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time, isRunning, theme, hasLaps }) => {
  const { h, m, s, c } = formatTime(time);
  
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-slate-900';
  const accentColor = isDark ? 'text-cyan-400' : 'text-blue-600';

  return (
    <div className={`relative p-8 md:p-14 rounded-[3.5rem] border-2 transition-all duration-700 flex flex-col items-center justify-center 
      ${hasLaps ? 'min-w-[280px] md:min-w-[450px]' : 'min-w-[320px] md:min-w-[600px] scale-105'}
      ${isDark 
        ? `bg-zinc-900/90 border-zinc-700/80 backdrop-blur-3xl dark-box-shadow ${isRunning ? 'running-glow' : ''}` 
        : `bg-white border-slate-200 backdrop-blur-md shadow-2xl shadow-slate-200 ${isRunning ? 'ring-4 ring-blue-50' : ''}`}`}>
      
      {/* Background glow when running */}
      <div className={`absolute -inset-1 rounded-[4rem] -z-10 transition-opacity duration-1000 blur-2xl
        ${isDark ? 'bg-cyan-500/10' : 'bg-blue-400/5'} ${isRunning ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className={`flex items-baseline font-timer select-none ${textColor}`}>
        {h !== '00' && (
          <>
            <span className="text-4xl md:text-7xl font-bold tracking-tight">{h}</span>
            <span className={`text-2xl md:text-5xl mx-1 opacity-20 ${accentColor}`}>:</span>
          </>
        )}
        <div className="flex flex-col items-center">
          <span className="text-6xl md:text-9xl font-bold tracking-tighter tabular-nums">{m}</span>
        </div>
        <span className={`text-3xl md:text-5xl mx-1 font-bold ${isRunning ? 'animate-pulse' : 'opacity-40'} ${accentColor}`}>:</span>
        <div className="flex flex-col items-center">
          <span className="text-6xl md:text-9xl font-bold tracking-tighter tabular-nums">{s}</span>
        </div>
        <span className="text-3xl md:text-5xl mx-1 opacity-10">.</span>
        <div className="flex flex-col items-center">
          <span className={`${accentColor} text-4xl md:text-8xl font-bold w-[1.5ch] tabular-nums`}>{c}</span>
        </div>
      </div>
      
      <div className={`mt-8 h-1.5 w-48 rounded-full overflow-hidden transition-all duration-500 ${isDark ? 'bg-zinc-800' : 'bg-slate-100'} ${isRunning ? 'opacity-100' : 'opacity-10'}`}>
        <div className={`h-full bg-current transition-all duration-75 ease-linear ${accentColor}`} style={{ width: `${(parseInt(c) * 1)}%` }}></div>
      </div>
    </div>
  );
};

export default TimerDisplay;
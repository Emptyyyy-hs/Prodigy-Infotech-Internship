import React from 'react';

interface ControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onLap: () => void;
  time: number;
  theme: 'dark' | 'light';
}

const Controls: React.FC<ControlsProps> = ({ 
  isRunning, onStart, onPause, onReset, onLap, time, theme 
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="flex gap-8 md:gap-12 mt-16 items-center">
      {/* Reset / Lap Button - High Visibility */}
      <button
        onClick={isRunning ? onLap : onReset}
        disabled={time === 0 && !isRunning}
        className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-[10px] font-black transition-all transform active:scale-90 disabled:opacity-20 disabled:grayscale disabled:cursor-not-allowed border-2
          ${isDark 
            ? 'bg-zinc-800 border-zinc-600 text-zinc-100 hover:text-white hover:border-cyan-400 shadow-xl' 
            : 'bg-white border-slate-300 text-slate-800 hover:text-blue-600 hover:border-blue-400 shadow-lg'}`}
      >
        <span className="relative z-10 tracking-[0.25em]">{isRunning ? 'LAP' : 'RESET'}</span>
      </button>

      {/* Start / Pause Button */}
      <button
        onClick={isRunning ? onPause : onStart}
        className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-xs font-black tracking-widest transition-all transform hover:scale-110 active:scale-95 shadow-2xl
          ${isRunning 
            ? 'bg-rose-500 text-white shadow-rose-500/40 hover:bg-rose-600' 
            : 'bg-cyan-500 text-white shadow-cyan-500/40 hover:bg-cyan-600'}`}
      >
        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current scale-75"></div>
        <span className="relative z-10">{isRunning ? 'PAUSE' : 'START'}</span>
      </button>

      {/* Spacer for layout symmetry */}
      <div className="w-16 h-16 md:w-20 md:h-20 opacity-0 pointer-events-none"></div>
    </div>
  );
};

export default Controls;
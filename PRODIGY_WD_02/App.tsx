
import React, { useState, useEffect } from 'react';
import { useStopwatch } from './hooks/useStopwatch';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import LapList from './components/LapList';
import { ThemeMode } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.DARK);
  const { time, isRunning, laps, start, pause, reset, addLap } = useStopwatch();

  const toggleTheme = () => {
    setTheme(prev => prev === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
  };

  const isDark = theme === ThemeMode.DARK;
  const hasLaps = laps.length > 0;

  return (
    <div className={`min-h-screen smooth-transition flex flex-col items-center justify-center p-6 md:p-12 selection:bg-cyan-500 selection:text-white overflow-hidden
      ${isDark 
        ? 'bg-black text-white' 
        : 'bg-slate-50 text-slate-900'}`}
        style={{
          background: isDark 
            ? 'radial-gradient(circle at top right, #0c4a6e 0%, #000 80%)' 
            : 'radial-gradient(circle at top right, #eff6ff 0%, #f1f5f9 80%)'
        }}>
      
      {/* Background Decorative Grid */}
      <div className={`fixed inset-0 pointer-events-none opacity-5 transition-opacity duration-1000 ${isRunning ? 'opacity-10' : 'opacity-5'}`}
           style={{
             backgroundImage: `linear-gradient(${isDark ? '#334155' : '#cbd5e1'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#334155' : '#cbd5e1'} 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}></div>

      <header className="fixed top-0 left-0 right-0 p-8 flex justify-between items-center max-w-7xl mx-auto w-full z-50">
        <h1 className={`font-header text-lg md:text-xl font-black tracking-tighter transition-all ${isDark ? 'text-white' : 'text-slate-900'}`}>
          TASK <span className={isDark ? 'text-cyan-400' : 'text-blue-600'}>2</span>
        </h1>
        
        <button 
          onClick={toggleTheme}
          className={`group flex items-center gap-3 px-5 py-2 rounded-full transition-all active:scale-95 border backdrop-blur-md
            ${isDark 
              ? 'bg-slate-900/80 border-slate-800 text-yellow-400 hover:border-yellow-400/50' 
              : 'bg-white/80 border-slate-200 text-slate-600 hover:border-blue-400/50 shadow-sm'}`}
        >
          <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-40 font-tech">Display</span>
          <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-sm transition-transform group-hover:rotate-12`}></i>
        </button>
      </header>

      <main className={`w-full max-w-7xl flex transition-all duration-1000 ease-in-out px-4 gap-8 md:gap-16
        ${hasLaps ? 'flex-col lg:flex-row items-center justify-center' : 'flex-col items-center justify-center'}`}>
        
        {/* Left Side: Timer & Controls */}
        <div className={`flex flex-col items-center transition-all duration-1000 w-full 
          ${hasLaps ? 'lg:w-1/2 lg:items-end' : 'lg:w-full lg:items-center'}`}>
          
          <div className="transform transition-all duration-700">
            <TimerDisplay time={time} isRunning={isRunning} theme={theme} hasLaps={hasLaps} />
          </div>
          
          <div className={`transition-all duration-700 ${hasLaps ? 'mr-0 lg:mr-10' : ''}`}>
            <Controls 
              isRunning={isRunning} 
              onStart={start} 
              onPause={pause} 
              onReset={reset} 
              onLap={addLap}
              time={time}
              theme={theme}
            />
          </div>
        </div>

        {/* Right Side: Lap List */}
        {hasLaps && (
          <div className="w-full lg:w-1/2 flex justify-start items-center">
            <LapList laps={laps} theme={theme} />
          </div>
        )}
      </main>

      <footer className={`fixed bottom-10 font-tech text-[9px] tracking-[0.6em] font-bold uppercase opacity-20 transition-all hover:opacity-100
        ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Dynamic Timing Interface
      </footer>
    </div>
  );
};

export default App;

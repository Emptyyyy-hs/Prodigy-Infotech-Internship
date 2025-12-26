
import React from 'react';
import { GameSettings, COLOR_OPTIONS, FONT_OPTIONS, BoardTheme } from '../types';

interface SettingsProps {
  settings: GameSettings;
  onUpdate: (settings: GameSettings) => void;
}

const Settings: React.FC<SettingsProps> = ({ settings, onUpdate }) => {
  const handleChange = (key: keyof GameSettings, value: any) => {
    onUpdate({ ...settings, [key]: value });
  };

  const themes: BoardTheme[] = ['modern', 'glass', 'retro', 'neon', 'royal', 'clay', 'cyber', 'minimal'];

  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">
      <h2 className="text-sm font-black mb-8 tracking-[0.2em] text-slate-400 border-b border-slate-50 pb-4">STUDIO SETUP</h2>
      
      <div className="space-y-8 max-h-[480px] overflow-y-auto pr-2 scrollbar-thin">
        
        {/* Names */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Player X</label>
            <input 
              type="text" 
              value={settings.playerXName}
              onChange={(e) => handleChange('playerXName', e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-700 placeholder-slate-300"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Player O</label>
            <input 
              type="text" 
              value={settings.playerOName}
              onChange={(e) => handleChange('playerOName', e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-700 placeholder-slate-300"
            />
          </div>
        </div>

        {/* Colors */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">X Identity</label>
            <div className="flex flex-wrap gap-2">
              {COLOR_OPTIONS.map(color => (
                <button 
                  key={color}
                  onClick={() => handleChange('xColor', color)}
                  className={`w-7 h-7 rounded-full border-2 transition-all ${settings.xColor === color ? 'border-indigo-600 scale-125 shadow-lg' : 'border-transparent shadow-sm'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">O Identity</label>
            <div className="flex flex-wrap gap-2">
              {COLOR_OPTIONS.map(color => (
                <button 
                  key={color}
                  onClick={() => handleChange('oColor', color)}
                  className={`w-7 h-7 rounded-full border-2 transition-all ${settings.oColor === color ? 'border-indigo-600 scale-125 shadow-lg' : 'border-transparent shadow-sm'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Font Choice */}
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Typography</label>
          <div className="grid grid-cols-1 gap-2">
            {FONT_OPTIONS.map(font => (
              <button 
                key={font.value}
                onClick={() => handleChange('fontFamily', font.value)}
                className={`text-left px-4 py-3 rounded-xl text-xs border-2 transition-all ${settings.fontFamily === font.value ? 'bg-indigo-600 border-indigo-600 text-white font-black shadow-md' : 'bg-slate-50 text-slate-500 border-transparent hover:border-slate-100'}`}
              >
                {font.name}
              </button>
            ))}
          </div>
        </div>

        {/* Board Theme */}
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Board Arena</label>
          <div className="grid grid-cols-2 gap-3">
            {themes.map(theme => (
              <button 
                key={theme}
                onClick={() => handleChange('boardTheme', theme)}
                className={`px-3 py-3 rounded-xl text-[10px] border-2 font-black uppercase tracking-widest transition-all ${settings.boardTheme === theme ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' : 'bg-slate-50 text-slate-400 border-transparent hover:border-slate-100'}`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

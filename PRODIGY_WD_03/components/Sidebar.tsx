
import React from 'react';
import { GameSettings, ScoreBoard, Player } from '../types';

interface SidebarProps {
  settings: GameSettings;
  scores: ScoreBoard;
  currentPlayer: Player;
  winner: Player | 'Draw' | null;
}

const Sidebar: React.FC<SidebarProps> = ({ settings, scores, currentPlayer, winner }) => {
  const isXActive = !winner && currentPlayer === 'X';
  const isOActive = !winner && currentPlayer === 'O';

  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">
      <h2 className="text-sm font-black mb-8 tracking-[0.2em] text-slate-400 border-b border-slate-50 pb-4">SCOREBOARD</h2>
      
      <div className="space-y-6">
        {/* Player X */}
        <div className={`flex items-center justify-between p-5 rounded-3xl transition-all duration-500 border-2 ${isXActive ? 'bg-indigo-50/50 border-indigo-200 scale-105 shadow-xl shadow-indigo-500/5' : 'bg-slate-50/50 border-transparent opacity-60'}`}>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-3xl shadow-lg" style={{ backgroundColor: `${settings.xColor}15`, color: settings.xColor }}>
              X
            </div>
            <div>
              <p className="font-black text-slate-800 truncate max-w-[130px] leading-tight">{settings.playerXName}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mt-1">{isXActive ? '• Current Turn' : 'Waiting'}</p>
            </div>
          </div>
          <div className="text-4xl font-black text-slate-900">{scores.X}</div>
        </div>

        {/* Player O */}
        <div className={`flex items-center justify-between p-5 rounded-3xl transition-all duration-500 border-2 ${isOActive ? 'bg-indigo-50/50 border-indigo-200 scale-105 shadow-xl shadow-indigo-500/5' : 'bg-slate-50/50 border-transparent opacity-60'}`}>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-3xl shadow-lg" style={{ backgroundColor: `${settings.oColor}15`, color: settings.oColor }}>
              O
            </div>
            <div>
              <p className="font-black text-slate-800 truncate max-w-[130px] leading-tight">{settings.playerOName}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mt-1">{isOActive ? '• Current Turn' : 'Waiting'}</p>
            </div>
          </div>
          <div className="text-4xl font-black text-slate-900">{scores.O}</div>
        </div>

        {/* Draws */}
        <div className="flex items-center justify-between p-5 rounded-3xl border border-slate-100 bg-slate-50/30">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl bg-white text-slate-400 shadow-sm">
              -
            </div>
            <div>
              <p className="font-bold text-slate-400 uppercase tracking-widest text-[11px]">Draws</p>
            </div>
          </div>
          <div className="text-4xl font-black text-slate-300">{scores.draws}</div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-50">
        <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>Match Series</span>
          <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-[10px]">{scores.X + scores.O + scores.draws} Games</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

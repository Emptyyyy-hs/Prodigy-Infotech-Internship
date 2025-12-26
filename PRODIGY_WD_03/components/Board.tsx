
import React from 'react';
import { CellValue, GameSettings, Player } from '../types';

interface BoardProps {
  cells: CellValue[];
  onClick: (index: number) => void;
  settings: GameSettings;
  winner: Player | 'Draw' | null;
  winningLine: number[] | null;
  currentPlayer: Player;
}

const Board: React.FC<BoardProps> = ({ cells, onClick, settings, winner, winningLine, currentPlayer }) => {
  const getThemeClasses = () => {
    switch (settings.boardTheme) {
      case 'glass':
        return 'bg-white/30 backdrop-blur-3xl border border-white/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]';
      case 'retro':
        return 'bg-[#2b1b1b] border-[12px] border-[#5c3c3c] shadow-[12px_12px_0px_#1a0f0f]';
      case 'neon':
        return 'bg-slate-950 border-4 border-indigo-500 shadow-[0_0_50px_rgba(99,102,241,0.3)]';
      case 'royal':
        return 'bg-gradient-to-br from-indigo-950 to-slate-900 border-4 border-amber-500 shadow-[0_30px_70px_-12px_rgba(0,0,0,0.5)]';
      case 'clay':
        return 'bg-[#e0e5ec] border-[16px] border-[#e0e5ec] shadow-[20px_20px_60px_#bec8d4,-20px_-20px_60px_#ffffff]';
      case 'cyber':
        return 'bg-slate-950 border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)]';
      case 'minimal':
        return 'bg-slate-50 border-2 border-slate-200 shadow-sm';
      default: // modern
        return 'bg-white border border-slate-200 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)]';
    }
  };

  const getCellClasses = (index: number) => {
    const base = "group relative flex items-center justify-center text-7xl md:text-8xl font-black cursor-pointer transition-all duration-300 rounded-[1.25rem] select-none";
    const isWinningCell = winningLine?.includes(index);
    
    let themeSpecific = "";
    switch (settings.boardTheme) {
      case 'glass':
        themeSpecific = "bg-white/40 border border-white/60 hover:bg-white/60 hover:scale-[1.04] active:scale-95 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] backdrop-blur-sm";
        break;
      case 'retro':
        themeSpecific = "border-4 border-[#5c3c3c] rounded-none hover:bg-white/10 active:translate-y-1 bg-[#3a2626]";
        break;
      case 'neon':
        themeSpecific = "bg-slate-900/50 border border-indigo-500/40 hover:border-indigo-400 hover:bg-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]";
        break;
      case 'royal':
        themeSpecific = "bg-indigo-900/40 border border-amber-500/30 hover:bg-amber-500/10 hover:border-amber-400 active:scale-95 shadow-inner";
        break;
      case 'clay':
        themeSpecific = "bg-[#e0e5ec] shadow-[6px_6px_12px_#bec8d4,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bec8d4,inset_-4px_-4px_8px_#ffffff]";
        break;
      case 'cyber':
        themeSpecific = "bg-black/80 border border-cyan-400/50 rounded-none hover:border-cyan-400 hover:bg-cyan-400/10 active:scale-95";
        break;
      case 'minimal':
        themeSpecific = "bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-none shadow-sm";
        break;
      default: // modern
        themeSpecific = "bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-indigo-300 hover:shadow-xl hover:scale-[1.02] active:scale-95";
    }

    const highlight = isWinningCell ? "win-pulse z-10 !scale-110 !opacity-100" : "";
    
    return `${base} ${themeSpecific} ${highlight} h-24 w-24 md:h-40 md:w-40`;
  };

  return (
    <div className={`relative p-5 md:p-8 rounded-[3rem] transition-all duration-700 float-soft ${getThemeClasses()} ${winner === 'Draw' ? 'shake' : ''}`}>
      {/* Dynamic Ambient Background Glow */}
      {!winner && (
        <div 
          className="absolute inset-0 rounded-[3rem] opacity-20 blur-[100px] transition-all duration-1000 -z-10"
          style={{ backgroundColor: currentPlayer === 'X' ? settings.xColor : settings.oColor }}
        />
      )}

      <div className="grid grid-cols-3 gap-3 md:gap-5">
        {cells.map((cell, i) => (
          <div 
            key={i} 
            onClick={() => onClick(i)}
            className={getCellClasses(i)}
          >
            {/* Inner Glow for Winning Cells */}
            {winningLine?.includes(i) && (
              <div 
                className="absolute inset-2 blur-2xl opacity-60 animate-pulse rounded-full"
                style={{ backgroundColor: cell === 'X' ? settings.xColor : settings.oColor }}
              />
            )}

            {cell && (
              <span 
                className="cell-appear drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] z-10"
                style={{ 
                  color: cell === 'X' ? settings.xColor : settings.oColor,
                  textShadow: settings.boardTheme === 'neon' || settings.boardTheme === 'cyber' 
                    ? `0 0 30px ${cell === 'X' ? settings.xColor : settings.oColor}` 
                    : (settings.boardTheme === 'royal' ? `0 4px 8px rgba(0,0,0,0.4)` : 'none')
                }}
              >
                {cell}
              </span>
            )}
            
            {!cell && !winner && (
               <span 
                className="opacity-0 group-hover:opacity-20 transition-all duration-300 scale-75 group-hover:scale-110 font-black z-10" 
                style={{ color: currentPlayer === 'X' ? settings.xColor : settings.oColor }}
               >
                 {currentPlayer}
               </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;

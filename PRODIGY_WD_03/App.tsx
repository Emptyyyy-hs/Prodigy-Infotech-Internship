
import React, { useState } from 'react';
import { Player, CellValue, GameSettings, ScoreBoard } from './types';
import Board from './components/Board';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';

const App: React.FC = () => {
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [scores, setScores] = useState<ScoreBoard>({ X: 0, O: 0, draws: 0 });
  const [settings, setSettings] = useState<GameSettings>({
    playerXName: 'Player 1',
    playerOName: 'Player 2',
    xColor: '#ef4444',
    oColor: '#3b82f6',
    fontFamily: 'font-["Inter"]',
    boardTheme: 'glass'
  });

  const checkWinner = (squares: CellValue[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a] as Player, line: lines[i] };
      }
    }
    if (!squares.includes(null)) return { winner: 'Draw' as const, line: null };
    return null;
  };

  const handleCellClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
      
      if (result.winner === 'X' || result.winner === 'O') {
        setScores(prev => ({ 
          ...prev, 
          [result.winner as string]: prev[result.winner as Player] + 1 
        }));
        // @ts-ignore
        window.confetti({ 
          particleCount: 150, 
          spread: 70, 
          origin: { y: 0.6 },
          colors: [result.winner === 'X' ? settings.xColor : settings.oColor, '#ffffff']
        });
      } else {
        setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
      }
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setWinningLine(null);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 });
    resetGame();
  };

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row p-6 lg:p-12 gap-10 transition-all duration-700 relative overflow-hidden ${settings.fontFamily} bg-[#f8fafc] text-slate-900`}>
      
      {/* Dynamic Background Blurs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[140px] opacity-15 bg-blue-400 -z-10 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[140px] opacity-15 bg-rose-400 -z-10 animate-pulse" />

      {/* Main Game Area */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <header className="mb-12 text-center">
          <h1 className="text-6xl lg:text-8xl font-black mb-4 tracking-tighter transition-all text-slate-900">
            TIC<span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 drop-shadow-sm">TAC</span>TOE
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-slate-200" />
            <p className="uppercase tracking-[0.4em] text-[11px] font-extrabold text-slate-400">Professional Studio</p>
            <span className="h-[2px] w-8 bg-slate-200" />
          </div>
        </header>

        <Board 
          cells={board} 
          onClick={handleCellClick} 
          settings={settings}
          winner={winner}
          winningLine={winningLine}
          currentPlayer={currentPlayer}
        />

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <button 
            onClick={resetGame}
            className="group relative px-12 py-5 font-black rounded-2xl transition-all active:scale-95 overflow-hidden bg-slate-900 text-white shadow-[0_15px_30px_-5px_rgba(15,23,42,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.4)]"
          >
            <span className="relative z-10 uppercase tracking-widest text-sm">Next Round</span>
            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-indigo-600" />
          </button>
          
          <button 
            onClick={resetScores}
            className="group px-12 py-5 font-bold rounded-2xl transition-all active:scale-95 border-2 bg-white text-slate-500 border-slate-200 hover:border-indigo-200 hover:text-indigo-600 shadow-sm"
          >
            <span className="uppercase tracking-widest text-sm">Reset All</span>
          </button>
        </div>

        {winner && (
          <div className="mt-12 text-center animate-bounce">
            <div className="inline-block px-10 py-5 rounded-[2rem] text-3xl font-black shadow-2xl bg-white/90 border border-slate-100 backdrop-blur-xl">
              {winner === 'Draw' ? (
                <span className="text-slate-500 flex items-center gap-3">
                  <span className="text-4xl">🤝</span> It's a draw!
                </span>
              ) : (
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🏆</span>
                  <span style={{ color: winner === 'X' ? settings.xColor : settings.oColor }}>
                    {winner === 'X' ? settings.playerXName : settings.playerOName}
                  </span>
                  <span className="text-slate-900">wins!</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Control Panel */}
      <div className="w-full lg:w-[26rem] flex flex-col gap-6 relative z-10">
        <Sidebar 
          settings={settings} 
          scores={scores} 
          currentPlayer={currentPlayer}
          winner={winner}
        />
        <Settings 
          settings={settings} 
          onUpdate={setSettings} 
        />
      </div>
    </div>
  );
};

export default App;


export type Player = 'X' | 'O';
export type CellValue = Player | null;

export type BoardTheme = 'modern' | 'glass' | 'retro' | 'neon' | 'royal' | 'clay' | 'cyber' | 'minimal';

export interface GameSettings {
  playerXName: string;
  playerOName: string;
  xColor: string;
  oColor: string;
  fontFamily: string;
  boardTheme: BoardTheme;
}

export interface ScoreBoard {
  X: number;
  O: number;
  draws: number;
}

export const FONT_OPTIONS = [
  { name: 'Inter (Modern)', value: 'font-["Inter"]' },
  { name: 'Playfair (Elegant)', value: 'font-["Playfair_Display"]' },
  { name: 'JetBrains (Tech)', value: 'font-["JetBrains_Mono"]' },
  { name: 'Bungee (Playful)', value: 'font-["Bungee"]' },
];

export const COLOR_OPTIONS = [
  '#ef4444', // red
  '#3b82f6', // blue
  '#10b981', // green
  '#f59e0b', // amber
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#06b6d4', // cyan
];

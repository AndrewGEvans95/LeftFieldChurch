export interface Game {
  id: string;
  date: string;
  day: string;
  opponent: string;
  location: string;
  time: string;
  result?: string;
  score?: {
    bulls: number;
    opponent: number;
    innings: number[];
  };
  events?: string[];
  promotions?: string[];
} 
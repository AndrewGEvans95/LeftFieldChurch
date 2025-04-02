'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Game } from '@/types/game';
import Link from 'next/link';

const games: Game[] = [
  {
    id: 'game-1',
    date: 'Mar 28',
    day: 'Fri',
    opponent: 'Norfolk',
    time: '6:35 PM',
    location: 'away',
    result: 'W, 9 - 2',
    events: ['W: I Seymour', 'L: T Ward']
  },
  {
    id: 'game-2',
    date: 'Mar 29',
    day: 'Sat',
    opponent: 'Norfolk',
    time: '6:35 PM',
    location: 'away',
    result: 'W, 9 - 3',
    events: ['W: J Hernández', 'L: R Alcantara']
  },
  {
    id: 'game-3',
    date: 'Mar 30',
    day: 'Sun',
    opponent: 'Norfolk',
    time: '1:05 PM',
    location: 'away',
    result: 'L, 2 - 8',
    events: ['W: L González', 'L: J Gerber']
  },
  {
    id: 'game-4',
    date: 'Apr 1',
    day: 'Tue',
    opponent: 'Sugar Land',
    time: '6:35 PM',
    location: 'home',
    events: ['Opening Night with Post-Game Fireworks']
  },
  {
    id: 'game-5',
    date: 'Apr 2',
    day: 'Wed',
    opponent: 'Sugar Land',
    time: '6:35 PM',
    location: 'home'
  },
  {
    id: 'game-6',
    date: 'Apr 3',
    day: 'Thu',
    opponent: 'Sugar Land',
    time: '6:35 PM',
    location: 'home'
  },
  {
    id: 'game-7',
    date: 'Apr 4',
    day: 'Fri',
    opponent: 'Sugar Land',
    time: '6:35 PM',
    location: 'home',
    events: ['Friday Night Fireworks']
  },
  {
    id: 'game-8',
    date: 'Apr 5',
    day: 'Sat',
    opponent: 'Sugar Land',
    time: '6:35 PM',
    location: 'home',
    events: ['Saturday Night Fireworks']
  },
  {
    id: 'game-9',
    date: 'Apr 6',
    day: 'Sun',
    opponent: 'Sugar Land',
    time: '1:05 PM',
    location: 'home',
    events: ['Kids Run the Bases']
  },
  {
    id: 'game-10',
    date: 'Apr 8',
    day: 'Tue',
    opponent: 'Jacksonville',
    time: '7:05 PM',
    location: 'away'
  },
  {
    id: 'game-11',
    date: 'Apr 9',
    day: 'Wed',
    opponent: 'Jacksonville',
    time: '7:05 PM',
    location: 'away'
  },
  {
    id: 'game-12',
    date: 'Apr 10',
    day: 'Thu',
    opponent: 'Jacksonville',
    time: '7:05 PM',
    location: 'away'
  },
  {
    id: 'game-13',
    date: 'Apr 11',
    day: 'Fri',
    opponent: 'Jacksonville',
    time: '7:05 PM',
    location: 'away'
  },
  {
    id: 'game-14',
    date: 'Apr 12',
    day: 'Sat',
    opponent: 'Jacksonville',
    time: '7:05 PM',
    location: 'away'
  },
  {
    id: 'game-15',
    date: 'Apr 13',
    day: 'Sun',
    opponent: 'Jacksonville',
    time: '3:05 PM',
    location: 'away'
  }
];

export default function GameScorecard() {
  const params = useParams();
  const gameId = params.gameId as string;
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`/api/games/${gameId}`);
        if (!response.ok) throw new Error('Failed to fetch game');
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error('Error fetching game:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [gameId]);

  if (loading) return <div>Loading...</div>;
  if (!game) return <div>Game not found</div>;

  const currentIndex = games.findIndex(g => g.id === gameId);
  const prevGame = currentIndex > 0 ? games[currentIndex - 1] : null;
  const nextGame = currentIndex < games.length - 1 ? games[currentIndex + 1] : null;

  return (
    <div className="zine-container">
      <h1 className="zine-title">Game Scorecard</h1>
      <div className="mb-8">
        <div className="schedule-game">
          <div className="game-header">
            <div className="game-date">
              {game.day} • {game.date}
            </div>
            <div className="game-opponent">
              {game.opponent}
            </div>
          </div>
          <div className="game-time">
            {game.time} at {game.location}
          </div>
          {game.result && (
            <div className="game-result">
              {game.result}
            </div>
          )}
          {game.events && game.events.length > 0 && (
            <div className="game-events">
              {game.events.join(' • ')}
            </div>
          )}
        </div>
      </div>

      <div className="mb-8">
        <div className="scorecard-container">
          <div className="scorecard">
            <div className="scorecard-header">
              <div className="team-name">Durham Bulls</div>
              <div className="innings">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="inning">{i + 1}</div>
                ))}
                <div className="total">R</div>
                <div className="total">H</div>
                <div className="total">E</div>
              </div>
            </div>
            <div className="scorecard-row">
              <div className="team-name">Bulls</div>
              <div className="innings">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="inning">-</div>
                ))}
                <div className="total">0</div>
                <div className="total">0</div>
                <div className="total">0</div>
              </div>
            </div>
            <div className="scorecard-row">
              <div className="team-name">Opponent</div>
              <div className="innings">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="inning">-</div>
                ))}
                <div className="total">0</div>
                <div className="total">0</div>
                <div className="total">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        {prevGame && (
          <Link href={`/scorecard/${prevGame.id}`} className="zine-button">
            Previous Game
          </Link>
        )}
        <Link href="/schedule" className="zine-button">
          Back to Schedule
        </Link>
        {nextGame && (
          <Link href={`/scorecard/${nextGame.id}`} className="zine-button">
            Next Game
          </Link>
        )}
      </div>
    </div>
  );
} 
"use client";

import { useState, useEffect } from 'react';
import { Game } from '@/types/game';
import Link from 'next/link';

export default function ChurchSchedule() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/games');
        if (!response.ok) throw new Error('Failed to fetch games');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <div>Loading...</div>;

  // Sort games by date
  const sortedGames = [...games].sort((a, b) => {
    const [monthA, dayA] = a.date.split(' ');
    const [monthB, dayB] = b.date.split(' ');
    const monthMap: { [key: string]: number } = {
      'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9
    };
    const dateA = new Date(2025, monthMap[monthA], parseInt(dayA));
    const dateB = new Date(2025, monthMap[monthB], parseInt(dayB));
    return dateA.getTime() - dateB.getTime();
  });

  // Get today's date at midnight for accurate comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const pastGames = sortedGames.filter(game => {
    const [month, day] = game.date.split(' ');
    const monthMap: { [key: string]: number } = {
      'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9
    };
    const gameDate = new Date(2025, monthMap[month], parseInt(day));
    gameDate.setHours(0, 0, 0, 0);
    return gameDate < today;
  });

  const upcomingGames = sortedGames.filter(game => {
    const [month, day] = game.date.split(' ');
    const monthMap: { [key: string]: number } = {
      'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9
    };
    const gameDate = new Date(2025, monthMap[month], parseInt(day));
    gameDate.setHours(0, 0, 0, 0);
    return gameDate >= today;
  });

  console.log('Today:', today);
  console.log('Past Games:', pastGames.map(g => g.date));
  console.log('Upcoming Games:', upcomingGames.map(g => g.date));

  return (
    <div className="schedule-container">
      <h2 className="text-2xl font-bold mb-4">Church Schedule</h2>
      
      {/* Past Games */}
      <div className="schedule-section">
        <h3 className="text-xl font-semibold mb-3">Previous Services</h3>
        <div className="space-y-4">
          {pastGames.slice(-2).map((game) => (
            <Link href={`/scorecard/${game.id}`} key={game.id} className="block">
              <div className={`schedule-game ${game.location}`}>
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
            </Link>
          ))}
        </div>
      </div>

      {/* Upcoming Games */}
      <div className="schedule-section">
        <h3 className="text-xl font-semibold mb-3">Upcoming Services</h3>
        <div className="space-y-4">
          {upcomingGames.slice(0, 3).map((game) => (
            <Link href={`/scorecard/${game.id}`} key={game.id} className="block">
              <div className={`schedule-game ${game.location}`}>
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
                {game.events && game.events.length > 0 && (
                  <div className="game-events">
                    {game.events.join(' • ')}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

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

      <style jsx>{`
        .schedule-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .schedule-section {
          margin-bottom: 2rem;
        }

        .schedule-game {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .schedule-game:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .schedule-game.home {
          border-left: 4px solid #457B9D;
          background: linear-gradient(to right, rgba(69, 123, 157, 0.05), white);
        }

        .schedule-game.away {
          border-left: 4px solid #E63946;
          background: linear-gradient(to right, rgba(230, 57, 70, 0.05), white);
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .game-date {
          font-weight: bold;
          color: #1D3557;
          font-size: 1.1rem;
        }

        .game-opponent {
          font-weight: bold;
          color: #1D3557;
          font-size: 1.1rem;
        }

        .game-time {
          color: #457B9D;
          margin-bottom: 0.5rem;
        }

        .game-result {
          font-size: 1.2rem;
          font-weight: bold;
          color: #E63946;
          margin: 0.5rem 0;
        }

        .game-events {
          color: #666;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        .scorecard {
          background: white;
          border: 2px solid #000;
          padding: 1rem;
          margin: 2rem auto;
          max-width: 800px;
          font-family: monospace;
          white-space: nowrap;
          overflow-x: auto;
        }

        .scorecard-header {
          display: flex;
          border-bottom: 1px solid #000;
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem;
          min-width: 800px;
        }

        .scorecard-row {
          display: flex;
          padding: 0.5rem 0;
          border-bottom: 1px solid #000;
          min-width: 800px;
        }

        .team-name {
          width: 100px;
          font-weight: bold;
          text-align: left;
          flex-shrink: 0;
        }

        .innings {
          display: flex;
          flex: 1;
          justify-content: flex-start;
          min-width: 700px;
          gap: 0;
        }

        .inning {
          width: 40px;
          text-align: center;
          border-right: 1px solid #000;
          flex-shrink: 0;
        }

        .total {
          width: 40px;
          text-align: center;
          font-weight: bold;
          border-left: 2px solid #000;
          flex-shrink: 0;
        }

        @media print {
          .schedule-container {
            padding: 0;
          }

          .schedule-game {
            break-inside: avoid;
            box-shadow: none;
            border: 1px solid #ddd;
            margin-bottom: 0.5rem;
          }

          .schedule-game:hover {
            transform: none;
            box-shadow: none;
          }

          .scorecard {
            page-break-inside: avoid;
            margin: 0;
            padding: 0;
            border: none;
            max-width: none;
          }

          .scorecard-header,
          .scorecard-row {
            min-width: 100%;
          }

          .innings {
            min-width: 0;
          }

          .inning,
          .total {
            width: 35px;
          }
        }
      `}</style>
    </div>
  );
} 
"use client";

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Game } from '@/types/game';

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

  return (
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

      <style jsx>{`
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
          width: 35px;
          text-align: center;
          border-right: 1px solid #000;
          flex-shrink: 0;
        }

        .total {
          width: 35px;
          text-align: center;
          font-weight: bold;
          border-left: 2px solid #000;
          flex-shrink: 0;
        }

        @media print {
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
            width: 30px;
          }
        }
      `}</style>
    </div>
  );
} 
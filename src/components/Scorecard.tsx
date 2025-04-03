'use client';

interface ScorecardProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  location: string;
}

const Scorecard: React.FC<ScorecardProps> = ({ homeTeam, awayTeam, date, location }) => {
  return (
    <div className="scorecard-container">
      <div className="scorecard">
        <div className="game-info">
          <h2>{homeTeam} vs {awayTeam}</h2>
          <p>{date} at {location}</p>
        </div>
        <div className="scorecard-header">
          <div className="team-name">{homeTeam}</div>
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
          <div className="team-name">{awayTeam}</div>
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

      <div className="mt-8 grid grid-cols-2 gap-8">
        {/* Pitchers */}
        <div>
          <h3 className="font-bold mb-2">Pitchers</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600">Winning Pitcher:</div>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-300 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <div className="text-sm text-gray-600">Losing Pitcher:</div>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-300 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <div className="text-sm text-gray-600">Save:</div>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-300 focus:border-accent focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Game Info */}
        <div>
          <h3 className="font-bold mb-2">Game Information</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600">Time of Game:</div>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-300 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <div className="text-sm text-gray-600">Attendance:</div>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-300 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <div className="text-sm text-gray-600">Weather:</div>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-300 focus:border-accent focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mt-8">
        <h3 className="font-bold mb-2">Notes</h3>
        <textarea
          className="w-full h-32 bg-transparent border border-gray-300 rounded-lg p-2 focus:border-accent focus:outline-none"
          placeholder="Record memorable moments, key plays, and other important details..."
        />
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
};

export default Scorecard; 
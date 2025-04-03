'use client';

import Scorecard from '../../components/Scorecard';

export default function ScorecardPage() {
  return (
    <main className="zine-container">
      <h1 className="zine-title">The Sacred Scorecard</h1>
      <p className="text-xl text-center mb-12 italic">Record the Holy Moments of the Game</p>
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <Scorecard
          homeTeam="Durham Bulls"
          awayTeam="Norfolk Tides"
          date="April 1, 2024"
          location="Durham Bulls Athletic Park"
        />
      </div>
    </main>
  );
} 
'use client';

import { useState } from 'react';

type Category = 'history' | 'records' | 'trivia' | 'stadiums' | 'rules';

interface BaseballFacts {
  [key: string]: string[];
}

// Random baseball facts organized by categories
const baseballFacts: BaseballFacts = {
  history: [
    "The first recorded baseball game was played in 1846 in Hoboken, NJ",
    "The first World Series was played in 1903 between Boston and Pittsburgh",
    "The first night game was played in 1935 in Cincinnati",
    "The first televised baseball game was in 1939",
    "The first African American player in MLB was Jackie Robinson in 1947"
  ],
  records: [
    "Most career hits: Pete Rose (4,256)",
    "Most career home runs: Barry Bonds (762)",
    "Most career strikeouts: Nolan Ryan (5,714)",
    "Most career stolen bases: Rickey Henderson (1,406)",
    "Most career wins: Cy Young (511)"
  ],
  trivia: [
    "A baseball has 108 stitches",
    "The average MLB game lasts 3 hours",
    "The longest game in MLB history lasted 8 hours and 6 minutes",
    "The fastest recorded pitch was 105.8 mph by Aroldis Chapman",
    "The first baseball glove was used in 1875"
  ],
  stadiums: [
    "Fenway Park opened in 1912",
    "Wrigley Field opened in 1914",
    "Yankee Stadium opened in 1923",
    "Dodger Stadium opened in 1962",
    "The first domed stadium was the Astrodome in 1965"
  ],
  rules: [
    "A regulation baseball field is 90 feet between bases",
    "The pitcher's mound is 60 feet 6 inches from home plate",
    "A regulation baseball weighs between 5 and 5.25 ounces",
    "The strike zone is from the knees to the letters",
    "A regulation baseball has a circumference of 9 inches"
  ]
};

export default function StatsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('history');

  return (
    <div className="scorecard-container">
      <div className="scorecard-header">
        <h1 className="text-3xl font-bold mb-4">Left Field Church</h1>
        <div className="category-selector mb-4">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value as Category)}
            className="bg-white border border-gray-300 rounded px-3 py-2"
          >
            <option value="history">History</option>
            <option value="records">Records</option>
            <option value="trivia">Trivia</option>
            <option value="stadiums">Stadiums</option>
            <option value="rules">Rules</option>
          </select>
        </div>
      </div>

      <div className="scorecard">
        <div className="scorecard-grid">
          {baseballFacts[selectedCategory].map((fact: string, index: number) => (
            <div key={index} className="scorecard-cell">
              <div className="cell-content">
                <div className="cell-number">{index + 1}</div>
                <div className="cell-fact">{fact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scorecard-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background: #f8f8f8;
        }

        .scorecard {
          background: white;
          border: 2px solid #000;
          padding: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .scorecard-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .scorecard-cell {
          border: 1px solid #ccc;
          padding: 1rem;
          background: #fff;
          position: relative;
          min-height: 120px;
        }

        .cell-content {
          position: relative;
          height: 100%;
        }

        .cell-number {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          font-size: 0.8rem;
          color: #666;
          font-family: "Courier New", monospace;
        }

        .cell-fact {
          padding-top: 1.5rem;
          font-size: 0.9rem;
          line-height: 1.4;
          color: #333;
        }

        @media print {
          .scorecard-container {
            padding: 0;
            background: white;
          }

          .scorecard {
            border: none;
            box-shadow: none;
            padding: 0;
          }

          .category-selector {
            display: none;
          }

          .scorecard-cell {
            break-inside: avoid;
            border: 1px solid #000;
            page-break-inside: avoid;
          }

          .scorecard-grid {
            gap: 0.5rem;
          }

          .cell-fact {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
} 
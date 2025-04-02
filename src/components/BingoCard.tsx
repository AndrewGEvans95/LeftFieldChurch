'use client';

import { useState, useEffect } from 'react';

interface BingoEvent {
  id: string;
  text: string;
  description: string;
}


const bingoEvents: BingoEvent[] = [
  { id: 'towering-pitcher', text: 'Towering Pitcher', description: 'When Paul Gervase (6’10”) or Joe Rock (6’6”) takes the mound.' },
  { id: 'breadsticks-reference', text: 'Olive Garden Reference', description: 'When someone brings up Flynn or Gervase’s past as a server.' },
  { id: 'slider-alert', text: 'Slider Alert', description: 'When Jonathan Hernández’s "El Cuchillito" gets a swing and a miss.' },
  { id: 'glove-side-hustle', text: 'Glove Side Hustle', description: 'When Antonio Menendez’s glove company comes up.' },
  { id: 'survivor-mention', text: 'Resilience Note', description: 'When Eric Orze’s cancer survival or mental toughness is acknowledged.' },
  { id: 'bull-race', text: 'Bull Race Loss', description: 'Wool E. Bull races a child and does not win.' },
  { id: 'go-kart', text: 'Go-Kart Lap', description: 'Wool E. Bull does a lap in the go-kart.' },
  { id: 'tshirt-launch', text: 'T-Shirt Cannon', description: 'T-shirts fired toward people holding drinks.' },
  { id: 'first-pitch', text: 'Ceremonial First Pitch', description: 'Thrown with varying degrees of accuracy.' },
  { id: 'weather-shift', text: 'Weather Shift', description: 'When the wind picks up or a drizzle causes murmurs.' },
  { id: 'foul-scramble', text: 'Foul Ball Scramble', description: 'A ball into the crowd creates mild chaos.' },
  { id: 'free-space', text: 'FREE SPACE', description: 'A quiet moment of baseball.' },
  { id: 'catcher-toss', text: 'Ball to Kid', description: 'A catcher or outfielder tosses a ball to the stands.' },
  { id: 'wave-incident', text: 'Reluctant Wave', description: 'The stadium wave passes a section where no one joins in.' },
  { id: 'law-office-ad', text: 'Law Office Ad', description: 'A legal firm gets airtime between innings.' },
  { id: 'bull-sign', text: 'Bull Sign Reaction', description: 'The bull sign lights up after a home run.' },
  { id: 'headfirst-slide', text: 'Headfirst Slide', description: 'Someone commits to a full dive into second base.' },
  { id: 'sumo-suits', text: 'Sumo Suit Match', description: 'Two fans briefly become foam-heavy wrestlers.' },
  { id: 'dizzy-bat', text: 'Dizzy Bat Spinout', description: 'A fan cannot walk in a straight line.' },
  { id: 'run-reaction', text: 'Run Reaction', description: 'Polite applause or one person yelling "Let’s go!"' },
  { id: 'bullhorns-up', text: 'Post-Strikeout Fistpump', description: 'Pitcher reacts visibly after a strikeout.' },
  { id: 'grounds-crew-dance', text: 'Grounds Crew Moves', description: 'Someone with a rake dances, briefly.' },
  { id: 'stadium-song', text: 'Seventh-Inning Song', description: 'Crowd sings “Take Me Out to the Ballgame,” mostly in unison.' },
  { id: 'dugout-highfives', text: 'Dugout High-Fives', description: 'A run is scored. Everyone looks relieved.' },
  { id: 'scoreboard-shell', text: 'Shell Game on Scoreboard', description: 'Fans try to follow the ball. Mixed results.' },
  { id: 'bat-flip', text: 'Mild Bat Flip', description: 'A bat is released with a touch of flair.' },
  { id: 'fan-photo', text: 'Group Fan Photo', description: 'Somehwere in the stands a group poses for a photo.' },
  { id: 'pearl-necklace', text: 'Pearl Necklace Sighting', description: 'Bob Seymour’s good-luck jewelry gets mentioned or seen.' },
  { id: 'ripken', text: 'Pouring one out for Ripken', description: 'The Late Great Ripken the bat dog gets mentioned.' }
];


export default function BingoCard() {
  const [card, setCard] = useState<BingoEvent[]>([]);
  const [markedEvents, setMarkedEvents] = useState<Set<string>>(new Set());

  const generateNewCard = () => {
    // Create a copy of events excluding the free space
    const availableEvents = bingoEvents.filter(event => event.id !== 'free-space');
    
    // Shuffle the events
    const shuffledEvents = [...availableEvents].sort(() => Math.random() - 0.5);
    
    // Take 24 events (we need 24 because the center is free)
    const selectedEvents = shuffledEvents.slice(0, 24);
    
    // Create the card array with the free space in the center (index 12)
    const newCard = [
      ...selectedEvents.slice(0, 12),
      bingoEvents.find(event => event.id === 'free-space')!,
      ...selectedEvents.slice(12)
    ];
    
    setCard(newCard);
    setMarkedEvents(new Set());
  };

  useEffect(() => {
    generateNewCard();
  }, []);

  const toggleMark = (eventId: string) => {
    setMarkedEvents(prev => {
      const newMarked = new Set(prev);
      if (newMarked.has(eventId)) {
        newMarked.delete(eventId);
      } else {
        newMarked.add(eventId);
      }
      return newMarked;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bingo-container">
      <div className="bingo-header no-print">
        <h2 className="text-2xl font-bold mb-4">Durham Bulls Bingo</h2>
        <div className="flex gap-4 justify-center mb-4">
          <button 
            onClick={generateNewCard}
            className="zine-button"
          >
            Generate New Card
          </button>
          <button 
            onClick={handlePrint}
            className="zine-button"
          >
            Print Card
          </button>
        </div>
      </div>

      <div className="bingo-grid">
        {card.map((event) => (
          <div
            key={event.id}
            className={`bingo-cell ${markedEvents.has(event.id) ? 'marked' : ''}`}
            onClick={() => toggleMark(event.id)}
          >
            <div className="cell-content">
              <div className="font-bold text-sm mb-0.5">{event.text}</div>
              <div className="text-xs text-gray-600 leading-tight">{event.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bingo-legend no-print">
        <h3 className="text-lg font-bold mb-2">How to Play</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Click a square to mark/unmark it</li>
          <li>Get 5 in a row (horizontally, vertically, or diagonally) to win!</li>
          <li>The center square is a FREE SPACE</li>
        </ul>
      </div>

      <style jsx global>{`
        .bingo-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background: white;
          border: 2px solid #dc2626;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .bingo-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .bingo-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 4px;
          margin: 0 auto;
          max-width: 1000px;
          aspect-ratio: 1;
          background: #dc2626;
          padding: 4px;
          border-radius: 4px;
        }

        .bingo-cell {
          aspect-ratio: 1;
          border: 1px solid #dc2626;
          padding: 4px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          cursor: pointer;
          transition: background-color 0.2s;
          position: relative;
        }

        .bingo-cell:hover {
          background-color: #f3f4f6;
        }

        .bingo-cell.marked {
          background-color: #e5e5e5;
        }

        .cell-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          padding: 2px;
        }

        .bingo-legend {
          margin-top: 2rem;
          padding: 1rem;
          background: #f9fafb;
          border: 1px solid #dc2626;
          border-radius: 4px;
        }

        .zine-button {
          background: #dc2626;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .zine-button:hover {
          background: #b91c1c;
        }

        @media print {
          @page {
            margin: 0;
            size: auto;
          }

          body {
            margin: 0;
            padding: 0;
            background: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          nav, header, footer, .no-print {
            display: none !important;
          }

          .bingo-container {
            max-width: 100%;
            margin: 0;
            padding: 0;
            background: white;
            border: none;
            box-shadow: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .bingo-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 4px;
            margin: 0;
            padding: 0;
            page-break-inside: avoid;
            width: 100%;
            max-width: 8in;
            aspect-ratio: 1;
            background: none;
          }

          .bingo-cell {
            aspect-ratio: 1;
            border: 1px solid #000;
            padding: 4px;
            font-size: 0.7rem;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            color: black;
            position: relative;
          }

          .bingo-cell.marked {
            background-color: #e5e5e5;
          }

          .cell-content {
            font-size: 0.7rem;
            line-height: 1.2;
          }
        }
      `}</style>
    </div>
  );
} 
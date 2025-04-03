'use client';

import BingoCard from '../../components/BingoCard';

export default function BingoPage() {
  return (
    <div className="zine-container">
      <h1 className="zine-title">Left Field Church Bingo</h1>
      <p className="text-center mb-8">
        Make your next Bulls game even more fun with our interactive bingo card!
        Watch for these special moments and mark them off as they happen.
      </p>
      <BingoCard />
      <style jsx global>{`
        @media print {
          @page {
            size: 8.5in 11in;
            margin: 0;
          }
          html, body {
            width: 8.5in;
            height: 11in;
            margin: 0;
            padding: 0;
            background: white;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          /* Hide everything except the bingo grid when printing */
          .print-button,
          header,
          h1,
          h2,
          nav,
          footer,
          .navbar,
          .footer,
          .bingo-header,
          .bingo-description,
          .bingo-controls {
            display: none !important;
          }
          .bingo-container {
            width: 8.5in;
            height: 11in;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .bingo-grid {
            width: 7.5in;
            height: 7.5in;
            margin: 0;
            padding: 0;
            border: 2px solid #000;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(5, 1fr);
            gap: 2px;
            background: #000;
          }
          .bingo-cell {
            background: white;
            padding: 0.1in;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 0.15in;
            line-height: 1.2;
            position: relative;
            aspect-ratio: 1;
          }
          .bingo-cell.free {
            background: #f0f0f0;
          }
          .bingo-cell.free::before {
            content: "FREE";
            position: absolute;
            top: 0.05in;
            left: 0.05in;
            font-size: 0.12in;
            color: #666;
          }
          .bingo-cell.free::after {
            content: "SPACE";
            position: absolute;
            bottom: 0.05in;
            right: 0.05in;
            font-size: 0.12in;
            color: #666;
          }
          .bingo-cell h3 {
            margin: 0;
            font-size: 0.15in;
            font-weight: bold;
          }
          .bingo-cell p {
            margin: 0.05in 0 0 0;
            font-size: 0.12in;
            color: #666;
          }
        }
        @media screen {
          /* ... existing screen styles ... */
        }
      `}</style>
    </div>
  );
} 
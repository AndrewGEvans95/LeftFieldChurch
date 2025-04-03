'use client';

import React from 'react';
import { Player } from '../types/player';

interface PrintableZineProps {
  players: Player[];
}

const PrintableZine: React.FC<PrintableZineProps> = ({ players }) => {
  return (
    <div className="printable-zine">
      {/* Front Cover */}
      <div className="print-page front-cover">
        <div className="print-content">
          <h1 className="print-title">The Church of Baseball</h1>
          <h2 className="print-subtitle">A Field Guide to the Sacred Game</h2>
          <div className="print-divider"></div>
          <div className="print-illustration">⚾</div>
          <p className="print-quote">&ldquo;I believe in the Church of Baseball. I&apos;ve tried all the major religions, and most of the minor ones. I&apos;ve worshipped Buddha, Allah, Brahma, Vishnu, Siva, trees, mushrooms, and Isadora Duncan. I know things. For instance, there are 108 beads in a Catholic rosary and there are 108 stitches in a baseball.&rdquo;</p>
          <p className="print-note">Fold along the dotted lines to create your zine</p>
        </div>
      </div>

      {/* Inside Pages */}
      <div className="print-page inside-left">
        <div className="print-content">
          <h3 className="print-section-title">The Gospel of Baseball</h3>
          <div className="print-wisdom">
            <p className="print-quote">&ldquo;Baseball is the only field of endeavor where a man can succeed three times out of ten and be considered a good performer.&rdquo;</p>
            <div className="print-divider"></div>
            <p className="print-quote">&ldquo;The one constant through all the years has been baseball. America has rolled by like an army of steamrollers. It&apos;s been erased like a blackboard, rebuilt, and erased again. But baseball has marked the time.&rdquo;</p>
          </div>
          <div className="print-page-number">2</div>
        </div>
      </div>

      <div className="print-page inside-center">
        <div className="print-content">
          <h3 className="print-section-title">The Sacred Numbers</h3>
          <div className="print-wisdom">
            <ul className="print-list">
              <li>108 stitches in a baseball</li>
              <li>90 feet between bases</li>
              <li>60 feet, 6 inches from mound to plate</li>
              <li>9 innings of play</li>
              <li>3 strikes and you&apos;re out</li>
              <li>4 balls for a walk</li>
            </ul>
          </div>
          <div className="print-page-number">3</div>
        </div>
      </div>

      <div className="print-page inside-right">
        <div className="print-content">
          <h3 className="print-section-title">The Durham Bulls</h3>
          <div className="print-wisdom">
            <p className="print-quote">&ldquo;The Durham Bulls are more than just a baseball team. They&apos;re a testament to the enduring spirit of the game, where dreams are nurtured and legends are born.&rdquo;</p>
            <div className="print-divider"></div>
            <p className="print-text">Visit durhambulls.com to print individual player cards and learn more about our roster.</p>
          </div>
          <div className="print-page-number">4</div>
        </div>
      </div>

      {/* Back Cover */}
      <div className="print-page back-cover">
        <div className="print-content">
          <h3 className="print-section-title">The Eternal Game</h3>
          <div className="print-quotes">
            <p className="print-quote">&ldquo;Remember kid, there&apos;s heroes and there&apos;s legends. Heroes get remembered but legends never die.&rdquo;</p>
            <div className="print-divider"></div>
            <p className="print-quote">&ldquo;Sometimes you win, sometimes you lose, sometimes it rains.&rdquo;</p>
          </div>
          <div className="print-divider"></div>
          <div className="print-illustration">⚾</div>
          <p className="print-footer">© 2025 Durham Bulls Baseball Club</p>
          <div className="print-page-number">5</div>
        </div>
      </div>

      {players.map((player, index) => (
        <div key={index} className="player-card">
          <h3>{player.name}</h3>
          <p>{player.position}</p>
          <ul>
            {player.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PrintableZine; 
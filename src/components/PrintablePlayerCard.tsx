'use client';

interface PrintablePlayerCardProps {
  name: string;
  position: string;
  details: string[];
}

export default function PrintablePlayerCard({ name, position, details }: PrintablePlayerCardProps) {
  // Extract stats (like "ERA: 3.45") and abilities (flavor text) from details
  const stats = details.filter(detail => detail.includes('ERA') || detail.includes('BA') || detail.includes('HR'));
  const abilities = details.filter(detail => !detail.includes('ERA') && !detail.includes('BA') && !detail.includes('HR'));

  return (
    <div className="mtg-card">
      {/* Card Header: Name and type line */}
      <div className="mtg-card-header">
        <h2 className="mtg-card-name">{name}</h2>
        <div className="mtg-card-type-line">
          {position} — Creature Card
        </div>
      </div>

      {/* Card Image Area: Replace with an illustration or icon */}
      <div className="mtg-card-image">
        <div className="mtg-card-art">
          ⚾
        </div>
      </div>

      {/* Card Text: Abilities / flavor text */}
      <div className="mtg-card-text">
        {abilities.map((ability, index) => (
          <p key={index} className="mtg-card-ability">{ability}</p>
        ))}
      </div>

      {/* Card Stats: Could mimic power/toughness or other stats */}
      <div className="mtg-card-stats">
        {stats.map((stat, index) => {
          const [label, value] = stat.split(':');
          return (
            <div key={index} className="mtg-card-stat">
              <span className="mtg-stat-label">{label.trim()}</span>: <span className="mtg-stat-value">{value.trim()}</span>
            </div>
          );
        })}
      </div>

      {/* Card Footer: Set name and year */}
      <div className="mtg-card-footer">
        <div className="mtg-card-set">Durham Bulls</div>
        <div className="mtg-card-year">2025</div>
      </div>
    </div>
  );
}

'use client';

// Define types for our data
interface Player {
  name: string;
  position: string;
  description: string;
}

// Player data from playbill
const players = {
  pitchers: [
    {
      name: "Garrett Acton",
      position: "RHP",
      description: "26-year-old right-hander from the Chicago suburbs. A former Oakland system hand who's still waiting for his MLB debut—and plenty of minor-league bus rides."
    },
    {
      name: "Joe Boyle",
      position: "RHP",
      description: "25-year-old 6'7\" Indiana native. With a fastball clocking 102 mph, he's already logged MLB innings with Oakland and now brings high heat to Durham."
    },
    {
      name: "Michael Flynn",
      position: "RHP",
      description: "28-year-old sidearmer from Arizona. Funky mechanics, a penchant for misadventures (ex-Olive Garden server), and a 33% strikeout rate in Triple-A keep him interesting."
    },
    {
      name: "Joey Gerber",
      position: "RHP",
      description: "27-year-old Minnesotan and Illinois grad. Known for a low-arm-slot delivery and a brief MLB stint with the Mariners in 2020. Ready for a comeback—preferably with fewer setbacks."
    },
    {
      name: "Paul Gervase",
      position: "RHP",
      description: "24-year-old from Cary, NC. This 6'10\" LSU alum throws high-90s fastballs from a frame that makes him hard to miss. He's as towering in presence as his pitch velocity."
    },
    {
      name: "Jonathan Hernández",
      position: "RHP",
      description: "28-year-old Dominican righty with mid-90s heat and his signature \"El Cuchillito\" slider. A second-generation MLB hopeful who's had stints with the Rangers and Mariners."
    },
    {
      name: "Joey Krehbiel",
      position: "RHP",
      description: "32-year-old from Seminole, FL, whose extensive minor-league innings (over 4,200) and 56 MLB games with the Orioles in 2022 speak to his well-traveled arm."
    },
    {
      name: "Antonio Menendez",
      position: "RHP",
      description: "26-year-old from Northern Virginia and Wake Forest grad. Known for a solid command paired with a slider/cutter combo, he's a project with hometown appeal."
    },
    {
      name: "Eric Orze",
      position: "RHP",
      description: "27-year-old University of New Orleans product. A resilient competitor, a biting splitter, and a man who survived cancer—now on the verge of his first big-league call-up."
    },
    {
      name: "Ben Peoples",
      position: "RHP",
      description: "23-year-old Tennessee native with a unique cutting fastball. Drafted in the 22nd round in 2019, he impresses with 97 mph in spring training and ambitions that match his velocity."
    },
    {
      name: "Joe Rock",
      position: "LHP",
      description: "24-year-old from Pennsylvania and an Ohio University grad. A heavy lefty with a sinking fastball, he posted 132 strikeouts in 139+ innings in 2024—proving size isn't everything, but it sure helps."
    },
    {
      name: "Connor Seabold",
      position: "RHP",
      description: "29-year-old righty from Cal State Fullerton. A crafty changeup artist with MLB stops in Boston and Colorado, he's a seasoned swingman whose debut against the Rays remains a highlight."
    },
    {
      name: "Ian Seymour",
      position: "LHP",
      description: "26-year-old Massachusetts native and Virginia Tech alum. This lefty, armed with a low-90s fastball and a nasty changeup, has already earned his stripes with a handful of college starts."
    },
    {
      name: "Cole Sulser",
      position: "RHP",
      description: "35-year-old Dartmouth grad veteran. Known for a terrific changeup and fearless approach, he even tallied 8 saves for the Orioles in 2021—still analytical, still dangerous."
    },
    {
      name: "Jacob Waguespack",
      position: "RHP",
      description: "31-year-old with a high-90s velocity honed during a Japan stint. After 13 MLB starts with the Blue Jays and a Japan Series win with Orix, he's the laid-back outdoorsman with a knack for defying expectations."
    },
    {
      name: "Logan Workman",
      position: "RHP",
      description: "26-year-old from Soddy-Daisy, TN, and a Lee University alum. A heavy sinker and groundball specialist, he's earned accolades as a Southern League Pitcher of the Month—and stays first in and last out."
    },
    {
      name: "Andrew Wantz",
      position: "RHP",
      description: "29-year-old UNC Greensboro product with a mid-90s fastball and biting slider. After 70+ MLB games with the Angels, he's currently on the 60-day IL—proving even fastballs need downtime."
    },
    {
      name: "Kodi Whitley",
      position: "RHP",
      description: "30-year-old from Clayton, NC, and a Mount Olive grad. With a low-to-mid-90s sinker and brief MLB action with the Cardinals, he's on the 60-day IL, waiting for his next chance to shine."
    },
    {
      name: "Kyle Whitten",
      position: "RHP",
      description: "26-year-old Virginian with a deceptive delivery. After 79 games at UVA, he's currently on the full-season IL—keeping the Bulls on their toes while he recovers."
    },
    {
      name: "Sean Hunley",
      position: "RHP",
      description: "23-year-old from Tennessee armed with a sinker/slider combo. With experience in A-ball and Double-A, he's on the development list—an under-the-radar arm with potential."
    }
  ],
  catchers: [
    {
      name: "Tres Barrera",
      position: "C",
      description: "30-year-old Texas native and University of Texas alum. A strong arm and accurate throws earned him MLB time with the Nationals and Cardinals—plus, his love for barbecue is well known."
    },
    {
      name: "Kenny Piper",
      position: "C",
      description: "26-year-old catcher from Columbia College. Small in stature but mighty in glove, he's already known for a 472-foot home run in 2024 and rising fast in the Rays system."
    },
    {
      name: "Logan Driscoll",
      position: "C",
      description: "27-year-old Northern Virginia product and George Mason grad. A left-handed hitting catcher with a brief MLB call-up in 2024, now navigating a 7-day IL stint."
    },
    {
      name: "Dominic Keegan",
      position: "C/1B",
      description: "24-year-old from Methuen, MA, and a Vanderbilt grad. With a strong, compact swing and a College World Series title under his belt, he's currently on a 7-day IL—proving championships come with minor setbacks."
    },
    {
      name: "Luis Ariza",
      position: "C/Utility",
      description: "21-year-old Venezuelan catcher with a contact-oriented approach. With experience in Complex and Single-A ball, he's on the development list—eager to learn, even if his throws aren't record-breaking yet."
    }
  ],
  infielders: [
    {
      name: "Carson Williams",
      position: "SS",
      description: "21-year-old San Diego native and one of baseball's top shortstop prospects. With 20 homers and 33 steals in 2024, he's the spark plug ready to make Triple-A his brief pit stop on the way to MLB stardom."
    },
    {
      name: "Bob Seymour",
      position: "1B",
      description: "26-year-old first baseman from Wake Forest known for power—28 homers in 2024—and a superstition for good luck (pearl necklace required)."
    },
    {
      name: "Tanner Murray",
      position: "INF",
      description: "25-year-old UC Davis grad from Santa Clara, versatile at every infield position. His first homer of 2025's spring season proved he can mix power with a laid-back Cali surfer vibe."
    },
    {
      name: "Coco Montes",
      position: "INF",
      description: "26-year-old Miami native and University of South Florida grad. A contact hitter with surprising pop, he made his MLB debut with the Rockies in 2023 and now looks to refine his game in Durham."
    },
    {
      name: "Jamie Westbrook",
      position: "INF/OF",
      description: "29-year-old utility player with over 1,000 minor league games and an MLB debut with Boston in 2024. A true pro with a positive attitude, he brings experience and grit."
    },
    {
      name: "Chandler Simpson",
      position: "INF/OF",
      description: "24-year-old Georgia Tech alum from Atlanta with lightning speed—104 stolen bases in 2024. Humble and quick on his feet, he's a constant threat on the basepaths."
    },
    {
      name: "Tre' Morgan",
      position: "1B",
      description: "22-year-old LSU product and first baseman with a contact-oriented swing. A National Championship winner now on a brief 7-day IL, he's eager to prove his worth at Triple-A."
    }
  ],
  outfielders: [
    {
      name: "Jake Mangum",
      position: "CF",
      description: "29-year-old Mississippi State product and switch-hitter who leads with line drives. SEC's all-time hits leader and affectionately dubbed 'The Mayor of Starkville.'"
    },
    {
      name: "Tristan Peters",
      position: "OF",
      description: "25-year-old from Winkler, Manitoba and a Southern Illinois grad. Boasts gap power and impressive defensive skills—always polite, even when robbing home runs."
    },
    {
      name: "Dru Baker",
      position: "OF",
      description: "25-year-old Texas Tech alum from Tomball with a quick right-handed swing. With a .356 average in college, he's determined to prove that obstacles are merely stepping stones."
    }
  ],
  dh: [
    {
      name: "Eloy Jiménez",
      position: "DH",
      description: "28-year-old power hitter with 122 MLB home runs and a 2020 AL Silver Slugger award. Now on rehab assignment, he's still aiming to drop dingers—if he can stay healthy long enough."
    }
  ]
};

// Flatten all players into one array (ordered: pitchers, catchers, infielders, outfielders, DH)
const allPlayers: Player[] = [
  ...players.pitchers,
  ...players.catchers,
  ...players.infielders,
  ...players.outfielders,
  ...players.dh,
];

// Divide players into 8 groups—one per panel
const groups: Player[][] = [];
const playersPerGroup = Math.ceil(allPlayers.length / 8);

// First, distribute players evenly across all groups
for (let i = 0; i < 8; i++) {
  const start = i * playersPerGroup;
  const end = Math.min(start + playersPerGroup, allPlayers.length);
  groups.push(allPlayers.slice(start, end));
}

// Ensure the last group has players by redistributing if necessary
if (groups[7].length === 0) {
  // Find the group with the most players
  const maxGroupIndex = groups.reduce((maxIndex, group, index) => 
    group.length > groups[maxIndex].length ? index : maxIndex
  , 0);
  
  // Move the last player from the largest group to the last group
  if (groups[maxGroupIndex].length > 1) {
    const lastPlayer = groups[maxGroupIndex].pop();
    if (lastPlayer) {
      groups[7].push(lastPlayer);
    }
  }
}

// Additional redistribution to ensure panel 8 has enough players
if (groups[7].length < 2) {
  // Find groups with more than 2 players
  const groupsWithExtra = groups.map((group, index) => ({ index, length: group.length }))
    .filter(({ length }) => length > 2);

  // Move players from groups with extra to panel 8
  for (const { index } of groupsWithExtra) {
    while (groups[index].length > 2 && groups[7].length < 2) {
      const player = groups[index].pop();
      if (player) {
        groups[7].push(player);
      }
    }
  }
}

export default function ZinePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="zine-wrapper">
      {/* Print Button */}
      <button onClick={handlePrint} className="print-button">
        Print Zine
      </button>

      {/* Zine Container: one 11in×8.5in landscape page with an 8-panel (2×4) grid */}
      <div className="zine-container">
        {groups.map((group, index) => (
          <div key={index} className={`zine-panel ${index < 4 ? 'upside-down' : ''}`}>
            {index === 5 ? (
              <div className="title-panel">
                <h1>Left Field Church</h1>
                <h2>A Durham Baseball Bible Zine</h2>
                <p className="church-text">&ldquo;I believe in the Church of Baseball.&rdquo;  
                  <br />
                  <br />
                  These are the faithful — drifting through the dog days, chasing glory between the foul lines.
                  <br />
                  <br />
                  <span> — Crash Davis, Lord and Savior</span>
                </p>
                <p className="bible-verse">Letters to the Durhamites 2:12</p>
              </div>
            ) : (
              <>
                <div className="player-content">
                  {group.map((player, pIndex) => (
                    <div key={pIndex} className="player-entry">
                      <h3>{player.name}</h3>
                      <p>{player.position}</p>
                      <p className="player-description">{player.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bible-verse">
                  {index === 0 && (
                    <>
                      <div>Book of Mangum Street 3:11</div>
                      <div className="verse-text">"And lo, he stood upon the sacred grass of center field, and covered all corners as if time were slowed to his will."</div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div>Book of Ninth Street 7:3</div>
                      <div className="verse-text">"He wore stirrups with pride and tape upon his wrists, and his walk-up song was pleasing in the ears of the faithful."</div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div>Bullpen Scrolls 6:66</div>
                      <div className="verse-text">"And they waited in the pen, warming their arms with quiet reverence, for the call that may never come, yet always might."</div>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <div>Gospel According to the Snorting Bull 5:25</div>
                      <div className="verse-text">"Thou shalt not doubt the might of Triple-A, for even here are the cracks where greatness grows."</div>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <div>Lakewood Psalms 9:1</div>
                      <div className="verse-text">"Let every soul give thanks for postgame fireworks and soft-serve in mini helmets."</div>
                    </>
                  )}
                  {index === 6 && (
                    <>
                      <div>Letters to the Durhamites 2:12</div>
                      <div className="verse-text">"Stand firm in the seventh inning, and clap thy hands in rhythm, though ye know not the reason why."</div>
                    </>
                  )}
                  {index === 7 && (
                    <>
                      <div>Book of Mangum Street 3:11</div>
                      <div className="verse-text">"And lo, he stood upon the sacred grass of center field, and covered all corners as if time were slowed to his will."</div>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Optional: Bingo Card on its own printed page */}
      <div className="bingo-container-print">
        {/* <BingoCard /> */}
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: 11in 8.5in landscape;
            margin: 0;
          }
          html, body {
            width: 11in;
            height: 8.5in;
            margin: 0;
            padding: 0;
            background: white;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          /* Hide the print button, headers, navbar, and footers */
          .print-button,
          header,
          h1,
          h2,
          nav,
          footer,
          .navbar,
          .footer {
            display: none !important;
          }
          .zine-wrapper {
            width: 11in;
            height: 8.5in;
            position: relative;
            margin: 0;
            padding: 0;
          }
          /* Grid: 8 panels (2 rows x 4 columns) */
          .zine-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 11in;
            height: 8.5in;
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            padding: 0;
          }
          .zine-panel {
            box-sizing: border-box;
            border: 1px solid #ddd;
            padding: 0.15in;
            overflow: hidden;
            width: 2.75in;
            height: 4.25in;
            background: white;
            position: relative;
            transform-origin: center center;
            -webkit-transform-origin: center center;
            display: flex;
            flex-direction: column;
          }
          /* Title panel styles */
          .title-panel {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
            padding: 0.25in;
            background: linear-gradient(to bottom, #ffffff, #f8f8f8);
          }
          .title-panel h1 {
            font-size: 1.5rem;
            margin-bottom: 0.35rem;
            font-weight: bold;
            display: block !important;
            font-family: "Times New Roman", serif;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          .title-panel h2 {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
            display: block !important;
            font-family: "Times New Roman", serif;
            font-style: italic;
          }
          .title-panel p {
            font-size: 0.7rem;
            line-height: 1.2;
          }
          .church-text {
            font-family: "Times New Roman", serif;
            font-style: italic;
            color: #666;
            margin-top: 0.5rem;
          }
          /* Rotate top row panels */
          .upside-down {
            transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
          }
          .upside-down .player-entry {
            
          }
          /* Player entry styles */
          .player-entry {
            margin-bottom: 0.35rem;
            position: relative;
            transform-origin: center center;
            -webkit-transform-origin: center center;
            line-height: 1.1;
          }
          .player-entry h3 {
            font-size: 0.7rem;
            margin: 0.05rem 0;
            font-weight: bold;
          }
          .player-entry p {
            font-size: 0.6rem;
            margin: 0.05rem 0;
            line-height: 1.1;
          }
          /* Optional: Bingo Card styling (if enabled) */
          .bingo-container-print {
            page-break-before: always;
            width: 11in;
            height: 8.5in;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .player-content {
            flex: 1;
            overflow: hidden;
          }
          .bible-verse {
            font-family: "Times New Roman", serif;
            font-size: 0.45rem;
            color: #666;
            text-align: center;
            margin-top: 0.1rem;
            font-style: italic;
            border-top: 1px solid #eee;
            padding-top: 0.1rem;
          }
          .bible-verse .verse-text {
            font-size: 0.4rem;
            margin-top: 0.05rem;
            line-height: 1.1;
          }
          .player-description {
            font-size: 0.8rem;
            line-height: 1.2;
            margin-top: 0.25rem;
            color: #666;
          }
        }
        @media screen {
          /* For screen preview only */
          .zine-container {
            border: 1px dashed #aaa;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

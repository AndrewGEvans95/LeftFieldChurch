import BaseballCard from '../../components/BaseballCard';
import PlaybillAd from '../../components/PlaybillAd';
import PrintableZine from '../../components/PrintableZine';
import PrintButton from '../../components/PrintButton';

export default function Playbill() {
  // Collect all players for the printable zine
  const allPlayers = [
    // Pitchers
    {
      name: "Garrett Acton",
      position: "RHP",
      details: [
        "From: Naperville, IL",
        "College: University of Illinois",
        "Style: Strong fastball and sharp slider",
        "Nickname: \"Encyclopedia\" - knows a bit about everything",
        "Experience: MLB time with Oakland A's in 2023"
      ]
    },
    // ... Add all other players here
  ];

  return (
    <div className="zine-container relative">
      {/* Print Button */}
      <PrintButton />

      {/* Printable Zine */}
      <div className="hidden print:block">
        <PrintableZine players={allPlayers} />
      </div>

      {/* Regular Playbill Content */}
      <div className="bg-white p-8 vintage-border print:hidden">
        {/* Title Section */}
        <div className="text-center mb-12 vintage-corner">
          <h1 className="playbill-title text-5xl md:text-7xl">
            Durham Bulls 2025
          </h1>
          <h2 className="playbill-subtitle">
            A lovingly curated field guide to the curious and capable gentlemen of the Durham Bulls Baseball Club
          </h2>
          <div className="vintage-divider"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Opening Ad */}
          <section className="playbill-section vintage-corner">
            <PlaybillAd
              title="TONIGHT'S PERFORMANCE"
              description="A special presentation of the Durham Bulls Baseball Club, featuring a cast of extraordinary athletes in their natural habitat. Doors open at 6:00 PM. Curtain rises at 7:05 PM. Please arrive early to witness the pre-game rituals."
            />
          </section>

          {/* Pitchers Section */}
          <section className="playbill-section vintage-corner">
            <h3 className="playbill-title">PITCHERS</h3>
            <div className="playbill-grid">
              <BaseballCard
                name="Garrett Acton"
                position="RHP"
                details={[
                  "From: Naperville, IL",
                  "College: University of Illinois",
                  "Style: Strong fastball and sharp slider",
                  "Nickname: \"Encyclopedia\" - knows a bit about everything",
                  "Experience: MLB time with Oakland A's in 2023"
                ]}
              />
              <BaseballCard
                name="Joe Boyle"
                position="RHP"
                details={[
                  "Height: 6'7\"",
                  "From: Indiana",
                  "College: Notre Dame",
                  "Style: Triple-digit fastball (up to 102 mph)",
                  "Experience: MLB starts with Oakland in 2024"
                ]}
              />
              <BaseballCard
                name="Michael Flynn"
                position="RHP"
                details={[
                  "Age: 28",
                  "College: University of Arizona",
                  "Style: Sidearm delivery with funky mechanics",
                  "Experience: Former server at Olive Garden",
                  "Notable: 33% strikeout rate in Triple-A"
                ]}
              />
              <BaseballCard
                name="Joey Gerber"
                position="RHP"
                details={[
                  "From: Minnesota",
                  "College: University of Illinois",
                  "Style: Low-arm-slot delivery",
                  "Experience: 17 MLB games with Mariners in 2020",
                  "Status: Healthy and ready for comeback"
                ]}
              />
              <BaseballCard
                name="Paul Gervase"
                position="RHP"
                details={[
                  "Height: 6'10\"",
                  "From: Cary, NC",
                  "College: LSU",
                  "Style: High-90s fastball from giant frame",
                  "Experience: Former unlimited breadsticks server"
                ]}
              />
              <BaseballCard
                name="Jonathan Hernández"
                position="RHP"
                details={[
                  "From: Dominican Republic",
                  "Style: Mid-90s heat with \"El Cuchillito\" slider",
                  "Experience: MLB time with Rangers and Mariners",
                  "Background: Second-generation big-leaguer",
                  "Status: Working back to form"
                ]}
              />
              <BaseballCard
                name="Joey Krehbiel"
                position="RHP"
                details={[
                  "Age: 32",
                  "From: Seminole, FL",
                  "Style: Versatile bullpen arm with good changeup",
                  "Experience: 56 MLB games with Orioles in 2022",
                  "Notable: Over 4,200 minor-league innings"
                ]}
              />
              <BaseballCard
                name="Antonio Menendez"
                position="RHP"
                details={[
                  "From: Northern Virginia",
                  "College: Wake Forest",
                  "Style: Command and slider/cutter combo",
                  "Entrepreneur: Founder of ProSpec Gloves",
                  "Status: On Development List"
                ]}
              />
              <BaseballCard
                name="Eric Orze"
                position="RHP"
                details={[
                  "Age: 25",
                  "College: University of New Orleans",
                  "Style: Resilient mentality, biting splitter",
                  "Background: Two-time cancer survivor",
                  "Experience: MLB debut with Mets in 2024"
                ]}
              />
              <BaseballCard
                name="Ben Peoples"
                position="RHP"
                details={[
                  "Age: 23",
                  "From: Tennessee",
                  "Style: Unique cutting fastball",
                  "Experience: 22nd round pick in 2019",
                  "Notable: 97 mph velocity in spring training"
                ]}
              />
              <BaseballCard
                name="Joe Rock"
                position="LHP"
                details={[
                  "Height: 6'6\"",
                  "From: Pennsylvania",
                  "College: Ohio University",
                  "Style: Heavy fastball with good sink",
                  "Experience: 132 Ks in 139+ innings in 2024"
                ]}
              />
              <BaseballCard
                name="Connor Seabold"
                position="RHP"
                details={[
                  "From: Southern California",
                  "College: Cal State Fullerton",
                  "Style: Crafty with great changeup",
                  "Experience: MLB time with Red Sox and Rockies",
                  "Notable: Made MLB debut against Rays"
                ]}
              />
              <BaseballCard
                name="Ian Seymour"
                position="LHP"
                details={[
                  "Age: 24",
                  "From: Massachusetts",
                  "College: Virginia Tech",
                  "Style: Low-90s fastball, nasty changeup",
                  "Notable: Four games with 10+ Ks in college"
                ]}
              />
              <BaseballCard
                name="Cole Sulser"
                position="RHP"
                details={[
                  "Age: 33",
                  "College: Dartmouth",
                  "Style: Terrific changeup, fearless approach",
                  "Experience: 8 saves for Orioles in 2021",
                  "Notable: Analytical approach to pitching"
                ]}
              />
              <BaseballCard
                name="Jacob Waguespack"
                position="RHP"
                details={[
                  "Height: 6'6\"",
                  "Style: High-90s velocity from Japan stint",
                  "Experience: 13 MLB starts with Blue Jays",
                  "Notable: Won Japan Series with Orix Buffaloes",
                  "Personality: Laid-back outdoorsman"
                ]}
              />
              <BaseballCard
                name="Logan Workman"
                position="RHP"
                details={[
                  "From: Soddy-Daisy, TN",
                  "College: Lee University",
                  "Style: Heavy sinker, groundball specialist",
                  "Notable: Southern League Pitcher of the Month",
                  "Personality: First in, last out work ethic"
                ]}
              />
            </div>
          </section>

          {/* Intermission Ad */}
          <section className="playbill-section vintage-corner">
            <PlaybillAd
              title="INTERMISSION SPECIAL"
              description="Tonight's seventh inning stretch will feature a special performance by the Durham Bulls' very own Jake Mangum, who will attempt to hit a baseball into the next dimension. Refreshments available at all concession stands."
            />
          </section>

          {/* Catchers Section */}
          <section className="playbill-section vintage-corner">
            <h3 className="playbill-title">CATCHERS</h3>
            <div className="playbill-grid">
              <BaseballCard
                name="Tres Barrera"
                position="C"
                details={[
                  "From: Texas",
                  "College: University of Texas",
                  "Style: Strong arm, accurate throws",
                  "Experience: MLB time with Nationals and Cardinals",
                  "Personality: Big personality, loves barbecue"
                ]}
              />
              <BaseballCard
                name="Kenny Piper"
                position="C"
                details={[
                  "Height: 5'9\"",
                  "College: Columbia College",
                  "Style: Built like a fire hydrant",
                  "Notable: 472-foot home run in 2024",
                  "Status: Rising star in Rays system"
                ]}
              />
            </div>
          </section>

          {/* Infielders Section */}
          <section className="playbill-section vintage-corner">
            <h3 className="playbill-title">INFIELDERS</h3>
            <div className="playbill-grid">
              <BaseballCard
                name="Carson Williams"
                position="SS"
                details={[
                  "Age: 21",
                  "From: San Diego",
                  "Style: Five-tool talent",
                  "Notable: No. 1 shortstop prospect in baseball",
                  "Stats: 20 homers, 33 steals in 2024"
                ]}
              />
              <BaseballCard
                name="Bob Seymour"
                position="1B"
                details={[
                  "Height: 6'3\", 250 lbs",
                  "College: Wake Forest",
                  "Style: Power hitter extraordinaire",
                  "Notable: 28 home runs in 2024",
                  "Quirk: Wears pearl necklace for luck"
                ]}
              />
              <BaseballCard
                name="Tanner Murray"
                position="INF"
                details={[
                  "From: Santa Clara, CA",
                  "College: UC Davis",
                  "Style: Versatile infield play",
                  "Notable: First homer of 2025 spring season",
                  "Personality: Cali surfer chill vibe"
                ]}
              />
              <BaseballCard
                name="Coco Montes"
                position="INF"
                details={[
                  "Age: 26",
                  "From: Miami",
                  "College: University of South Florida",
                  "Style: Contact hitter with pop",
                  "Experience: MLB debut with Rockies in 2023"
                ]}
              />
              <BaseballCard
                name="Jamie Westbrook"
                position="INF/OF"
                details={[
                  "Height: 5'7\"",
                  "Style: Utility player extraordinaire",
                  "Experience: MLB debut in 2024",
                  "Notable: Over 1,000 minor league games",
                  "Personality: Positive attitude, pro's pro"
                ]}
              />
              <BaseballCard
                name="Chandler Simpson"
                position="INF/OF"
                details={[
                  "From: Atlanta",
                  "College: Georgia Tech",
                  "Style: Lightning-fast speed",
                  "Notable: 104 stolen bases in 2024",
                  "Personality: Humble with joyful approach"
                ]}
              />
            </div>
          </section>

          {/* Outfielders Section */}
          <section className="playbill-section vintage-corner">
            <h3 className="playbill-title">OUTFIELDERS</h3>
            <div className="playbill-grid">
              <BaseballCard
                name="Jake Mangum"
                position="CF"
                details={[
                  "Age: 29",
                  "College: Mississippi State",
                  "Style: Switch-hitting line drive machine",
                  "Notable: SEC's all-time hits leader",
                  "Nickname: \"The Mayor of Starkville\""
                ]}
              />
              <BaseballCard
                name="Tristan Peters"
                position="OF"
                details={[
                  "From: Winkler, Manitoba",
                  "College: Southern Illinois",
                  "Style: Gap power with good speed",
                  "Notable: Home-run robbing catches",
                  "Personality: Canadian polite"
                ]}
              />
              <BaseballCard
                name="Dru Baker"
                position="OF"
                details={[
                  "From: Tomball, TX",
                  "College: Texas Tech",
                  "Style: Quick right-handed swing",
                  "Notable: .356 batting average in college",
                  "Motto: \"The obstacle is the way\""
                ]}
              />
            </div>
          </section>

          {/* Designated Hitter Section */}
          <section className="playbill-section vintage-corner">
            <h3 className="playbill-title">DESIGNATED HITTER</h3>
            <div className="playbill-card">
              <BaseballCard
                name="Eloy Jiménez"
                position="DH"
                details={[
                  "Age: 26",
                  "Style: Power hitter extraordinaire",
                  "Experience: 122 MLB home runs",
                  "Notable: 2020 AL Silver Slugger",
                  "Status: MLB rehab assignment"
                ]}
              />
            </div>
          </section>

          {/* Injured List Section */}
          <section className="playbill-section vintage-corner">
            <h3 className="playbill-title">INJURED LIST</h3>
            <div className="playbill-grid">
              <BaseballCard
                name="Logan Driscoll"
                position="C"
                details={[
                  "From: Northern Virginia",
                  "College: George Mason",
                  "Style: Left-handed hitting catcher",
                  "Experience: MLB call-up in 2024",
                  "Status: 7-day IL"
                ]}
              />
              <BaseballCard
                name="Dominic Keegan"
                position="C/1B"
                details={[
                  "From: Methuen, MA",
                  "College: Vanderbilt",
                  "Style: Strong, compact swing",
                  "Notable: College World Series champion",
                  "Status: 7-day IL"
                ]}
              />
              <BaseballCard
                name="Tre' Morgan"
                position="1B"
                details={[
                  "Age: 21",
                  "College: LSU",
                  "Style: Contact hitter extraordinaire",
                  "Notable: National Championship winner",
                  "Status: 7-day IL"
                ]}
              />
              <BaseballCard
                name="Andrew Wantz"
                position="RHP"
                details={[
                  "Age: 28",
                  "College: UNC Greensboro",
                  "Style: Mid-90s fastball, biting slider",
                  "Experience: 70+ MLB games with Angels",
                  "Status: 60-day IL"
                ]}
              />
              <BaseballCard
                name="Kodi Whitley"
                position="RHP"
                details={[
                  "From: Clayton, NC",
                  "College: Mount Olive",
                  "Style: Low-to-mid-90s sinker",
                  "Experience: MLB time with Cardinals",
                  "Status: 60-day IL"
                ]}
              />
              <BaseballCard
                name="Kyle Whitten"
                position="RHP"
                details={[
                  "Age: 26",
                  "College: Virginia",
                  "Style: Deceptive delivery",
                  "Notable: 79 games at UVA",
                  "Status: Full-season IL"
                ]}
              />
            </div>
          </section>

          {/* Development List Section */}
          <section className="playbill-section vintage-corner">
            <h3 className="playbill-title">DEVELOPMENT LIST</h3>
            <div className="playbill-grid">
              <BaseballCard
                name="Luis Ariza"
                position="C/Utility"
                details={[
                  "Age: 21",
                  "From: Venezuela",
                  "Style: Contact-oriented approach",
                  "Experience: Complex and Single-A",
                  "Status: Development List"
                ]}
              />
              <BaseballCard
                name="Sean Hunley"
                position="RHP"
                details={[
                  "Age: 23",
                  "College: Tennessee",
                  "Style: Sinker/slider combo",
                  "Experience: A-ball and Double-A",
                  "Status: Development List"
                ]}
              />
            </div>
          </section>

          {/* Closing Ad */}
          <section className="playbill-section vintage-corner">
            <PlaybillAd
              title="TONIGHT'S ENCORE"
              description="Join us for post-game festivities, where the Durham Bulls will attempt to hit baseballs into the next dimension. Refreshments and autographs available. Please note: baseballs may or may not return from their journey."
            />
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 vintage-divider text-center text-sm">
          <p>© 2025 Durham Bulls Baseball Club</p>
          <p className="italic mt-2">A production of the Tampa Bay Rays organization</p>
          <p className="mt-4 text-xs">No baseballs were harmed in the making of this playbill.</p>
        </div>
      </div>
    </div>
  );
} 
import { Pitch } from '../../types/pitch';
import PitchCard from '../../components/PitchCard';
import PrintablePitches from '../../components/PrintablePitches';
import PrintButton from '../../components/PrintButton';

const pitches: Pitch[] = [
  {
    id: '1',
    name: 'Four-Seam Fastball',
    description: 'The most basic and commonly used pitch in baseball. It\'s known for its straight trajectory and high velocity.',
    grip: 'Place your index and middle fingers across the seams, with your thumb underneath.',
    movement: 'Straight, with minimal movement',
    speed: '85-100+ mph',
    difficulty: 'Beginner',
    imageUrl: '/images/pitches/four_seam_fastball.png',
    wikiUrl: 'https://en.wikipedia.org/wiki/Fastball#Four-seam_fastball',
    prayer: 'May my speed be swift, my aim be true.'
  },
  {
    id: '2',
    name: 'Curveball',
    description: 'A breaking pitch with a sharp downward trajectory, deceiving hitters with its dramatic drop and spin.',
    grip: 'Place your middle finger along the bottom seam, with your index finger next to it, and snap your wrist down upon release.',
    movement: 'Sharp downward break',
    speed: '70-80 mph',
    difficulty: 'Intermediate',
    imageUrl: '/images/pitches/curveball.png',
    wikiUrl: 'https://en.wikipedia.org/wiki/Curveball',
    prayer: 'May my curve deceive, and batters grieve.'
  },
  {
    id: '3',
    name: 'Slurve',
    description: 'A hybrid pitch combining the lateral break of a slider with the downward dive of a curveball, frustrating hitters with its unpredictable movement.',
    grip: 'Hold the ball like a curveball, but release it with a slight sideways wrist snap.',
    movement: 'Diagonal, sweeping break',
    speed: '75-85 mph',
    difficulty: 'Advanced',
    imageUrl: '/images/pitches/slurve.png',
    wikiUrl: 'https://en.wikipedia.org/wiki/Slurve',
    prayer: 'Guide my slurve to dance and dip, elusive to the hitter\'s grip.'
  },
  {
    id: '4',
    name: 'Eephus',
    description: 'A looping, comically slow pitch that arcs high above home plate, suspended between hope and absurdity—a prayer offered humbly to the gods of baseball, daring the hitter to swing too soon.',
    grip: 'Grip the ball loosely, deep in the palm, as if gently releasing a bird.',
    movement: 'High, slow, exaggerated arc',
    speed: '50-60 mph',
    difficulty: 'Advanced',
    imageUrl: '/images/pitches/eephus.png',
    wikiUrl: 'https://en.wikipedia.org/wiki/Eephus_pitch',
    prayer: 'Lift my pitch high, slow, and wise; let folly cloud the hitter\'s eyes.'
  },
  {
    id: '5',
    name: 'Palmball',
    description: 'An off-speed pitch held deep in the palm, fooling batters with its slow speed and subtle downward sink.',
    grip: 'Nestle the ball deep in the palm with fingers spread around it, then push it gently forward on release.',
    movement: 'Slow with mild downward sinking action',
    speed: '60-75 mph',
    difficulty: 'Intermediate',
    imageUrl: '/images/pitches/palmball.png',
    wikiUrl: 'https://en.wikipedia.org/wiki/Palmball',
    prayer: 'Bless this gentle ball of mine, sinking softly beyond the line.'
  },
  {
    id: '6',
    name: 'Gyro-ball',
    description: 'A deceptive pitch mostly practiced in Japan, characterized by the pitcher’s arm moving away from the body during release, producing a spin that prevents the batter from clearly seeing the seams, making it difficult to anticipate the trajectory.',
    grip: 'Hold similar to a fastball but rotate your wrist sharply outward upon release.',
    movement: 'Minimal horizontal break, subtle late movement',
    speed: '80-90 mph',
    difficulty: 'Advanced',
    imageUrl: '/images/pitches/gyroball.png',
    wikiUrl: 'https://en.wikipedia.org/wiki/Gyroball',
    prayer: 'Veil this spin and hide its path; spare my pitch the batter\'s wrath.'
  },
  {
    id: '7',
    name: 'Vulcan Changeup',
    description: 'An off-speed pitch known for its deceptive speed reduction and downward movement, using a unique split-fingered grip.',
    grip: 'Place the baseball deep between the middle and ring fingers, with other fingers loosely around the ball.',
    movement: 'Downward, late sinking action',
    speed: '75-85 mph',
    difficulty: 'Advanced',
    imageUrl: '/images/pitches/vulcan_changeup.png',
    wikiUrl: 'https://en.wikipedia.org/wiki/Changeup#Vulcan_changeup',
    prayer: 'Slow my pitch, let timing slip; confusion mark the hitter\'s trip.'
  }
];


export default function PitchesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-serif">The Gospel of the Pitch</h1>
          <p className="text-lg text-gray-600">A believer’s guide to the sacred offerings from the mound</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pitches.map((pitch) => (
            <PitchCard key={pitch.id} pitch={pitch} />
          ))}
        </div>

       
      </div>
    </main>
  );
} 
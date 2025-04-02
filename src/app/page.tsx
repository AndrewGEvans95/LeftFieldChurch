import ChurchSchedule from '@/components/ChurchSchedule';

export default function Home() {
  return (
    <main className="zine-container">
      <h1 className="zine-title">The Bull Bible</h1>
      <p className="text-xl text-center mb-12 italic">Collected Gospel from the Church of Baseball</p>
      
      <div className="zine-section">
        <p className="zine-text mb-8">
          &ldquo;I believe in the Church of Baseball. I&apos;ve tried all the major religions, and most of the minor ones. I&apos;ve worshipped Buddha, Allah, Brahma, Vishnu, Siva, trees, mushrooms, and Isadora Duncan. I know things. For instance, there are 108 beads in a Catholic rosary and there are 108 stitches in a baseball. When I learned that, I gave Jesus a chance.&rdquo;
        </p>
        <p className="zine-text mb-8">
          &ldquo;But it just didn&apos;t work out between us. The Lord laid too much guilt on me. I prefer metaphysics to theology. You see, there&apos;s no guilt in baseball, and it&apos;s never boring.&rdquo;
        </p>
      </div>

      <ChurchSchedule abbreviated={true} />

      <div className="zine-section">
        <h2 className="text-2xl font-bold mb-4">The Gospel of Baseball</h2>
        <p className="zine-text mb-8">
          &ldquo;The one constant through all the years has been baseball. America has rolled by like an army of steamrollers. It&apos;s been erased like a blackboard, rebuilt, and erased again. But baseball has marked the time. This field, this game: it&apos;s a part of our past. It reminds us of all that once was good, and that could be again.&rdquo;
        </p>
      </div>

      <div className="zine-section">
        <h2 className="text-2xl font-bold mb-4">The Sacred Numbers</h2>
        <ul className="zine-text space-y-4">
          <li>• 108 stitches in a baseball</li>
          <li>• 90 feet between bases</li>
          <li>• 60 feet, 6 inches from mound to plate</li>
          <li>• 9 innings of perfect symmetry</li>
        </ul>
      </div>

      <div className="zine-section">
        <h2 className="text-2xl font-bold mb-4">The Rituals</h2>
        <p className="zine-text mb-8">
          &ldquo;The game begins in the spring, when everything else begins again, and it blossoms in the summer, filling the afternoons and evenings, and then as soon as the chill rains come, it stops and leaves you to face the fall alone.&rdquo;
        </p>
      </div>

      <div className="zine-section">
        <h2 className="text-2xl font-bold mb-4">The Prophets</h2>
        <p className="zine-text mb-8">
          &ldquo;You know what the difference between hitting .250 and .300 is? It&apos;s 25 hits. Twenty-five hits in 500 at-bats is 50 points, okay? There&apos;s six months in a season, that&apos;s about 25 weeks. That means if you get just one extra flare a week - just one - a gorp... you get a groundball, you get a groundball with eyes... you get a dying quail, just one more dying quail a week... and you&apos;re in Yankee Stadium.&rdquo;
        </p>
      </div>

      <div className="zine-section">
        <h2 className="text-2xl font-bold mb-4">The Faithful</h2>
        <p className="zine-text mb-8">
          &ldquo;The fans don&apos;t come out to see a bunch of jerks who don&apos;t care. They come out to see the players who care about the game. They come out to see the players who care about them.&rdquo;
        </p>
      </div>

      <div className="zine-section">
        <h2 className="text-2xl font-bold mb-4">The Miracles</h2>
        <p className="zine-text mb-8">
          &ldquo;Sometimes you win, sometimes you lose, sometimes it rains. Think about that for a while.&rdquo;
        </p>
      </div>

      <div className="zine-section">
        <h2 className="text-2xl font-bold mb-4">The Eternal Truth</h2>
        <p className="zine-text mb-8">
          &ldquo;This is a very simple game. You throw the ball, you catch the ball, you hit the ball. Sometimes you win, sometimes you lose, sometimes it rains.&rdquo;
        </p>
      </div>

      <div className="zine-section">
        <h2 className="text-2xl font-bold mb-4">The Sacred Texts</h2>
        
        <div className="space-y-8">
          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">Book of Mangum Street 3:11</h3>
            <p className="zine-text italic">
              &ldquo;And lo, he stood upon the sacred grass of center field, and covered all corners as if time were slowed to his will.&rdquo;
            </p>
          </div>

          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">Durhamite 2:9</h3>
            <p className="zine-text italic">
              &ldquo;He swung upon the first pitch like a man late for the Bull McCabe&apos;s happy hour, and the ball disappeared into the dusk.&rdquo;
            </p>
          </div>

          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">East Main 4:17</h3>
            <p className="zine-text italic">
              &ldquo;And the crack of the bat echoed off the brick of old tobacco, and the people cheered from their lawn chairs and plastic cups.&rdquo;
            </p>
          </div>

          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">Trinity 1:5</h3>
            <p className="zine-text italic">
              &ldquo;Yea, though the slider came in humble, it did break wickedly, and the batter was cast into outer doubt.&rdquo;
            </p>
          </div>

          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">Book of Ninth Street 7:3</h3>
            <p className="zine-text italic">
              &ldquo;He wore stirrups with pride and tape upon his wrists, and his walk-up song was pleasing in the ears of the faithful.&rdquo;
            </p>
          </div>

          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">Bullpen Scrolls 6:66</h3>
            <p className="zine-text italic">
              &ldquo;And they waited in the pen, warming their arms with quiet reverence, for the call that may never come, yet always might.&rdquo;
            </p>
          </div>

          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">Eloy to the Bulls 1:22</h3>
            <p className="zine-text italic">
              &ldquo;He came down from the big leagues for but a season, and smote the baseball with righteous fury.&rdquo;
            </p>
          </div>

          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">Gospel According to the Snorting Bull 5:25</h3>
            <p className="zine-text italic">
              &ldquo;Thou shalt not doubt the might of Triple-A, for even here are the cracks where greatness grows.&rdquo;
            </p>
          </div>

          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">Lakewood Psalms 9:1</h3>
            <p className="zine-text italic">
              &ldquo;Let every soul give thanks for postgame fireworks and soft-serve in mini helmets.&rdquo;
            </p>
          </div>

          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">Hallowed Hillside 3:16</h3>
            <p className="zine-text italic">
              &ldquo;For the hill beyond left field is steep, and the lawn chairs many, and the sunscreen seldom sufficient.&rdquo;
            </p>
          </div>

          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">Book of the Tobacco Leaves 8:18</h3>
            <p className="zine-text italic">
              &ldquo;He spit upon the ground and adjusted his gloves, and the vendors called unto the stands: &lsquo;Cold beer! Peanuts!&rsquo;&rdquo;
            </p>
          </div>

          <div className="bible-verse">
            <h3 className="text-lg font-bold mb-2">Letters to the Durhamites 2:12</h3>
            <p className="zine-text italic">
              &ldquo;Stand firm in the seventh inning, and clap thy hands in rhythm, though ye know not the reason why.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

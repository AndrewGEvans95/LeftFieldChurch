import { Pitch } from '../types/pitch';
import Image from 'next/image';

type PrintablePitchesProps = {
  pitches: Pitch[];
};

export default function PrintablePitches({ pitches }: PrintablePitchesProps) {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Front Page */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 break-inside-avoid">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8 font-serif">The Sacred Pitch List</h1>
          <p className="text-xl text-gray-600">A guide to different types of baseball pitches</p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-4">
        {pitches.map((pitch) => (
          <div key={pitch.id} className="bg-white p-4 rounded-lg shadow-lg break-inside-avoid">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square w-full">
                <Image
                  src={pitch.imageUrl}
                  alt={pitch.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold font-serif">{pitch.name}</h2>
                  <a
                    href={pitch.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-mono"
                  >
                    Wiki →
                  </a>
                </div>
                <div className="mb-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-mono ${
                    pitch.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    pitch.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {pitch.difficulty}
                  </span>
                </div>
                <div className="prose prose-sm max-w-none">
                  <p className="text-sm mb-2">{pitch.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <h3 className="font-bold font-mono uppercase tracking-wider">Grip</h3>
                      <p>{pitch.grip}</p>
                    </div>
                    <div>
                      <h3 className="font-bold font-mono uppercase tracking-wider">Movement</h3>
                      <p>{pitch.movement}</p>
                    </div>
                    <div>
                      <h3 className="font-bold font-mono uppercase tracking-wider">Speed</h3>
                      <p>{pitch.speed}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm italic text-gray-700 font-serif leading-relaxed">
                      "{pitch.prayer}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
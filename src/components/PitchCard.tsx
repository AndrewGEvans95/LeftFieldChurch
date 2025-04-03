import { Pitch } from '../types/pitch';
import Image from 'next/image';

type PitchCardProps = {
  pitch: Pitch;
};

export default function PitchCard({ pitch }: PitchCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={pitch.imageUrl}
          alt={pitch.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-bold font-serif">{pitch.name}</h2>
          <a
            href={pitch.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm font-mono"
          >
            Wiki →
          </a>
        </div>
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-mono ${
            pitch.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
            pitch.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {pitch.difficulty}
          </span>
        </div>
        <div className="prose prose-sm max-w-none mb-6">
          <p className="text-gray-700">{pitch.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <h3 className="font-bold font-mono uppercase tracking-wider text-xs">Grip</h3>
              <p className="text-gray-600">{pitch.grip}</p>
            </div>
            <div>
              <h3 className="font-bold font-mono uppercase tracking-wider text-xs">Movement</h3>
              <p className="text-gray-600">{pitch.movement}</p>
            </div>
            <div>
              <h3 className="font-bold font-mono uppercase tracking-wider text-xs">Speed</h3>
              <p className="text-gray-600">{pitch.speed}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm italic text-gray-700 font-serif leading-relaxed">
            &ldquo;{pitch.prayer}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
} 
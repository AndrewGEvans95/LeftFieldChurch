import { NextResponse } from 'next/server';

const games = [
  {
    id: 'game-1',
    date: 'Mar 28',
    day: 'Fri',
    opponent: 'Norfolk',
    time: '6:35 PM',
    location: 'away',
    result: 'W, 9 - 2',
    events: ['W: I Seymour', 'L: T Ward']
  },
  {
    id: 'game-2',
    date: 'Mar 29',
    day: 'Sat',
    opponent: 'Norfolk',
    time: '6:35 PM',
    location: 'away',
    result: 'W, 9 - 3',
    events: ['W: J Hernández', 'L: R Alcantara']
  },
  {
    id: 'game-3',
    date: 'Mar 30',
    day: 'Sun',
    opponent: 'Norfolk',
    time: '1:05 PM',
    location: 'away',
    result: 'L, 2 - 8',
    events: ['W: L González', 'L: J Gerber']
  }
];

export async function GET(
  request: Request,
  { params }: { params: { gameId: string } }
) {
  try {
    const game = games.find(g => g.id === params.gameId);
    
    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json(game);
  } catch (error) {
    console.error('Error fetching game:', error);
    return NextResponse.json({ error: 'Failed to fetch game' }, { status: 500 });
  }
} 
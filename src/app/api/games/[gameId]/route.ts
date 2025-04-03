import { NextRequest, NextResponse } from 'next/server';

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
  },
  {
    id: 'game-4',
    date: 'Apr 1',
    day: 'Tue',
    opponent: 'Sugar Land',
    time: '6:35 PM',
    location: 'home',
    events: ['Opening Night with Post-Game Fireworks']
  },
  {
    id: 'game-5',
    date: 'Apr 2',
    day: 'Wed',
    opponent: 'Sugar Land',
    time: '6:35 PM',
    location: 'home'
  },
  {
    id: 'game-6',
    date: 'Apr 3',
    day: 'Thu',
    opponent: 'Sugar Land',
    time: '6:35 PM',
    location: 'home'
  },
  {
    id: 'game-7',
    date: 'Apr 4',
    day: 'Fri',
    opponent: 'Sugar Land',
    time: '6:35 PM',
    location: 'home',
    events: ['Friday Night Fireworks']
  },
  {
    id: 'game-8',
    date: 'Apr 5',
    day: 'Sat',
    opponent: 'Sugar Land',
    time: '6:35 PM',
    location: 'home',
    events: ['Saturday Night Fireworks']
  },
  {
    id: 'game-9',
    date: 'Apr 6',
    day: 'Sun',
    opponent: 'Sugar Land',
    time: '1:05 PM',
    location: 'home',
    events: ['Kids Run the Bases']
  },
  {
    id: 'game-10',
    date: 'Apr 8',
    day: 'Tue',
    opponent: 'Jacksonville',
    time: '7:05 PM',
    location: 'away'
  },
  {
    id: 'game-11',
    date: 'Apr 9',
    day: 'Wed',
    opponent: 'Jacksonville',
    time: '7:05 PM',
    location: 'away'
  },
  {
    id: 'game-12',
    date: 'Apr 10',
    day: 'Thu',
    opponent: 'Jacksonville',
    time: '7:05 PM',
    location: 'away'
  },
  {
    id: 'game-13',
    date: 'Apr 11',
    day: 'Fri',
    opponent: 'Jacksonville',
    time: '7:05 PM',
    location: 'away'
  },
  {
    id: 'game-14',
    date: 'Apr 12',
    day: 'Sat',
    opponent: 'Jacksonville',
    time: '7:05 PM',
    location: 'away'
  },
  {
    id: 'game-15',
    date: 'Apr 13',
    day: 'Sun',
    opponent: 'Jacksonville',
    time: '3:05 PM',
    location: 'away'
  }
];

type RouteContext = {
  params: {
    gameId: string;
  };
};

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const { gameId } = await context.params;
    const game = games.find(g => g.id === gameId);
    
    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json(game);
  } catch (error) {
    console.error('Error fetching game:', error);
    return NextResponse.json({ error: 'Failed to fetch game' }, { status: 500 });
  }
} 
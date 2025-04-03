import { NextResponse } from 'next/server';

const games = [
  {
    id: 'game-1',
    date: 'Mar 28',
    day: 'Fri',
    opponent: 'Norfolk Tides',
    time: '6:35 PM',
    location: 'away',
    result: 'W, 9-2',
    events: ['W: Ian Seymour', 'L: Thaddeus Ward']
  },
  {
    id: 'game-2',
    date: 'Mar 29',
    day: 'Sat',
    opponent: 'Norfolk Tides',
    time: '6:35 PM',
    location: 'away',
    result: 'W, 9-3',
    events: ['W: Jonathan Hernandez', 'L: Raul Alcantara']
  },
  {
    id: 'game-3',
    date: 'Mar 30',
    day: 'Sun',
    opponent: 'Norfolk Tides',
    time: '1:05 PM',
    location: 'away',
    result: 'L, 2-8',
    events: ['W: Luis Gonzalez', 'L: Joey Gerber']
  },
  {
    id: 'game-4',
    date: 'Apr 1',
    day: 'Tue',
    opponent: 'Sugar Land Space Cowboys',
    time: '6:35 PM',
    location: 'home',
    result: 'L, 0-2',
    events: ['W: A.J. Blubaugh', 'L: Joe Boyle', 'L: Miguel Castro']
  },
  {
    id: 'game-5',
    date: 'Apr 2',
    day: 'Wed',
    opponent: 'Sugar Land Space Cowboys',
    time: '6:35 PM',
    location: 'home',
    result: 'W, 6-1',
    events: ['WP: Tamarez.']
  },
  {
    id: 'game-6',
    date: 'Apr 3',
    day: 'Thu',
    opponent: 'Sugar Land Space Cowboys',
    time: '6:35 PM',
    location: 'home',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-7',
    date: 'Apr 4',
    day: 'Fri',
    opponent: 'Sugar Land Space Cowboys',
    time: '6:35 PM',
    location: 'home',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-8',
    date: 'Apr 5',
    day: 'Sat',
    opponent: 'Sugar Land Space Cowboys',
    time: '6:35 PM',
    location: 'home',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-9',
    date: 'Apr 6',
    day: 'Sun',
    opponent: 'Sugar Land Space Cowboys',
    time: '1:05 PM',
    location: 'home',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-10',
    date: 'Apr 8',
    day: 'Tue',
    opponent: 'Buffalo Bisons',
    time: '6:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-11',
    date: 'Apr 9',
    day: 'Wed',
    opponent: 'Buffalo Bisons',
    time: '6:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-12',
    date: 'Apr 10',
    day: 'Thu',
    opponent: 'Buffalo Bisons',
    time: '6:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-13',
    date: 'Apr 11',
    day: 'Fri',
    opponent: 'Buffalo Bisons',
    time: '6:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-14',
    date: 'Apr 12',
    day: 'Sat',
    opponent: 'Buffalo Bisons',
    time: '1:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-15',
    date: 'Apr 13',
    day: 'Sun',
    opponent: 'Buffalo Bisons',
    time: '1:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-16',
    date: 'Apr 15',
    day: 'Tue',
    opponent: 'Scranton/Wilkes-Barre RailRiders',
    time: '11:05 AM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-17',
    date: 'Apr 16',
    day: 'Wed',
    opponent: 'Scranton/Wilkes-Barre RailRiders',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-18',
    date: 'Apr 17',
    day: 'Thu',
    opponent: 'Scranton/Wilkes-Barre RailRiders',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-19',
    date: 'Apr 18',
    day: 'Fri',
    opponent: 'Scranton/Wilkes-Barre RailRiders',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-20',
    date: 'Apr 19',
    day: 'Sat',
    opponent: 'Scranton/Wilkes-Barre RailRiders',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-21',
    date: 'Apr 20',
    day: 'Sun',
    opponent: 'Scranton/Wilkes-Barre RailRiders',
    time: '5:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-22',
    date: 'Apr 22',
    day: 'Tue',
    opponent: 'Nashville Sounds',
    time: '7:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-23',
    date: 'Apr 23',
    day: 'Wed',
    opponent: 'Nashville Sounds',
    time: '7:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-24',
    date: 'Apr 24',
    day: 'Thu',
    opponent: 'Nashville Sounds',
    time: '7:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-25',
    date: 'Apr 25',
    day: 'Fri',
    opponent: 'Nashville Sounds',
    time: '7:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-26',
    date: 'Apr 26',
    day: 'Sat',
    opponent: 'Nashville Sounds',
    time: '7:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-27',
    date: 'Apr 27',
    day: 'Sun',
    opponent: 'Nashville Sounds',
    time: '3:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-28',
    date: 'Apr 29',
    day: 'Tue',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '11:05 AM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-29',
    date: 'Apr 30',
    day: 'Wed',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-30',
    date: 'May 1',
    day: 'Thu',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-31',
    date: 'May 2',
    day: 'Fri',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-32',
    date: 'May 3',
    day: 'Sat',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-33',
    date: 'May 4',
    day: 'Sun',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '1:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-34',
    date: 'May 6',
    day: 'Tue',
    opponent: 'Gwinnett Stripers',
    time: '11:05 AM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-35',
    date: 'May 7',
    day: 'Wed',
    opponent: 'Gwinnett Stripers',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-36',
    date: 'May 8',
    day: 'Thu',
    opponent: 'Gwinnett Stripers',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-37',
    date: 'May 9',
    day: 'Fri',
    opponent: 'Gwinnett Stripers',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-38',
    date: 'May 10',
    day: 'Sat',
    opponent: 'Gwinnett Stripers',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-39',
    date: 'May 11',
    day: 'Sun',
    opponent: 'Gwinnett Stripers',
    time: '1:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-40',
    date: 'May 13',
    day: 'Tue',
    opponent: 'Rochester Red Wings',
    time: '6:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-41',
    date: 'May 14',
    day: 'Wed',
    opponent: 'Rochester Red Wings',
    time: '6:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-42',
    date: 'May 15',
    day: 'Thu',
    opponent: 'Rochester Red Wings',
    time: '6:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-43',
    date: 'May 16',
    day: 'Fri',
    opponent: 'Rochester Red Wings',
    time: '6:45 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-44',
    date: 'May 17',
    day: 'Sat',
    opponent: 'Rochester Red Wings',
    time: '6:45 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-45',
    date: 'May 18',
    day: 'Sun',
    opponent: 'Rochester Red Wings',
    time: '1:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-46',
    date: 'May 20',
    day: 'Tue',
    opponent: 'Worcester Red Sox',
    time: '6:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-47',
    date: 'May 21',
    day: 'Wed',
    opponent: 'Worcester Red Sox',
    time: '6:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-48',
    date: 'May 22',
    day: 'Thu',
    opponent: 'Worcester Red Sox',
    time: '11:05 AM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-49',
    date: 'May 23',
    day: 'Fri',
    opponent: 'Worcester Red Sox',
    time: '6:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-50',
    date: 'May 24',
    day: 'Sat',
    opponent: 'Worcester Red Sox',
    time: '4:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-51',
    date: 'May 25',
    day: 'Sun',
    opponent: 'Worcester Red Sox',
    time: '1:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-52',
    date: 'May 26',
    day: 'Tue',
    opponent: 'Memphis Redbirds',
    time: '5:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-53',
    date: 'May 28',
    day: 'Thu',
    opponent: 'Memphis Redbirds',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-54',
    date: 'May 29',
    day: 'Fri',
    opponent: 'Memphis Redbirds',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-55',
    date: 'May 30',
    day: 'Sat',
    opponent: 'Memphis Redbirds',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-56',
    date: 'May 31',
    day: 'Sun',
    opponent: 'Memphis Redbirds',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-57',
    date: 'Jun 1',
    day: 'Mon',
    opponent: 'Memphis Redbirds',
    time: '1:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-58',
    date: 'Jun 3',
    day: 'Tue',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '7:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-59',
    date: 'Jun 4',
    day: 'Wed',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '7:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-60',
    date: 'Jun 5',
    day: 'Thu',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '7:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-61',
    date: 'Jun 6',
    day: 'Fri',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '7:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-62',
    date: 'Jun 7',
    day: 'Sat',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-63',
    date: 'Jun 8',
    day: 'Sun',
    opponent: 'Jacksonville Jumbo Shrimp',
    time: '3:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-64',
    date: 'Jun 10',
    day: 'Tue',
    opponent: 'Charlotte Knights',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-65',
    date: 'Jun 11',
    day: 'Wed',
    opponent: 'Charlotte Knights',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-66',
    date: 'Jun 12',
    day: 'Thu',
    opponent: 'Charlotte Knights',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-67',
    date: 'Jun 13',
    day: 'Fri',
    opponent: 'Charlotte Knights',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-68',
    date: 'Jun 14',
    day: 'Sat',
    opponent: 'Charlotte Knights',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-69',
    date: 'Jun 15',
    day: 'Sun',
    opponent: 'Charlotte Knights',
    time: '5:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-70',
    date: 'Jun 17',
    day: 'Tue',
    opponent: 'Omaha Storm Chasers',
    time: '1:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-71',
    date: 'Jun 18',
    day: 'Wed',
    opponent: 'Omaha Storm Chasers',
    time: '8:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-72',
    date: 'Jun 19',
    day: 'Thu',
    opponent: 'Omaha Storm Chasers',
    time: '8:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-73',
    date: 'Jun 20',
    day: 'Fri',
    opponent: 'Omaha Storm Chasers',
    time: '8:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-74',
    date: 'Jun 21',
    day: 'Sat',
    opponent: 'Omaha Storm Chasers',
    time: '7:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-75',
    date: 'Jun 22',
    day: 'Sun',
    opponent: 'Omaha Storm Chasers',
    time: '6:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-76',
    date: 'Jun 24',
    day: 'Tue',
    opponent: 'Memphis Redbirds',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-77',
    date: 'Jun 25',
    day: 'Wed',
    opponent: 'Memphis Redbirds',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-78',
    date: 'Jun 26',
    day: 'Thu',
    opponent: 'Memphis Redbirds',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-79',
    date: 'Jun 27',
    day: 'Fri',
    opponent: 'Memphis Redbirds',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-80',
    date: 'Jun 28',
    day: 'Sat',
    opponent: 'Memphis Redbirds',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-81',
    date: 'Jun 29',
    day: 'Sun',
    opponent: 'Memphis Redbirds',
    time: '5:05 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  },
  {
    id: 'game-82',
    date: 'Jul 2',
    day: 'Wed',
    opponent: 'Norfolk Tides',
    time: '6:35 PM',
    location: 'away',
    result: 'Scheduled',
    events: []
  }
];

export async function GET() {
  try {
    return NextResponse.json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    return NextResponse.json({ error: 'Failed to fetch games' }, { status: 500 });
  }
}

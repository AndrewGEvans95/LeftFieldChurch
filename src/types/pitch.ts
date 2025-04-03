export type Pitch = {
  id: string;
  name: string;
  description: string;
  grip: string;
  movement: string;
  speed: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
  wikiUrl: string;
  prayer: string;
}; 
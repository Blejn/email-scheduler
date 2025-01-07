import { MusicGenre } from '@org/shared';

export interface Post {
  id: string;
  title: string;
  content: string;
  genre: MusicGenre;
}

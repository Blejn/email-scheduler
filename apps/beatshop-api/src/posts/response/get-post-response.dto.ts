import { MusicGenre } from '@org/shared';

export class GetPostResponseDto {
  id: string;
  title: string;
  content: string;
  genre: MusicGenre;
}

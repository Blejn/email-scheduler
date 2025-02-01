import { MusicGenre } from '@org/libs';
import { IsEnum, IsOptional } from 'class-validator';

export class GetFilterPostsRequestDto {
  @IsOptional()
  @IsEnum(MusicGenre)
  genre?: MusicGenre;
}

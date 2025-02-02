import { MusicGenre } from '@org/libs';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class GetFilterPostsRequestDto {
  @IsOptional()
  @IsEnum(MusicGenre)
  genre?: MusicGenre;

  @IsOptional()
  @IsString()
  title?: string;
}

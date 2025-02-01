import { MusicGenre } from '@org/shared';
import { IsString, IsOptional, IsEnum } from 'class-validator';

export class UpdatePostRequestDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsEnum(MusicGenre)
  @IsOptional()
  genre?: MusicGenre;
}

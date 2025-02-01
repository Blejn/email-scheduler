import { MusicGenre } from '@org/libs';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreatePostRequestDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsEnum(MusicGenre)
  genre: MusicGenre;
}

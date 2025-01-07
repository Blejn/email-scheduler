import { Injectable } from '@nestjs/common';
import { Post } from './post.model';
import { MusicGenre } from '@org/libs';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: '1',
      title: 'Post 1',
      content: 'This is the content of post 1',
      genre: MusicGenre.HIP_HOP,
    },
    {
      id: '2',
      title: 'Post 2',
      content: 'This is the content of post 2',
      genre: MusicGenre.TRAP,
    },
    {
      id: '3',
      title: 'Post 3',
      content: 'This is the content of post 3',
      genre: MusicGenre.POP,
    },
  ];

  getAllPosts() {
    return this.posts;
  }
}

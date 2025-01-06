import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [
    {
      id: 1,
      title: 'Post 1',
      content: 'This is the content of post 1',
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'This is the content of post 2',
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'This is the content of post 3',
    },
  ];

  getAllPosts() {
    return this.posts;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { MusicGenre } from '@org/libs';
import { v4 as uuidv4 } from 'uuid';
import { CreatePostRequestDto } from './request';
import { Post } from './entities/post.entity';
import { GetPostResponseDto } from './response/get-post-response.dto';
import { UpdatePostRequestDto } from './request/update-post-request.dto';
import { GetFilterPostsRequestDto } from './request/get-filter-posts-request.dto';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: '1',
      title: 'Post 1',
      content: 'This is the content of post 1',
      genre: MusicGenre.HIP_HOP,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      title: 'Post 2',
      content: 'This is the content of post 2',
      genre: MusicGenre.TRAP,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      title: 'Post 3',
      content: 'This is the content of post 3',
      genre: MusicGenre.POP,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  getAllPosts(filter?: GetFilterPostsRequestDto) {
    if (!filter) {
      return this.posts;
    }
    let posts = this.posts;
    if (filter.genre) {
      posts = posts.filter((post) => post.genre === filter.genre);
    }
    if (filter.title) {
      posts = posts.filter((post) => post.title === filter.title);
    }
    return posts;
  }

  getAllFilteredPosts(filter: GetFilterPostsRequestDto) {
    return this.posts.filter((post) => post.genre === filter.genre);
  }

  createPost(post: CreatePostRequestDto): Post {
    const postId = uuidv4();
    const newPost: Post = {
      ...post,
      id: postId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.posts.push(newPost);
    return newPost;
  }

  getPostById(id: string): GetPostResponseDto {
    const post = this.posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      genre: post.genre,
    };
  }

  deletePost(id: string): void {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      throw new NotFoundException('Post not found');
    }
    this.posts.splice(index, 1);
  }

  updatePost(id: string, post: UpdatePostRequestDto): Post {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      throw new NotFoundException('Post not found');
    }
    this.posts[index] = {
      ...this.posts[index],
      ...post,
      updatedAt: new Date(),
    };
    return this.posts[index];
  }
}

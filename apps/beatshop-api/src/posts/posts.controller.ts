import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostType } from './entities/post.entity';
import {
  CreatePostRequestDto,
  GetFilterPostsRequestDto,
  UpdatePostRequestDto,
} from './request';
import { GetPostResponseDto } from './response/get-post-response.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts(@Query() filter?: GetFilterPostsRequestDto): PostType[] {
    return this.postsService.getAllPosts(filter);
  }

  @Post()
  createPost(@Body() post: CreatePostRequestDto): PostType {
    return this.postsService.createPost(post);
  }

  @Get('/:id')
  getPostById(@Param('id') id: string): GetPostResponseDto {
    return this.postsService.getPostById(id);
  }
  @Delete('/:id')
  deletePostById(@Param('id') id: string): void {
    return this.postsService.deletePost(id);
  }
  @Patch('/:id')
  updatePostById(
    @Param('id') id: string,
    @Body() post: UpdatePostRequestDto,
  ): PostType {
    return this.postsService.updatePost(id, post);
  }
}

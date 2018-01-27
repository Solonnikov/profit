import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';

@Injectable()
export class PostsService {

  constructor(public http: HttpClient) { }

  getPosts() {
    return this.http.get('assets/data/posts.json');
  }

  getComments() {
    return this.http.get('assets/data/comments.json');
  }

}

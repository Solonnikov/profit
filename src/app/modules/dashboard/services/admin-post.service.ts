import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Post } from '../models/Post';

@Injectable()
export class AdminPostService {
  posts: any;

  private postSource = new BehaviorSubject<Post>({ id: null, title: null, body: null });
  selectedPost = this.postSource.asObservable();

  constructor(public http: HttpClient) {
  }

  getPosts(): Observable <any> {
    return this.http.get('assets/data/posts.json');
  }

  setFormPost(post: Post) {
    this.postSource.next(post);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Post } from '../models/Post';

@Injectable()
export class AdminPostService {
  posts: Post[];

  private postSource = new BehaviorSubject<Post>({ id: null, title: null, body: null });
  selectedPost = this.postSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor(public http: HttpClient) {
    this.posts = [];
  }

  getPosts(): Observable<Post[]> {
    if (localStorage.getItem('posts') === null) {
      this.posts = [];
    } else {
      this.posts = JSON.parse(localStorage.getItem('posts'));
      return of(this.posts);
    }
  }

  setFormPost(post: Post) {
    this.postSource.next(post);
  }

  addPost(post: Post) {
    this.posts.unshift(post);

    // add to local storage
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  updatePost(post: Post) {
    this.posts.forEach((current, index) => {
      if (post.id === current.id) {
        this.posts.splice(index, 1);
      }
    });
    this.posts.unshift(post);
    // update localstorage
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  deletePost(post: Post) {
    this.posts.forEach((current, index) => {
      if (post.id === current.id) {
        this.posts.splice(index, 1);
      }
    });

    // Delete from local storage
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  clearState() {
    this.stateSource.next(true);
  }
}

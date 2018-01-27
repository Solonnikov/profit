import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(public postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}

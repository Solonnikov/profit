import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { AdminPostService } from '../../services/admin-post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  selectedPost: Post;
  loaded: boolean = false;

  constructor(public adminPostService: AdminPostService) { }

  ngOnInit() {
    this.adminPostService.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedPost = {
          id: '',
          title: '',
          body: ''
        };
      }
    });

    this.adminPostService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.loaded = true;
    });
  }

  onSelect(post: Post) {
    this.adminPostService.setFormPost(post);
    this.selectedPost = post;
  }

  onDelete(post: Post) {
    if (confirm('Are you sure?')) {
      this.adminPostService.deletePost(post);
    }
  }
}

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

  constructor(public adminPostService: AdminPostService) { }

  ngOnInit() {
    this.adminPostService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onSelect(post: Post) {
    this.adminPostService.setFormPost(post);
  }

  onDelete(post: Post) {
    if(confirm('Are you sure?') {
      this.adminPostService.deletePost(post);
    })
  }
}

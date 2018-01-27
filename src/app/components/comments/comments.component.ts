import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/Comment';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any;

  constructor(public postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }
}

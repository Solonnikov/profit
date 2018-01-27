import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/Comment';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input('comment') comment: Comment;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }
}

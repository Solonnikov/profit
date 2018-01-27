import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Comment } from '../../models/Comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Output() commentAdded = new EventEmitter<Comment>();
  body: string;
  date = new Date();

  constructor() { }

  ngOnInit() {
  }

  addComment() {
    this.commentAdded.emit({ body: this.body, date: this.date });
    this.body = '';
  }
}

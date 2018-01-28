import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { AdminPostService } from '../../services/admin-post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  id: string;
  title: string;
  body: string;
  isNew = true;

  constructor(public adminPostService: AdminPostService) { }

  ngOnInit() {
    // Subscribe to the selected post observable
    this.adminPostService.selectedPost.subscribe(post => {
      if (post.id !== null) {
        this.isNew = false;
        this.id = post.id;
        this.title = post.title;
        this.body = post.body;
      }
    })
  }

  onSubmit() {
    // Check if new log
    if (this.isNew) {
      //  Crate a new log
      const newPost = {
        id: this.generateId(),
        title: this.title,
        body: this.body
      }

      console.log(newPost);

      // Add Post
      this.adminPostService.addPost(newPost);
    } else {
      //  Create post to be updated
      const updatedPost = {
        id: this.id,
        title: this.title,
        body: this.body
      }
      // Update Post
      this.adminPostService.updatePost(updatedPost);
    }

    this.clearState();
  }

  // Clear State
  clearState() {
    this.isNew = true;
    this.id = '';
    this.title = '';
    this.body = '';
    this.adminPostService.clearState();
  };

  // Generate ID
  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

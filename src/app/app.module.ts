import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PostsService } from './services/posts.service';

import { AppComponent } from './app.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCommentComponent,
    CommentComponent,
    CommentsComponent,
    PostsComponent,
    PostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: PostsComponent },
      { path: 'admin', loadChildren: './modules/auth/auth.module#AuthModule' }
    ]),
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

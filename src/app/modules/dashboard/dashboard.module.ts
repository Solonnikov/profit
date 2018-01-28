import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';

import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminPostService } from './services/admin-post.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'post-form', component: PostFormComponent, canActivate: [AuthGuard] },
      { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
    ])
  ],
  declarations: [
    PostsComponent,
    PostFormComponent,
    DashboardComponent
  ],
  providers: [
    AuthGuard,
    AdminPostService
  ]
})
export class DashboardModule { }

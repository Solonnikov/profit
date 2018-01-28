import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' }
    ])
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }

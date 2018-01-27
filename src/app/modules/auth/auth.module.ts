import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthService } from './services/auth.service';
import { FlashMessagesModule} from 'ngx-flash-messages';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlashMessagesModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
    ])
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }

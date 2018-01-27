import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/User';

import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  @Input() formDefault: User;
  loginForm: FormGroup;

  @Output() loginEmit = new EventEmitter<User>();

  constructor(private fb: FormBuilder,
    public router: Router,
    public authService: AuthService,
    public flashMessagesService: FlashMessagesService) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['formDefault'] && typeof this.formDefault === 'object') {
      this.loginForm.setValue(this.formDefault);
    }
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLoginSubmit() {
    this.loginEmit.emit(this.loginForm.value);
    const user = this.loginForm.value;
    // Get user from LS
    const registeredUser = JSON.parse(this.authService.getRegisteredUser())

    // Check if email and password are valid
    if (user.email === registeredUser.email && user.password === registeredUser.password) {
      this.flashMessagesService.show('You are now logged in', {
        classes: ['alert', 'alert-success']
      });
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
      localStorage.setItem('token', token);

      this.router.navigate(['admin/dashboard']);

    } else if (user.email !== registeredUser.email) {
      this.flashMessagesService.show('Wrong email', {
        classes: ['alert', 'alert-danger']
      });
    } else if (user.password !== registeredUser.password) {
      this.flashMessagesService.show('Wrong password', {
        classes: ['alert', 'alert-danger']
      });
    }
  }
}

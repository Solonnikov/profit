import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/User';
import { PasswordValidation } from '../../validators/password-validation';

import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges {
  @Input() formDefault: User;
  registerForm: FormGroup;

  @Output() registerEmit = new EventEmitter<User>();

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
      this.registerForm.setValue(this.formDefault);
    }
  }

  // Create Register Form
  createForm(): void {
    const nameRegex: any = '([a-zA-Z])+';
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {
        validator: PasswordValidation.MatchPassword
      })
  }

  // Register User
  onRegisterSubmit() {
    this.registerEmit.emit(this.registerForm.value);
    const user = this.registerForm.value;
    this.authService.registerUser(user);
    this.flashMessagesService.show('You are now registered and can log in', {
      classes: ['alert', 'alert-success']
    });
    // this.router.navigate(['admin/login']);
  }
}

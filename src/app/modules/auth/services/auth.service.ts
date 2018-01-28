import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable()
export class AuthService {
  user: User;

  constructor(public http: HttpClient) { }

  registerUser(user: Object) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getRegisteredUser() {
    return localStorage.getItem('user');
  }

  loggedIn() {
    if (localStorage.getItem('token') !== null) {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}

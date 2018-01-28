import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', {
      classes: ['alert', 'alert-success']
    });
    this.router.navigate(['/']);
  }
}

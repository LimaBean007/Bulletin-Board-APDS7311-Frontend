import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
//constructor
  constructor(public authService: AuthServiceService, private router: Router) { }

  isLoggedIn: boolean = false;


  ngOnInit(): void {
    //subscribes to the logged in variable in the auth service
    //nav bar changes availabale options depending on if there is a user logged in or not
    this.authService.checkLogin();
  }

  onLogout() {
    //logs the user out and returns them to the login page
    this.authService.logout();
    alert("Successfully Logged out")
    this.router.navigateByUrl('/login');
  }

}

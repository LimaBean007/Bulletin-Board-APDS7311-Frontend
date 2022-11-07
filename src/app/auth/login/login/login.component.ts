import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
//imports
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //constructor
  constructor(public authservices: AuthServiceService, private router: Router) { }
  //decalre error messages
  emailError: string = 'Please enter a valid email address';
  passwordError: string = 'Please enter a password that conatains lowercase, uppercase letters and at least one number';

  option: string = this.router.url

  ngOnInit(): void {
  }
  //login method when button clicked
  onlogin(loginform: NgForm) {
    if (loginform.invalid) {
      return;
    }
    else {
      //calls method and alerts login
      this.authservices.login(loginform.value.enteredusername, loginform.value.enteredpassword)
      
    }
  }


}

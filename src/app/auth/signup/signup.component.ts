import { Component, OnInit, SecurityContext } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //constructor
  constructor(public authservices: AuthServiceService, private router: Router, private sanitizer: DomSanitizer) { }
  emailError: string = 'Please enter a valid email address';
  passwordError: string = 'Please enter a password that conatains lowercase, uppercase letters and at least one number';

  ngOnInit(): void {
  }
  option: string = this.router.url
  //sign up method
  onlogin(signupform: NgForm) {
    //checks if its valid
    if (signupform.invalid) {
      return;
    }
    else {
      //calls sign up method
      this.authservices.signup(
        signupform.value.enteredusername,
        signupform.value.enteredpassword)
      
    }
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private token!: string;
  //observeable value that changes depending on if a valid token is stored or not
  private loggedIn = new Subject<boolean>();

  checkLogin() {
    if (this.token !=null || this.token !="") {
      return false;
    } else {
      return true;
    }
  }

  constructor(private http: HttpClient) { }

  getUpdatedLogin() {
    return this.loggedIn.asObservable();
  }
  //sign up method taking in a username and password and assigning that to the backend url
  signup(userusername: string, userpassword: string) {
    this.http.post('https://localhost:3000/api/users/signup', { username: userusername, password: userpassword })
      .subscribe(response => {
        alert("Account Created")
      });
  }
  //logout method
  logout() {
    //clears the session token
    this.token = "";
    //updates the logged in variable
    this.loggedIn.next(false);
  }
  //login method taking in username and password for backend url
  login(userusername: string, userpassword: string) {
    this.http.post<{ token: string }>('https://localhost:3000/api/users/login', { username: userusername, password: userpassword })
      .subscribe(response => {
        //assign token
        const token = response.token;
        //alert logged in
        alert("Successfully Logged in")
        this.token = token;
      });
  }
  getoken() {
    return this.token;
  }
}

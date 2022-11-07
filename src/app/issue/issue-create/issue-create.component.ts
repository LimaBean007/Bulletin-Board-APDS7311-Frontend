import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { IssueServiceService } from '../issue-service.service';
//imports
@Component({
  selector: 'app-issue-create',
  templateUrl: './issue-create.component.html',
  styleUrls: ['./issue-create.component.css']
})
export class IssueCreateComponent {
  //custom error message
  postError: string = 'Post cannot be empty';
  postid:string="";
  //constructor
  constructor(public issueservice: IssueServiceService) { }

  //add post
  onaddissue(issueform: NgForm) {
    //check if invalid
    if (issueform.invalid) {
      //returns invalid
      alert('invalid')
      return
    }
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
     for (let i = 0; i < 10; i++) {
      this.postid += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    
    //calls method
    this.issueservice.addissue_service(this.postid, issueform.value.enteredName)
    //resets form
    issueform.resetForm()
  }

}

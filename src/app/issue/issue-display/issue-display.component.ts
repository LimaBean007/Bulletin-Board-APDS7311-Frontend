import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IssueServiceService } from '../issue-service.service';

@Component({
  selector: 'app-issue-display',
  templateUrl: './issue-display.component.html',
  styleUrls: ['./issue-display.component.css']
})
export class IssueDisplayComponent implements OnInit {
  //list
  issues: { _id: string, id: string, name: string, __v: string }[] = [];
  //constructor
  constructor(public issueservice: IssueServiceService) { }
  private issuesSubscription!: Subscription;

  ngOnInit(): void {
    //gets the service
    this.issueservice.getissue_service();
    //assigns
    this.issuesSubscription = this.issueservice.getUpdateListener()
      .subscribe((issues: { _id: string, id: string, name: string, __v: string }[]) => {
        this.issues = issues;
      });
  }
  ngOnDestroy() {

    this.issuesSubscription.unsubscribe();
  }
  ondelete(issueid: string) {
    //calls delete method
    this.issueservice.deleteissue_service(issueid)

  }

}


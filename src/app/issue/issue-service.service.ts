import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueServiceService {
  //issue 
  private issuesdisplay: { _id: string, id: string, name: string, __v: string }[] = [];
  private updatedissuesdisplay = new Subject<{ _id: string, id: string, name: string, __v: string }[]>();
  //constructor
  constructor(private http: HttpClient) { }
  //add method for post takes in ID and description
  addissue_service(pid: string, pname: string) {
    //calls the url backend for add
    this.http.post<{ message: String, issue: any }>('https://localhost:3000/api/issues', { id: pid, name: pname })
      .subscribe((theissue) => {
        this.issuesdisplay.push(theissue.issue);
        //show added
    alert("Post added")
        this.updatedissuesdisplay.next([...this.issuesdisplay]);
      })
  }
  //get post method
  getissue_service() {
    //gets posts from url backend
    this.http.get<{ message: String, issues: any }>('https://localhost:3000/api/issues')
      .subscribe((theissue) => {
        //stores in current obj
        this.issuesdisplay = theissue.issues;
        this.updatedissuesdisplay.next([...this.issuesdisplay]);
      })
  }
  //delete serivce method calling the backend url
  deleteissue_service(issueid: string) {
    this.http.delete('https://localhost:3000/api/issues/' + issueid)
    .subscribe(() => {
      const updatedissuedeleted = this.issuesdisplay.filter(issue => issue._id !== issueid);
      this.issuesdisplay = updatedissuedeleted;
      this.updatedissuesdisplay.next([...this.issuesdisplay]);
      alert("Post deleted")
    })
  }

  getUpdateListener() {
    return this.updatedissuesdisplay.asObservable();
  }
}

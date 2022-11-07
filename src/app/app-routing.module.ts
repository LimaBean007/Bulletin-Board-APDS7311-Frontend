import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { IssueCreateComponent } from "./issue/issue-create/issue-create.component";
import { IssueDisplayComponent } from "./issue/issue-display/issue-display.component";
//routes for button method redirects
const routes : Routes = [
    {path:'login',component:LoginComponent},
    {path:'add',component:IssueCreateComponent},
    {path:'issues',component:IssueDisplayComponent},
    {path:'signup',component:SignupComponent},
    {path:'',component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes), MatFormFieldModule],
    exports: [RouterModule],

})
export class AppRoutingModule{}
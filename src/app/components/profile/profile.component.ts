import { Component, OnInit } from '@angular/core';
import {GithubService}  from  '../../services/github.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  userProfile=[];
  repos =[];
  username:string;
  constructor(private _githubService:GithubService) { }

   ngOnInit() {
         this.getUserDetails();
     }
     getUserDetails()
     {
         this._githubService.getUser().then(response=> this.userProfile = response);
         this._githubService.getRepos().then(repos =>  this.repos = repos);
     }
     searchUser()
     {
        this._githubService.updateUserName(this.username);
        this.getUserDetails();
        
     }
     
}

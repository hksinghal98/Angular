import { Component, OnInit } from '@angular/core';
import { GitSortService} from '../git-sort.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public user = [];
  public repos:any;
  constructor(private _gitSortService:GitSortService, private router:Router) {
        console.log("main component...")
   }

  ngOnInit() {
  
    this._gitSortService.getRepos().subscribe(data=> {
      this.repos = data;
    });

    this._gitSortService.getUser().subscribe(data => {
      this.user = data;
    })
  }

  routeToGetDetails(index){
    var repo = this.repos[index];
    console.log(repo);
    this._gitSortService.repoIndex(this.repos[index]);
    this.router.navigate(['/repo_details', repo.owner.login, repo.id,repo.name]);
  }

}

import { Component, OnInit } from '@angular/core';
import { GitSortService} from '../git-sort.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public user = [];
  public repos:any;
  constructor(private _gitSortService:GitSortService) {
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

}

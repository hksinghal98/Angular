import { Component, OnInit } from '@angular/core';
import { GitSortService } from '../git-sort.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public repos:any;
  constructor(private _gitSortService:GitSortService, private router:Router) { }

  ngOnInit() {
    this._gitSortService.favouriteRepo().subscribe(data =>{
      this.repos = data
    });
  }
  routeToGetDetails(index){
    var repo = this.repos[index];
    console.log(repo);
    this._gitSortService.repoIndex(repo);
    this.router.navigateByUrl('/repo_details');
  }

}

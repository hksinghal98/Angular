import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { GitSortService } from './git-sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitSort';
  public searchKeyword ="";
  public search ="";

  constructor(private _searchService: GitSortService, private router:Router){}
  newEvent(msg){
        this.searchKeyword = msg;
        this._searchService.myMethod(this.searchKeyword);
  }
  routeToSearch(){
    this.router.navigateByUrl("").then(()=> {
      this.router.navigateByUrl('search')
    })
  }
  routeToCreateRepo(){
    this.router.navigateByUrl("").then(()=> {
      this.router.navigateByUrl('create')
    })
  }  

  routeToFavourites(){
    this.router.navigateByUrl("").then(()=> {
      this.router.navigateByUrl('favourites')
    })
  }  
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitSortService } from '../git-sort.service';
import { SearchService } from '../search-service.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  public repos =[];
  constructor(public _searchService:GitSortService) { 
    console.log("in constructor");
  }

  ngOnInit() {
    this._searchService.search().subscribe(data=> {
      this.repos = data;
      console.log(this.repos);
    });
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Iuser} from './info'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchKeyword = "";
  constructor(private _http:HttpClient) { }

  myMethod(data){
    this.searchKeyword = data;
    console.log(this.searchKeyword);
  }
  search():Observable<Iuser[]>{
    console.log("in service");
    return this._http.get<Iuser[]>("https://api.github.com/search/repositories?q="+this.searchKeyword);
  }
}

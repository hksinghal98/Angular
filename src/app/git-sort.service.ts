import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser} from './info';

@Injectable({
  providedIn: 'root'
})
export class GitSortService {
  private username = 'hksinghal98';
  private client_id = 'b4ffb939200c629885d0';
  private client_secret = 'f4aee5cad65ba566b735d7d72f1b58c8385df111';
  
  constructor(private _http:HttpClient) {
          console.log("Service Init..........");
   }

  //2f6823a345eee72b837f8c2a489cfee759f6eef4
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token 2f6823a345eee72b837f8c2a489cfee759f6eef4'
    })
  }
   public userName = "hksinghal98";
   public repo_url = "https://api.github.com/user/repos";
   public profile_url = "https://api.github.com/users/"+this.userName;
   public search_url = "https://api.github.com/search/repositories?q=";
   public repos = [];
   public profile =[];
   public searchKeyword ="";
   public my_url ="";

  getRepos(){
      
    return this._http.get<any>(this.repo_url, this.httpOptions);
   }

  getUser(): Observable<Iuser[]> {
    return this._http.get<Iuser[]>(this.profile_url);
  }


  myMethod(msg){
    this.searchKeyword=msg;
  }
  search():Observable<Iuser[]>{
    console.log("in service");
    return this._http.get<Iuser[]>("https://api.github.com/search/repositories?q="+this.searchKeyword);
  }


  

}

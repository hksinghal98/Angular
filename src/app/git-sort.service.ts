import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser} from './info';

@Injectable({
  providedIn: 'root'
})
export class GitSortService {
  private username = 'hksinghal98';
  
  constructor(private _http:HttpClient) {
          console.log("Service Init..........");
   }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token 81a4b7447becddb99195f68255462069012095ab'
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
   public repoData =""
   public Index:any;
   public value:any;  
   public flag:boolean;
   

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
  setRepoData(repoData){
    this.repoData=JSON.stringify(repoData);
  }
  createRepo(repoData:any):Observable<any>{
       return this._http.post<any>(this.repo_url,JSON.stringify(repoData),this.httpOptions);
  }

  repoIndex(data){
    this.Index = data;
  }
  getRepoData(){
    return this.Index;
  }
  repoDelete(repoName):Observable<any>{
    return this._http.delete<any>("https://api.github.com/repos/hksinghal98/"+repoName, this.httpOptions);
  }

  favouritesList(name):Observable<any>{
    console.log(name);
    return this._http.get<any>("http://localhost:3000/repos?name="+name);
  }

  addFavourite(name,repoID,desc,cmnts):Observable<any>{
    console.log("smnt: ",cmnts);
    var json = {
      name: String(name),
      id: repoID,
      desc: String(desc),  
      comment: String(cmnts)  
    }

    var httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      return this._http.post<any>("http://localhost:3000/repos", JSON.stringify(json), httpOptions1);
  }

  removeFavourite(name, repoID):Observable<any>{
    return this._http.delete<any>("http://localhost:3000/repos/"+repoID, this.httpOptions);
  }

  favouriteRepo():Observable<any>{
    return this._http.get<any>("http://localhost:3000/repos");
  }

  editComment(repoID,cmnts):Observable<any>{
    console.log("smnt: ",cmnts);
    var json = {
      id: repoID,
      comment: String(cmnts)  
    }

    var httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      return this._http.patch<any>("http://localhost:3000/repos/"+repoID, JSON.stringify(json), httpOptions1);
  }
  
}

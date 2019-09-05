import { Component, OnInit } from '@angular/core';
import { GitSortService} from '../git-sort.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  public details:any;
  public owner:any;
  public name:any;
  public id:any;
  constructor(private _gitSortService:GitSortService, private router:Router, private route:ActivatedRoute) { 
    this.route.params.subscribe(params=>{
            this.owner = params['owner'];
            this.name = params['name'];
            this.id = params['id'];

    })
  }

  public getDetails:any;
  public user:any;
  public fav:any;
  public flag:any;

  ngOnInit() {
    //this.details=this._gitSortService.getRepoData();
    this._gitSortService.getRepoData(this.owner, this.name).subscribe(data=>{this.details=data});
    console.log(this.details);
    this._gitSortService.favouritesList(this.name).subscribe(data=>
      {
        if(data['length']==0) {
          this.flag = true;
        }
        else {
          this.flag = false;
        }
        console.log(this.flag);
      });

  }

  deleteRepo(repoName){
    console.log(repoName);
    this._gitSortService.repoDelete(repoName).subscribe(data => data);
        this.router.navigateByUrl('');
  }

  addToFavourites(comments){
    console.log(comments);
    this._gitSortService.addFavourite(this.details.name, this.details.id, this.details.description,comments).subscribe(data=>{
      this.router.navigateByUrl('#').then(()=> {
        this.router.navigate(['repo_details',this.owner,this.id,this.name]);
      })
    });
   
  }

  removeFavourites(){
    this._gitSortService.removeFavourite(this.details.name, this.details.id).subscribe(data=>{
      this.router.navigateByUrl('#').then(()=> {
        this.router.navigate(['repo_details',this.owner,this.id,this.name]);
      })
    });
    
  }

  editComments(comments){
        this._gitSortService.editComment(this.details.id, comments).subscribe(data=>{
          this.router.navigateByUrl('#').then(()=> {
            this.router.navigate(['repo_details',this.owner,this.id,this.name]);
          })
        });
  }
}

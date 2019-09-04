import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { GitSortService } from '../git-sort.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css']
})
export class CreateRepoComponent implements OnInit {

  public repoData=NgForm;
  constructor(private gitSortService: GitSortService, private router:Router){}

  ngOnInit(){
  }

 Repo(repo){
 
    this.gitSortService.createRepo(repo).subscribe(data => data);
        this.router.navigateByUrl('');
     
  }

  

}

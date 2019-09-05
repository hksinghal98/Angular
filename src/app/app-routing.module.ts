import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from './search-list/search-list.component';
import { MainComponent } from './main/main.component';
import { CreateRepoComponent} from './create-repo/create-repo.component'
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path:'', component: MainComponent, pathMatch: 'full'},
  {path:'search', component: SearchListComponent},
  {path:'create', component: CreateRepoComponent},
  {path:'favourites', component: FavouriteComponent},
  {path:'repo_details/:owner/:id/:name', component: RepoDetailsComponent},
  {path:'repo_details', component: RepoDetailsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SearchListComponent, MainComponent,CreateRepoComponent,RepoDetailsComponent,FavouriteComponent, PageNotFoundComponent]

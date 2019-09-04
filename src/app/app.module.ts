import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSortService } from './git-sort.service';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchListComponent} from './search-list/search-list.component';
import { CreateRepoComponent } from './create-repo/create-repo.component';
import {FormsModule} from '@angular/forms';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { FavouriteComponent } from './favourite/favourite.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchListComponent,
    routingComponents,
    CreateRepoComponent,
    RepoDetailsComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitSortService],
  bootstrap: [AppComponent]
})
export class AppModule { }

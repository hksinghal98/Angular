import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSortService } from './git-sort.service';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchListComponent} from './search-list/search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchListComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GitSortService],
  bootstrap: [AppComponent]
})
export class AppModule { }

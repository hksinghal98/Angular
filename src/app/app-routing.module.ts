import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from './search-list/search-list.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path:'', component: MainComponent, pathMatch: 'full'},
  {path:'search', component: SearchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SearchListComponent, MainComponent]

import { CharacterdetailComponent } from './pages/characterdetail/characterdetail.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:"",component: HomeComponent, pathMatch: "full"},
  {path:"characters",component: CharactersComponent},
  {path:"about",component:AboutComponent},
  {path:"characters/:characterID", component: CharacterdetailComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

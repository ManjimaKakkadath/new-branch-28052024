import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviecompComponent } from './Components/moviecomp/moviecomp.component';
import { AddmovieComponent } from './Components/addmovie/addmovie.component';

const routes: Routes = [{
  path:'',
 component: MoviecompComponent
},
{
  path:'movieLink',
  component : MoviecompComponent

}, 
{
  path: 'addmovie/add',
  component: AddmovieComponent
}, 
{
  path: 'EditMovie/edit/:id',
  component: AddmovieComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

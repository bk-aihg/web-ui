import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './components/home/home.component';
import { CraftingComponent }  from './components/crafting/crafting.component';
import { BlogComponent }  from './components/blog/blog.component';

const appRoutes: Routes = [
  
  {
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'crafting',
    component: CraftingComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

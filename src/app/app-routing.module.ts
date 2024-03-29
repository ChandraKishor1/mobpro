import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MobComponent } from './mob/mob.component';

const routes: Routes = [{path:'',component:HomeComponent},{path:'home',component:HomeComponent},{path:'about',component:AboutComponent},{path:'mobpro',component:MobComponent},{path:"**",component:MobComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

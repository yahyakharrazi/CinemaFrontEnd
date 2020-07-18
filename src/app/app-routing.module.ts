import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {   path: 'cinemas', component: CinemaComponent  },
  {   path: 'login', component: LoginComponent  },
  // {   path: 'cinema', component: CinemaComponent  },
  // {   path: 'cinema', component: CinemaComponent  },
  // {   path: 'cinema', component: CinemaComponent  }

  // { path: '/cinemas', title: 'Cinemas'},
  // { path: '/villes', title: 'Villes'},
  // { path: '/films', title: 'Films'},
  // { path: '/categories', title: 'Categories'},
  // { path: '/salles', title: 'Salles'},
  // { path: '/places', title: 'Places'},
  // { path: '/tickets', title: 'Tickets'},
  // { path: '/projections', title: 'Projections'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

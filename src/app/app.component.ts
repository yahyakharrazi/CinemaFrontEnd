import { Component } from '@angular/core';
import { AuthenticationService } from "./services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cinema-Front';

  constructor(private authService:AuthenticationService, private router:Router){  }

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }

  onLogout(){
    this.authService.logout()
    this.router.navigateByUrl('/login')
  }

  links = [
    { path: '/cinemas', title: 'Cinemas'},
    { path: '/villes', title: 'Villes'},
    { path: '/films', title: 'Films'},
    { path: '/categories', title: 'Categories'},
    { path: '/salles', title: 'Salles'},
    { path: '/places', title: 'Places'},
    { path: '/tickets', title: 'Tickets'},
    { path: '/projections', title: 'Projections'}
  ]
}

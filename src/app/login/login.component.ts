import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode: number=0

  constructor(private router: Router, private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogin(user){
    this.authService.login(user).subscribe(resp=>{
      let jwtToken = resp.headers.get('authorization')
      console.log(jwtToken)
      this.authService.saveToken(jwtToken)        
      this.router.navigateByUrl('/cinemas')  
    },
    err=>{
      this.mode=1
    })
  }
}

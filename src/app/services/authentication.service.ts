import { Injectable } from '@angular/core';
// import "rxjs/Rx"
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class AuthenticationService{
    private host:string="http://localhost:8085"
    private jwtToken:string
    private jwtHelper:JwtHelperService
    private roles:Array<any>=[]
    
    constructor(private http:HttpClient, private router:Router ){    }

    login2(user): Observable<any> {
        return this.http.post(this.host+"/login",{
          username: user.username,
          password: user.password  
        },httpOptions)
    }

    login(user){
        return this.http.post(this.host+"/login",user, {observe: 'response' })
    }

    public loadToken(){
        this.jwtToken = localStorage.getItem('token')
        return this.jwtToken
    }

    isAuthenticated(){
        const token = localStorage.getItem('token')
        if(token==null)
            return false
        else
            return true
        // console.log(!this.jwtHelper.isTokenExpired(token))
        // return !this.jwtHelper.isTokenExpired(token)
    }

    logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('roles')
    }

    saveToken(jwt:string){
        this.jwtToken = jwt
        localStorage.setItem('token',jwt)
        let jwtHelper = new JwtHelperService()
        this.roles= jwtHelper.decodeToken(this.jwtToken).roles
        localStorage.setItem('roles',this.roles[0]['authority'])
    }
}

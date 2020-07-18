import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(public auth:AuthenticationService,public router:Router){}

    canActivate():boolean{
        console.log('what am i doing here')
        if(!this.auth.isAuthenticated()){
            this.router.navigateByUrl('/login')
            this.auth.logout()
            return false
        }
        return true
    }
}

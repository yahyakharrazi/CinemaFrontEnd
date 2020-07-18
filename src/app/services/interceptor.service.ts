import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    urlsToNotUse: Array<string>;

    constructor(private auth:AuthenticationService ){
        this.urlsToNotUse= [
            'login',
            'signup',
            'imageFilm'
        ]
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (req.headers. get("login"))
    //     return next.handle(req);
    if (this.isValidRequestForInterceptor(req.url)) {
        console.log(req.url)
    
        let modifiedRequest = req.clone({
          setHeaders: {
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json',
            'Authorization': this.auth.loadToken(),
          }
        });
        return next.handle(modifiedRequest);
    }
    return next.handle(req);

    // req = req.clone({
    //   setHeaders: {
    //     'Content-Type' : 'application/json; charset=utf-8',
    //     'Accept'       : 'application/json',
    //     'Authorization': this.auth.loadToken(),
    //   },
    // })
    // return next.handle(req);
  }

  private isValidRequestForInterceptor(requestUrl: string): boolean {

    console.log(requestUrl.split('/')[3])
    for (let address of this.urlsToNotUse) {
        if(address.includes(requestUrl.split('/')[3])){
            return false
        }
    }
    return true

    // let positionIndicator: string = 'api/';
    // let position = requestUrl.indexOf(positionIndicator);
    // if (position > 0) {
    //     console.log("what")
    //   let destination: string = requestUrl.substr(position + positionIndicator.length);
    //   for (let address of this.urlsToNotUse) {
    //     if (new RegExp(address).test(destination)) {
    //       return false;
    //     }
    //   }
    // }
    // return true;
  }
}
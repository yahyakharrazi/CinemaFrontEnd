import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public host:string="http://localhost:8085"

  constructor(private http: HttpClient, private authService:AuthenticationService) { }

  public getVilles(){
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', this.authService.loadToken())
    }
    return this.http.get(this.host+'/villes', header)
  }

  // public getCategories(){
  //   return this.http.get(this.host+'/categories')
  // }

  public getCinemas(v){
    return this.http.get(v._links.cinemas.href)
  }

  public getSalles(c){
    return this.http.get(c._links.salles.href)
  }

  public getProjection(salle){
    let url = salle._links.projections.href.replace("{?projection}","")
    return this.http.get(url+"?projection=p1")
  }

  public getTicketPlaces(p){
    let url = p._links.tickets.href.replace("{?projection}","")
    return this.http.get(url+"?projection=tProj")
  }

  public payTickets(dataForm){
    return this.http.post(this.host+"/payerTickets", dataForm)
  }
}

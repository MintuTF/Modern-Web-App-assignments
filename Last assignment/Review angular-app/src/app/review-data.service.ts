import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { review } from "./review-list/review-list.component"


@Injectable({
  providedIn: 'root'
})
export class reviewsDataService {

  private apiBaseUrl: string = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  public getreviews(): Promise<review[]> {
    const url: string = this.apiBaseUrl + "/reviews";
    return this.http.get(url).toPromise()
      .then(response => response as review[])
      .catch(this.handleError);
  }
  public getreview(id: string): Promise<review> {
    const url: string = this.apiBaseUrl + "/reviews/" + id;
    return this.http.get(url).toPromise()
      .then(response => response as review)
      .catch(this.handleError);
  }
  public addreview(body:any): Promise<review> {
    console.log(body)
    const url: string = this.apiBaseUrl + "/reviews" ;
    return this.http.post(url,body).toPromise()
      .then(response => response as review)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.log("Something went wrong", error);
    return Promise.reject(error.message || error);

  }
  public deleteOnereview(id:string):Promise<any>{
    const url: string = this.apiBaseUrl + "/reviews/"+id ;
    return this.http.delete(url).toPromise()
      .then(response => response as review)
      .catch(this.handleError);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { MovieOMDB } from './movieOMDB';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
 
  private _urlGet: string ="http://localhost:8081/api/v1/movies"; 
  private _urlPost: string="http://localhost:8081/api/v1/movie";
  private _urlDelete: string="http://localhost:8081/api/v1/delete/";
  private omdbUrl: string = "http://www.omdbapi.com/?t=";
  private apiKey: string = "&apikey=6db283eb"

  constructor(private http:  HttpClient) { }
 
  saveMovie(movie:Employee):Observable<Employee>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post<Employee>(this._urlPost,movie);
  }
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this._urlGet);
  }
  searchMovie(title:string){
    let url =`${this.omdbUrl}${title}${this.apiKey}`;
    return this.http.get(url);
  }
  deleteMovie(movieId){
    return this.http.delete(this._urlDelete+movieId);
  }
}

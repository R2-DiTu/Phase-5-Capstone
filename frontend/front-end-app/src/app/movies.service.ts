import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from './movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
baseUrl:string="http://localhost:9090/movies";

  constructor(public http:HttpClient) { }


  loadAllMoviesInfo():Observable<Movies[]> {
    return this.http.get<Movies[]>(`${this.baseUrl}/find`);
  }

  storeMovies(movies:any):Observable<string> {
    return this.http.post(`${this.baseUrl}/store`,movies,{responseType:'text'});
  }

  deleteMovies(mid:number):Observable<string>{
    return this.http.delete(`${this.baseUrl}/delete/${mid}`,{responseType:'text'});
  }

  updateMovies(movies:any):Observable<string>{
    return this.http.put(`${this.baseUrl}/update`,movies,{responseType:'text'});
  }

}

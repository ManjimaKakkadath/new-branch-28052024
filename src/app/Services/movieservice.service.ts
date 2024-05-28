import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movies } from '../Model/Movies';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  baseapiurl: string ="https://localhost:7289";
  constructor(private http: HttpClient) { }

  getmovies(): Observable <movies[]> {
    return this.http.get<movies[]>(this.baseapiurl + '/api/Movies')
  }
  getmoviesById(id: string): Observable <movies> {
    return this.http.get<movies>(this.baseapiurl + '/api/Movies/' + id)
  }

  AddMovies(id: number,newmovies : movies): Observable<movies>{    
    return this.http.post<movies>(this.baseapiurl + '/api/movies/'+ id,newmovies);
  }
  
  DeleteMovies(id: number): Observable<movies>{
    return this.http.delete<movies>(this.baseapiurl + '/api/movies/' + id)}

    UpdateMovies(id: number,newmovies : movies): Observable<movies>{
      return this.http.put<movies>(this.baseapiurl + '/api/movies/' + id,newmovies)}
}

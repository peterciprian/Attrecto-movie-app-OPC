import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public $movies: Observable<Movies>;
  public language: string;
  public queryString = new BehaviorSubject('Game');
  public page = 1;

  constructor(private http: HttpClient) {
    this.language = this.getLang();
    this.fetchMovies();
  }

  getLang(): string {
    if (navigator.languages !== undefined) {
      return navigator.languages[0];
    }
    else {
      return navigator.language;
    }
  }
  fetchMovies(): void {
    this.$movies = this.getMovies();
  }
  getMovies(): Observable<Movies> {
    const headers = new HttpHeaders();
    return this.http.get<Movies>(`https://api.themoviedb.org/3/search/multi?api_key=${environment.apiKey}&language=${this.language}&query=${this.queryString.value}&page=${this.page}&include_adult=false`, { headers });
  }
}

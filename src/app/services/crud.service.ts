import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Details } from '../interfaces/details';
import { Genres } from '../interfaces/genre';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root',
})
export class CrudService {

  public movies: Movies;
  public language: string;
  public $queryString = new BehaviorSubject<string>('');
  public genreMap: Map<number, string>;

  constructor(private http: HttpClient) {
    this.language = this.getLang();
    this.processGenres();
    this.getMovies(1);
    this.$queryString.subscribe( (qString) => {
      if (qString.length > 2) {
        this.getMovies(1);
      }
    });
  }

/**
 * reads the browsers language
 */
  public getLang(): string {
    if (navigator.languages !== undefined) {
      return navigator.languages[0];
    } else {
      return navigator.language;
    }
  }

/**
 * stores the movies in movies variable
 * @param page
 */
  public getMovies(page: number): void {
    this.fetchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }

/**
 * fetches movie infos
 * @param page number of the required page
 */
  public fetchMovies(page): Observable<Movies> {
    const headers = new HttpHeaders();
    return this.http.get<Movies>(`https://api.themoviedb.org/3/search/multi?api_key=${environment.apiKey}&language=${this.language}&query=${this.$queryString.value}&page=${page}&include_adult=false`, { headers });
  }

/**
 * fetches the sepcified movie's details
 * @param movieId id of the movie
 */
  public fetchDetails(movieId): Observable<Details> {
    const headers = new HttpHeaders();
    return this.http.get<Details>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${environment.apiKey}&language=${this.language}`, { headers });
  }

/**
 * fetches all genres from server
 */
  private fetchGenres(): Observable<Genres> {
    const headers = new HttpHeaders();
    return this.http.get<Genres>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${environment.apiKey}&language=${this.language}`, { headers });
  }

/**
 * orders fetched genres to a map, where key is genre's id, and value is gerne's name
 */
  private processGenres(): void {
    const genreMap = new Map<number, string>();
    this.fetchGenres().subscribe((genres) => {
      genres.genres.map((genre) => {
        genreMap[genre.id] = genre.name;
      });
    }, (error) => {
      console.error(error);
    });
    this.genreMap = genreMap;
  }
}

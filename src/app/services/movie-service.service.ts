import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiModel, Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor(private httpClient: HttpClient) {}

  baseApiUrl: string = 'https://api.themoviedb.org/3/movie';

  apiKey: string = 'b3343fd46dc12d206323968e2a599487';

  favoriteMoviesSubject = new Subject<Movie[]>();
  favoriteMovies: Movie[] = [];

  watchList: Movie[] = [];

  nowPlayingList: Movie[] = [];
  popularList: Movie[] = [];
  topRateList: Movie[] = [];
  upcomingList: Movie[] = [];

  allMovies: Movie[] = [];

  getNowPlayingList(): Observable<ApiModel> {
    return this.httpClient.get<ApiModel>(
      `${this.baseApiUrl}/now_playing?api_key=${this.apiKey}`
    );
  }
  getPopularList(): Observable<ApiModel> {
    return this.httpClient.get<ApiModel>(
      `${this.baseApiUrl}/popular?api_key=${this.apiKey}`
    );
  }
  getTopRateList(): Observable<ApiModel> {
    return this.httpClient.get<ApiModel>(
      `${this.baseApiUrl}/top_rated?api_key=${this.apiKey}`
    );
  }
  getUpcomingList(): Observable<ApiModel> {
    return this.httpClient.get<ApiModel>(
      `${this.baseApiUrl}/upcoming?api_key=${this.apiKey}`
    );
  }

  getMovieById(movieID: number): Observable<Movie> {
    return this.httpClient.get<Movie>(
      `${this.baseApiUrl}/${movieID}?api_key=${this.apiKey}`
    );
  }

  getMovie(movieID: number) {
    const chosenMovie = this.allMovies.find((movie) => movieID === movie.id);

    return chosenMovie;
  }

  // addToFavorite(movie: any) {
  //   if (!this.favoriteMovies.some((el: { id: any }) => el.id === movie.id)) {
  //     this.favoriteMovies.push(movie);
  //   }
  // }

  addToFavorite(movie: any) {
    if (!this.favoriteMovies.some((el: { id: any }) => el.id === movie.id)) {
      this.favoriteMovies.push(movie);
    }
    this.favoriteMoviesSubject.next(this.favoriteMovies);
    console.log(movie);
    // console.log(this.favoriteMoviesSubject);
    // console.log(this.favoriteMovies);
  }

  addToWatchList(movie: any) {
    if (!this.watchList.some((el: { id: any }) => el.id === movie.id)) {
      this.watchList.push(movie);
    }
  }

  getFavoriteMoviesList() {
    return this.favoriteMovies;
  }

  // getFavoriteMoviesList(): Observable<Movie[]> {
  //   return this.favoriteMoviesSubject;
  // }

  getWatchList() {
    return this.watchList;
  }

  removeFromFavorites(chosenMovie: Movie) {
    if (
      this.favoriteMovies.some((movie: Movie) => movie.id === chosenMovie.id)
    ) {
      const movieIndex = this.favoriteMovies.indexOf(chosenMovie);
      this.favoriteMovies.splice(movieIndex, 1);
    }
  }

  removeFromWatchList(chosenMovie: Movie) {
    if (this.watchList.some((movie: Movie) => movie.id === chosenMovie.id)) {
      const movieIndex = this.watchList.indexOf(chosenMovie);
      this.watchList.splice(movieIndex, 1);
    }
  }
}

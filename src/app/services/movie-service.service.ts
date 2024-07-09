import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiModel, Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor(private httpClient: HttpClient) {}

  baseApiUrl: string = 'https://api.themoviedb.org/3/movie';

  apiKey: string = 'b3343fd46dc12d206323968e2a599487';

  favoriteMovies: any = [];

  watchList: any = [];

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

  nowPlayingList: any = this.getNowPlayingList().subscribe((result) => {
    this.nowPlayingList = result.results;
    console.log(this.nowPlayingList);
  });

  popularList: any = this.getNowPlayingList().subscribe((result) => {
    this.popularList = result.results;
  });

  topRatedList: any = this.getNowPlayingList().subscribe((result) => {
    this.topRatedList = result.results;
  });

  upcomingList: any = this.getNowPlayingList().subscribe((result) => {
    this.upcomingList = result.results;
  });

  allMovies: Movie[] = Array.from(
    new Set([
      this.nowPlayingList,
      this.popularList,
      this.topRatedList,
      this.upcomingList,
    ])
  );

  showMessage() {
    console.log(this.allMovies);
  }

  // setNowPlayingList(movies: Movie[]): void {
  //   this.popularList = movies;
  //   this.allMovies = [
  //     ...new Set([
  //       ...this.nowPlayingList,
  //       ...this.popularList,
  //       ...this.topRatedList,
  //       ...this.upcomingList,
  //     ]),
  //   ];
  // }
  // setPopularList(movies: Movie[]): void {
  //   this.nowPlayingList = movies;
  //   this.allMovies = [
  //     ...new Set([
  //       ...this.nowPlayingList,
  //       ...this.popularList,
  //       ...this.topRatedList,
  //       ...this.upcomingList,
  //     ]),
  //   ];
  // }
  // setTopRateList(movies: Movie[]): void {
  //   this.topRatedList = movies;
  //   this.allMovies = [
  //     ...new Set([
  //       ...this.nowPlayingList,
  //       ...this.popularList,
  //       ...this.topRatedList,
  //       ...this.upcomingList,
  //     ]),
  //   ];
  // }
  // setUpcomingList(movies: Movie[]): void {
  //   this.upcomingList = movies;
  //   this.allMovies = [
  //     ...new Set([
  //       ...this.nowPlayingList,
  //       ...this.popularList,
  //       ...this.topRatedList,
  //       ...this.upcomingList,
  //     ]),
  //   ];
  // }

  getMovie(movieID: any) {
    const chosenMovie = this.allMovies.find((movie) => movieID === movie.id);
    console.log(this.popularList);

    return chosenMovie;
  }

  addToFavorite(movie: any) {
    if (!this.favoriteMovies.some((el: { id: any }) => el.id === movie.id)) {
      this.favoriteMovies.push(movie);
      console.log(this.allMovies);
    }
  }

  addToWatchList(movie: any) {
    if (!this.watchList.some((el: { id: any }) => el.id === movie.id)) {
      this.watchList.push(movie);
    }
  }

  getFavoriteMoviesList() {
    console.log(this.nowPlayingList);
    return this.favoriteMovies;
  }

  getWatchList() {
    return this.watchList;
  }

  removeFromFavorites(movie: any) {
    if (this.favoriteMovies.includes(movie)) {
      const movieIndex = this.favoriteMovies.indexOf(movie);
      this.favoriteMovies.splice(movieIndex, 1);
    }
  }

  removeFromWatchList(movie: any) {
    if (this.watchList.includes(movie)) {
      const movieIndex = this.watchList.indexOf(movie);
      this.watchList.splice(movieIndex, 1);
    }
  }
}

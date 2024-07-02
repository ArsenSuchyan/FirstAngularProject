import { Injectable } from '@angular/core';
import { nowPlayingMovies } from '../../assets/mock-data';
import { popularMovies } from '../../assets/mock-data';
import { topRatedMovies } from '../../assets/mock-data';
import { upcomingMovies } from '../../assets/mock-data';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor() {}

  favoriteMovies: any = [];

  watchList: any = [];

  allMovies: any[] = [
    ...new Set([
      ...nowPlayingMovies,
      ...popularMovies,
      ...topRatedMovies,
      ...upcomingMovies,
    ]),
  ];

  getMovie(movieID: any) {
    const chosenMovie = this.allMovies.find((movie) => movieID === movie.id);
    return chosenMovie;
  }

  addToFavorite(movie: any) {
    if (!this.favoriteMovies.includes(movie)) {
      this.favoriteMovies.push(movie);
    }
  }

  addToWatchList(movie: any) {
    if (!this.watchList.includes(movie)) {
      this.watchList.push(movie);
    }
  }

  getFavoriteMoviesList() {
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

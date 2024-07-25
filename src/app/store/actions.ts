import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const loadNowPlayingMovies = createAction(
  '[Movie] Load Now Playing Movies'
);

export const loadNowPlayingMoviesSuccess = createAction(
  '[Movie] Load Now Playing Movies Success',
  props<{ nowPlayingMoviesList: Movie[] | null }>()
);

export const loadNowPlayingMoviesFailure = createAction(
  '[Movie] Load Now Playing Movies Failure',
  props<{ error: any }>()
);

export const loadPopularMovies = createAction('[Movie] Load Popular Movies');

export const loadPopularMoviesSuccess = createAction(
  '[Movie] Load Popular Movies Success',
  props<{ popularMoviesList: Movie[] | null }>()
);

export const loadPopularMoviesFailure = createAction(
  '[Movie] Load Popular Movies Failure',
  props<{ error: any }>()
);

export const loadTopRateMovies = createAction('[Movie] Load Top Rate Movies');

export const loadTopRateMoviesSuccess = createAction(
  '[Movie] Load Top Rate Movies Success',
  props<{ topRateMoviesList: Movie[] | null }>()
);

export const loadTopRateMoviesFailure = createAction(
  '[Movie] Load Top Rate Movies Failure',
  props<{ error: any }>()
);

export const loadUpcomingMovies = createAction('[Movie] Load Upcoming Movies');

export const loadUpcomingMoviesSuccess = createAction(
  '[Movie] Load Upcoming Movies Success',
  props<{ upcomingMoviesList: Movie[] | null }>()
);

export const loadUpcomingMoviesFailure = createAction(
  '[Movie] Load Upcoming Movies Failure',
  props<{ error: any }>()
);

export const loadFavoriteMovies = createAction('[Movie] Load Favorite Movies');

export const loadFavoriteMoviesSuccess = createAction(
  '[Movie] Load Favorite Movies Success',
  props<{ favoriteMoviesList: Movie[] | null }>()
);

export const loadFavoriteMoviesFailure = createAction(
  '[Movie] Load Favorite Movies Failure',
  props<{ error: any }>()
);

export const loadWatchList = createAction('[Movie] Load Watch List');

export const loadWatchListSuccess = createAction(
  '[Movie] Load Watch List Success',
  props<{ watchList: Movie[] | null }>()
);

export const loadWatchListFailure = createAction(
  '[Movie] Load Watch List Failure',
  props<{ error: any }>()
);

export const addToFavorites = createAction(
  '[Movie] Add To Favorite Movies',
  props<{ movie: Movie }>()
);

export const removeFromFavorites = createAction(
  '[Movie] Remove From Favorite Movies',
  props<{ movie: Movie }>()
);

export const addToWatchList = createAction(
  '[Movie] Add To Watch List',
  props<{ movie: Movie }>()
);

export const removeFromWatchList = createAction(
  '[Movie] Remove From Watch List',
  props<{ movie: Movie }>()
);

// export const loadMovieByID = createAction('[Movie] Load Watch List');

// export const loadMovieByIDSuccess = createAction(
//   '[Movie] Load Watch List Success',
//   props<{ movie: Movie }>()
// );

// export const loadMovieByIDFailure = createAction(
//   '[Movie] Load Watch List Failure',
//   props<{ error: any }>()
// );

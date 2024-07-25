import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieServiceService } from '../services/movie-service.service';
import {
  loadFavoriteMovies,
  loadFavoriteMoviesFailure,
  loadFavoriteMoviesSuccess,
  loadNowPlayingMovies,
  loadNowPlayingMoviesFailure,
  loadNowPlayingMoviesSuccess,
  loadPopularMovies,
  loadPopularMoviesFailure,
  loadPopularMoviesSuccess,
  loadTopRateMovies,
  loadTopRateMoviesFailure,
  loadTopRateMoviesSuccess,
  loadUpcomingMovies,
  loadUpcomingMoviesFailure,
  loadUpcomingMoviesSuccess,
} from './actions';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private movieService: MovieServiceService
  ) {}

  loadNowPlayingMoviesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNowPlayingMovies),
      mergeMap(() => {
        return this.movieService.getNowPlayingList().pipe(
          map((movies) =>
            loadNowPlayingMoviesSuccess({
              nowPlayingMoviesList: movies.results,
            })
          ),

          catchError((error) =>
            of(
              loadNowPlayingMoviesFailure({
                error,
              })
            )
          )
        );
      })
    )
  );

  loadPopularMoviesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPopularMovies),
      mergeMap(() => {
        return this.movieService.getPopularList().pipe(
          map((movies) =>
            loadPopularMoviesSuccess({
              popularMoviesList: movies.results,
            })
          ),

          catchError((error) =>
            of(
              loadPopularMoviesFailure({
                error,
              })
            )
          )
        );
      })
    )
  );

  loadTopRateMoviesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTopRateMovies),
      mergeMap(() => {
        return this.movieService.getTopRateList().pipe(
          map((movies) =>
            loadTopRateMoviesSuccess({
              topRateMoviesList: movies.results,
            })
          ),

          catchError((error) =>
            of(
              loadTopRateMoviesFailure({
                error,
              })
            )
          )
        );
      })
    )
  );

  loadUpcomingMoviesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUpcomingMovies),
      mergeMap(() => {
        return this.movieService.getUpcomingList().pipe(
          map((movies) =>
            loadUpcomingMoviesSuccess({
              upcomingMoviesList: movies.results,
            })
          ),

          catchError((error) =>
            of(
              loadUpcomingMoviesFailure({
                error,
              })
            )
          )
        );
      })
    )
  );
}

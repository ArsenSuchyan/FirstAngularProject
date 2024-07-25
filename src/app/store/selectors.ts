import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './state';

export const selectState = createFeatureSelector<State>('movieState');

export const selectNowPlayingMovies = createSelector(
  selectState,
  (state) => state.nowPlayingMoviesList
);

export const selectPopularMovies = createSelector(
  selectState,
  (state) => state.popularMoviesList
);

export const selectTopRateMovies = createSelector(
  selectState,
  (state) => state.topRateMoviesList
);

export const selectUpcomingMovies = createSelector(
  selectState,
  (state) => state.upcomingMoviesList
);

export const selectFavoriteMovies = createSelector(
  selectState,
  (state) => state.favoriteMoviesList
);

export const selectWatchList = createSelector(
  selectState,
  (state) => state.watchList
);

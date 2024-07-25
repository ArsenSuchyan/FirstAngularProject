import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import * as MovieActions from './actions';

export const MovieReducer = createReducer(
  initialState,

  on(
    MovieActions.loadNowPlayingMoviesSuccess,
    (state, { nowPlayingMoviesList }) => {
      return {
        ...state,
        nowPlayingMoviesList: nowPlayingMoviesList,
      };
    }
  ),

  on(MovieActions.loadNowPlayingMoviesFailure, (state, { error }) => {
    return {
      ...state,
      nowPlayingMoviesList: null,
      error: error,
    };
  }),

  on(MovieActions.loadPopularMoviesSuccess, (state, { popularMoviesList }) => {
    return {
      ...state,
      popularMoviesList: popularMoviesList,
    };
  }),

  on(MovieActions.loadPopularMoviesFailure, (state, { error }) => {
    return {
      ...state,
      popularMoviesList: null,
      error: error,
    };
  }),

  on(MovieActions.loadTopRateMoviesSuccess, (state, { topRateMoviesList }) => {
    return {
      ...state,
      topRateMoviesList: topRateMoviesList,
    };
  }),

  on(MovieActions.loadTopRateMoviesFailure, (state, { error }) => {
    return {
      ...state,
      topRateMoviesList: null,
      error: error,
    };
  }),

  on(
    MovieActions.loadUpcomingMoviesSuccess,
    (state, { upcomingMoviesList }) => {
      return {
        ...state,
        upcomingMoviesList: upcomingMoviesList,
      };
    }
  ),

  on(MovieActions.loadUpcomingMoviesFailure, (state, { error }) => {
    return {
      ...state,
      upcomingMoviesList: null,
      error: error,
    };
  }),

  on(
    MovieActions.loadFavoriteMoviesSuccess,
    (state, { favoriteMoviesList }) => {
      return {
        ...state,
        favoriteMoviesList: favoriteMoviesList,
      };
    }
  ),

  on(MovieActions.loadFavoriteMoviesFailure, (state, { error }) => {
    return {
      ...state,
      favoriteMoviesList: null,
      error: error,
    };
  }),

  on(MovieActions.loadWatchListSuccess, (state, { watchList }) => {
    return {
      ...state,
      watchList: watchList,
    };
  }),

  on(MovieActions.loadWatchListFailure, (state, { error }) => {
    return {
      ...state,
      watchList: null,
      error: error,
    };
  }),

  on(MovieActions.addToFavorites, (state, { movie }) => {
    const favoriteMoviesList = state.favoriteMoviesList || [];

    if (favoriteMoviesList.some((el) => el.id === movie.id)) {
      return state;
    } else {
      const newFavoriteMoviesList = [...favoriteMoviesList, movie];
      return {
        ...state,
        favoriteMoviesList: newFavoriteMoviesList,
      };
    }
  }),

  on(MovieActions.removeFromFavorites, (state, { movie }) => {
    const favoriteMoviesList = state.favoriteMoviesList || [];

    if (favoriteMoviesList.some((el) => el.id === movie.id)) {
      const newFavoriteMoviesList = favoriteMoviesList.filter(
        (el) => el.id !== movie.id
      );
      return {
        ...state,
        favoriteMoviesList: newFavoriteMoviesList,
      };
    } else {
      return state;
    }
  }),

  on(MovieActions.addToWatchList, (state, { movie }) => {
    const watchList = state.watchList || [];

    if (watchList.some((el) => el.id === movie.id)) {
      return state;
    } else {
      const newWatchList = [...watchList, movie];
      return {
        ...state,
        watchList: newWatchList,
      };
    }
  }),

  on(MovieActions.removeFromWatchList, (state, { movie }) => {
    const watchList = state.watchList || [];

    if (watchList.some((el) => el.id === movie.id)) {
      const newWatchList = watchList.filter((el) => el.id !== movie.id);
      return {
        ...state,
        watchList: newWatchList,
      };
    } else {
      return state;
    }
  })

  // on(MovieActions.loadMovieByIDSuccess, (state, { watchList }) => {
  //   return {
  //     ...state,
  //     watchList: watchList,
  //   };
  // }),

  // on(MovieActions.loadWatchListFailure, (state, { error }) => {
  //   return {
  //     ...state,
  //     watchList: null,
  //     error: error,
  //   };
  // })
);

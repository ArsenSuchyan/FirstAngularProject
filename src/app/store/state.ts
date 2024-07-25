import { Movie } from '../models/movie.model';

export interface State {
  nowPlayingMoviesList: Movie[] | null;
  popularMoviesList: Movie[] | null;
  topRateMoviesList: Movie[] | null;
  upcomingMoviesList: Movie[] | null;
  favoriteMoviesList: Movie[] | null;
  watchList: Movie[] | null;
}

export const initialState: State = {
  nowPlayingMoviesList: null,
  popularMoviesList: null,
  topRateMoviesList: null,
  upcomingMoviesList: null,
  favoriteMoviesList: null,
  watchList: null,
};

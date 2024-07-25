import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../../services/movie-service.service';
import { DateOfIssuePipe } from '../../pipes/date-of-issue.pipe';
import { Movie } from '../../models/movie.model';
import { Subscription, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { ClearObservable } from '../../observable-destroyer';
import { selectFavoriteMovies, selectWatchList } from '../../store/selectors';
import {
  addToFavorites,
  addToWatchList,
  loadFavoriteMovies,
  loadWatchList,
  removeFromFavorites,
  removeFromWatchList,
} from '../../store/actions';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
  imports: [DateOfIssuePipe],
})
export class MovieDetailsPageComponent
  extends ClearObservable
  implements OnInit, OnDestroy
{
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieServiceService,
    private store: Store
  ) {
    super();
  }

  movieID = Number(this.route.snapshot.paramMap.get('id'));

  chosenMovie: any;
  favoriteMoviesList: Movie[] | null = [];
  watchList: Movie[] | null = [];
  isInFavorites: boolean = false;
  isInWatchList: boolean = false;

  ngOnInit() {
    this.movieService
      .getMovieById(this.movieID)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.chosenMovie = result;

        this.store.dispatch(loadFavoriteMovies());

        this.store
          .select(selectFavoriteMovies)
          .pipe(takeUntil(this.destroy$))
          .subscribe((result) => {
            this.favoriteMoviesList = result;
          });

        this.store.dispatch(loadWatchList());

        this.store
          .select(selectWatchList)
          .pipe(takeUntil(this.destroy$))
          .subscribe((result) => {
            this.watchList = result;
          });

        this.isInFavorites = this.favoriteMoviesList?.some(
          (movie: Movie) => movie.id === this.chosenMovie?.id
        )
          ? true
          : false;

        this.isInWatchList = this.watchList?.some(
          (movie: Movie) => movie.id === this.chosenMovie?.id
        )
          ? true
          : false;
      });
  }

  addToFavorites(movie: Movie) {
    this.store.dispatch(addToFavorites({ movie }));
  }

  addToWatchList(movie: Movie) {
    this.store.dispatch(addToWatchList({ movie }));
  }

  removeFromFavorites(movie: Movie) {
    this.store.dispatch(removeFromFavorites({ movie }));
  }

  removeFromWatchList(movie: Movie) {
    this.store.dispatch(removeFromWatchList({ movie }));
  }
}

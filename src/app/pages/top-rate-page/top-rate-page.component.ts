import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';
import { Subscription, takeUntil } from 'rxjs';
import { ClearObservable } from '../../observable-destroyer';
import { Store } from '@ngrx/store';
import { loadTopRateMovies } from '../../store/actions';
import { selectTopRateMovies } from '../../store/selectors';

@Component({
  selector: 'app-top-rate-page',
  standalone: true,
  templateUrl: './top-rate-page.component.html',
  styleUrl: './top-rate-page.component.scss',
  imports: [MovieCardComponent],
})
export class TopRatePageComponent
  extends ClearObservable
  implements OnInit, OnDestroy
{
  // movies = topRatedMovies;

  constructor(public movieService: MovieServiceService, private store: Store) {
    super();
  }
  movies: Movie[] | null = [];

  ngOnInit() {
    this.store.dispatch(loadTopRateMovies());

    this.store
      .select(selectTopRateMovies)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.movies = result;
      });
  }
}

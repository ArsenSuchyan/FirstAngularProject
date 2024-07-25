import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';
import { Subscription, takeUntil } from 'rxjs';
import { ClearObservable } from '../../observable-destroyer';
import { Store } from '@ngrx/store';
import { loadPopularMovies } from '../../store/actions';
import { selectPopularMovies } from '../../store/selectors';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss',
  imports: [MovieCardComponent],
})
export class PopularPageComponent
  extends ClearObservable
  implements OnInit, OnDestroy
{
  constructor(public movieService: MovieServiceService, private store: Store) {
    super();
  }
  movies: Movie[] | null = [];

  ngOnInit() {
    this.store.dispatch(loadPopularMovies());

    this.store
      .select(selectPopularMovies)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.movies = result;
      });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';
import { Subscription, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { ClearObservable } from '../../observable-destroyer';
import { loadUpcomingMovies } from '../../store/actions';
import { selectUpcomingMovies } from '../../store/selectors';

@Component({
  selector: 'app-upcoming-page',
  standalone: true,
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.scss',
  imports: [MovieCardComponent],
})
export class UpcomingPageComponent
  extends ClearObservable
  implements OnInit, OnDestroy
{
  constructor(public movieService: MovieServiceService, private store: Store) {
    super();
  }
  movies: Movie[] | null = [];

  ngOnInit() {
    this.store.dispatch(loadUpcomingMovies());

    this.store
      .select(selectUpcomingMovies)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.movies = result;
      });
  }
}

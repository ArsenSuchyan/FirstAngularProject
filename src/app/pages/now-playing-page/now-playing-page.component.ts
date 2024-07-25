import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';
import { Subscription, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadNowPlayingMovies } from '../../store/actions';
import { selectNowPlayingMovies } from '../../store/selectors';
import { ClearObservable } from '../../observable-destroyer';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss',
  imports: [MovieCardComponent],
})
export class NowPlayingPageComponent
  extends ClearObservable
  implements OnInit, OnDestroy
{
  constructor(public movieService: MovieServiceService, private store: Store) {
    super();
  }

  movies: Movie[] | null = [];

  ngOnInit() {
    this.store.dispatch(loadNowPlayingMovies());

    this.store
      .select(selectNowPlayingMovies)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.movies = result;
      });
  }
}

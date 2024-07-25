import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';
import { Subscription, takeUntil } from 'rxjs';
import { ClearObservable } from '../../observable-destroyer';
import { Store } from '@ngrx/store';
import { loadWatchList } from '../../store/actions';
import { selectWatchList } from '../../store/selectors';

@Component({
  selector: 'app-watch-list-page',
  standalone: true,
  templateUrl: './watch-list-page.component.html',
  styleUrl: './watch-list-page.component.scss',
  imports: [MovieCardComponent],
})
export class WatchListPageComponent
  extends ClearObservable
  implements OnInit, OnDestroy
{
  constructor(private movieService: MovieServiceService, private store: Store) {
    super();
  }

  watchList: Movie[] | null = [];

  ngOnInit(): void {
    this.store.dispatch(loadWatchList());

    this.store
      .select(selectWatchList)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.watchList = result;
      });
  }
}

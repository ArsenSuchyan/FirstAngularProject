import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { ClearObservable } from '../../observable-destroyer';
import { Store } from '@ngrx/store';
import { loadFavoriteMovies } from '../../store/actions';
import { selectFavoriteMovies } from '../../store/selectors';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
  imports: [MovieCardComponent],
})
export class FavoritesPageComponent
  extends ClearObservable
  implements OnInit, OnDestroy
{
  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute,
    private store: Store
  ) {
    super();
  }

  favoriteMovies: Movie[] | null = [];

  ngOnInit(): void {
    this.store.dispatch(loadFavoriteMovies());

    this.store
      .select(selectFavoriteMovies)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.favoriteMovies = result;
      });
  }
}

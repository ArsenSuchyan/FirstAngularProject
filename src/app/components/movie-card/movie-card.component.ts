import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateOfIssuePipe } from '../../pipes/date-of-issue.pipe';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieServiceService } from '../../services/movie-service.service';
import { Store } from '@ngrx/store';
import {
  addToFavorites,
  addToWatchList,
  removeFromFavorites,
  removeFromWatchList,
} from '../../store/actions';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  imports: [CommonModule, DateOfIssuePipe, RouterLink],
})
export class MovieCardComponent {
  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute,
    private store: Store
  ) {}
  @Input() movie: any;

  pagePath = this.route.snapshot.routeConfig?.path;

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

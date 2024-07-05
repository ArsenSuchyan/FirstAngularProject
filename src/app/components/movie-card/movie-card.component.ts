import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateOfIssuePipe } from '../../pipes/date-of-issue.pipe';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieServiceService } from '../../services/movie-service.service';

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
    private route: ActivatedRoute
  ) {}
  @Input() movie: any;

  pagePath = this.route.snapshot.routeConfig?.path;

  addToFavorites(movie: any) {
    this.movieService.addToFavorite(movie);
  }

  addToWatchList(movie: any) {
    this.movieService.addToWatchList(movie);
  }

  removeFromFavorites(movie: any) {
    this.movieService.removeFromFavorites(movie);
  }

  removeFromWatchList(movie: any) {
    this.movieService.removeFromWatchList(movie);
  }
}

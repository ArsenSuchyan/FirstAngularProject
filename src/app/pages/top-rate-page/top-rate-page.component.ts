import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-rate-page',
  standalone: true,
  templateUrl: './top-rate-page.component.html',
  styleUrl: './top-rate-page.component.scss',
  imports: [MovieCardComponent],
})
export class TopRatePageComponent implements OnInit, OnDestroy {
  // movies = topRatedMovies;

  constructor(public movieService: MovieServiceService) {}
  movies: Movie[] = [];
  private subscription: Subscription | undefined;

  ngOnInit() {
    this.subscription = this.movieService
      .getTopRateList()
      .subscribe((result) => {
        this.movies = result.results;
      });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

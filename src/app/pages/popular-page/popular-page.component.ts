import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss',
  imports: [MovieCardComponent],
})
export class PopularPageComponent implements OnInit, OnDestroy {
  // movies = popularMovies;

  constructor(public movieService: MovieServiceService) {}
  movies: Movie[] = [];
  private subscription: Subscription | undefined;

  ngOnInit() {
    this.subscription = this.movieService
      .getPopularList()
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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upcoming-page',
  standalone: true,
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.scss',
  imports: [MovieCardComponent],
})
export class UpcomingPageComponent implements OnInit, OnDestroy {
  constructor(public movieService: MovieServiceService) {}
  movies: Movie[] = [];
  private subscription: Subscription | undefined;

  ngOnInit() {
    this.subscription = this.movieService
      .getUpcomingList()
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

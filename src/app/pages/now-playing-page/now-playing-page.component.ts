import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss',
  imports: [MovieCardComponent],
})
export class NowPlayingPageComponent implements OnInit, OnDestroy {
  constructor(public movieService: MovieServiceService) {}

  movies: Movie[] = [];
  private subscription: Subscription | undefined;

  ngOnInit() {
    this.subscription = this.movieService
      .getNowPlayingList()
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

import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-top-rate-page',
  standalone: true,
  templateUrl: './top-rate-page.component.html',
  styleUrl: './top-rate-page.component.scss',
  imports: [MovieCardComponent],
})
export class TopRatePageComponent {
  // movies = topRatedMovies;

  constructor(public movieService: MovieServiceService) {}
  movies: Movie[] = [];

  ngOnInit() {
    this.movieService.getTopRateList().subscribe((result) => {
      this.movies = result.results;
      // this.movieService.addToAllMovies(this.movies);
      // this.movieService.setTopRateList(this.movies);
    });
  }
}

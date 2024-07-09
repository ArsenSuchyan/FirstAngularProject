import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss',
  imports: [MovieCardComponent],
})
export class PopularPageComponent {
  // movies = popularMovies;

  constructor(public movieService: MovieServiceService) {}
  movies: Movie[] = [];

  ngOnInit() {
    this.movieService.getPopularList().subscribe((result) => {
      this.movies = result.results;
      // this.movieService.addToAllMovies(this.movies);
      // this.movieService.setPopularList(this.movies);
      this.movieService.showMessage();
    });
  }
}

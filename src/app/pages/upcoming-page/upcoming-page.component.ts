import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-upcoming-page',
  standalone: true,
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.scss',
  imports: [MovieCardComponent],
})
export class UpcomingPageComponent {
  constructor(public movieService: MovieServiceService) {}
  movies: Movie[] = [];

  ngOnInit() {
    this.movieService.getUpcomingList().subscribe((result) => {
      this.movies = result.results;
      // this.movieService.addToAllMovies(this.movies);
      // this.movieService.setUpcomingList(this.movies);
    });
  }
}

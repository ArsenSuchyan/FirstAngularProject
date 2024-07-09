import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss',
  imports: [MovieCardComponent],
})
export class NowPlayingPageComponent implements OnInit {
  constructor(public movieService: MovieServiceService) {}
  movies: Movie[] = [];

  ngOnInit() {
    this.movieService.getNowPlayingList().subscribe((result) => {
      this.movies = result.results;
      // this.movieService.addToAllMovies(this.movies);
      // this.movieService.setNowPlayingList(this.movies);
      this.movieService.showMessage();
    });
  }
}

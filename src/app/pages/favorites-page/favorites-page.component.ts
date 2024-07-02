import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
  imports: [MovieCardComponent],
})
export class FavoritesPageComponent implements OnInit {
  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.routeConfig) {
      const path = this.route.snapshot.routeConfig.path;
      console.log();
    }
  }

  favoriteMovies = this.movieService.getFavoriteMoviesList();
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { movies } from '../../../assets/mock-data/movies-fake';
import { TestCardComponent } from '../test-card/test-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  imports: [RouterOutlet, MovieCardComponent, CommonModule, TestCardComponent],
})
export class MovieListComponent {
  movies = movies;

  showFavorite(id: number) {
    let movie: any = this.movies.find((movie) => movie.id === id);
    movie.isFavorite = !movie.isFavorite;
  }
  showWatchList(id: number) {
    let movie: any = this.movies.find((movie) => movie.id === id);
    movie.isInWatchList = !movie.isInWatchList;
  }
}

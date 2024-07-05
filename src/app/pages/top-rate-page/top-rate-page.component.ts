import { Component } from '@angular/core';
import { topRatedMovies } from '../../../assets/mock-data';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-top-rate-page',
  standalone: true,
  templateUrl: './top-rate-page.component.html',
  styleUrl: './top-rate-page.component.scss',
  imports: [MovieCardComponent],
})
export class TopRatePageComponent {
  movies = topRatedMovies;
}

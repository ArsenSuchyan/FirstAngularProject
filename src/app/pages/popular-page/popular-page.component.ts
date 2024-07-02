import { Component } from '@angular/core';
import { popularMovies } from '../../../assets/mock-data';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss',
  imports: [MovieCardComponent],
})
export class PopularPageComponent {
  movies = popularMovies;
}

import { Component } from '@angular/core';
import { upcomingMovies } from '../../../assets/mock-data';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-upcoming-page',
  standalone: true,
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.scss',
  imports: [MovieCardComponent],
})
export class UpcomingPageComponent {
  movies = upcomingMovies;
}

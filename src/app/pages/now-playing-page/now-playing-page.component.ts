import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { nowPlayingMovies } from '../../../assets/mock-data';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss',
  imports: [MovieCardComponent],
})
export class NowPlayingPageComponent {
  movies = nowPlayingMovies;
}

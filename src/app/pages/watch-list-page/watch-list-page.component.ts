import { Component } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-watch-list-page',
  standalone: true,
  templateUrl: './watch-list-page.component.html',
  styleUrl: './watch-list-page.component.scss',
  imports: [MovieCardComponent],
})
export class WatchListPageComponent {
  constructor(private movieService: MovieServiceService) {}

  watchList = this.movieService.getWatchList();
}

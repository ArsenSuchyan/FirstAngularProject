import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../../services/movie-service.service';
import { DateOfIssuePipe } from '../../pipes/date-of-issue.pipe';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
  imports: [DateOfIssuePipe],
})
export class MovieDetailsPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieServiceService
  ) {}
  movieID = Number(this.route.snapshot.paramMap.get('id'));

  chosenMovie = this.movieService.getMovie(this.movieID);

  isInFavorites = this.movieService
    .getFavoriteMoviesList()
    .includes(this.chosenMovie)
    ? true
    : false;

  isInWatchList = this.movieService.getWatchList().includes(this.chosenMovie)
    ? true
    : false;

  addToFavorites(movie: any) {
    this.movieService.addToFavorite(movie);
  }

  addToWatchList(movie: any) {
    this.movieService.addToWatchList(movie);
  }

  removeFromFavorites(movie: any) {
    this.movieService.removeFromFavorites(movie);
  }

  removeFromWatchList(movie: any) {
    this.movieService.removeFromWatchList(movie);
  }

  ngOnInit() {
    console.log(this.isInFavorites);
    console.log(this.isInWatchList);
  }
}

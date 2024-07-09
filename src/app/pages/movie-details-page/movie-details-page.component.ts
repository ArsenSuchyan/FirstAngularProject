import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../../services/movie-service.service';
import { DateOfIssuePipe } from '../../pipes/date-of-issue.pipe';
import { Movie } from '../../models/movie.model';

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

  // ngOnInit() {
  //   let chosenMovie: Movie | null | undefined = null;
  //   this.movieService.getMovie(this.movieID)
  //     ? (chosenMovie = this.movieService.getMovie(this.movieID))
  //     : (chosenMovie = null);

  //   let isInFavorites = this.movieService
  //     .getFavoriteMoviesList()
  //     .includes(chosenMovie)
  //     ? true
  //     : false;

  //   let isInWatchList = this.movieService.getWatchList().includes(chosenMovie)
  //     ? true
  //     : false;
  // }

  chosenMovie: Movie | null | undefined = null;
  isInFavorites: boolean = false;
  isInWatchList: boolean = false;

  ngOnInit() {
    this.chosenMovie = this.movieService.getMovie(this.movieID);

    this.isInFavorites = this.movieService
      .getFavoriteMoviesList()
      .includes(this.chosenMovie)
      ? true
      : false;

    this.isInWatchList = this.movieService
      .getWatchList()
      .includes(this.chosenMovie)
      ? true
      : false;
    console.log(this.isInFavorites);
    console.log(this.isInWatchList);
  }

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
}

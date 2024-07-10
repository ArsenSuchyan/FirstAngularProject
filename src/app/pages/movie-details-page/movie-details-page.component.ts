import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../../services/movie-service.service';
import { DateOfIssuePipe } from '../../pipes/date-of-issue.pipe';
import { Movie } from '../../models/movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
  imports: [DateOfIssuePipe],
})
export class MovieDetailsPageComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieServiceService
  ) {}

  movieID = Number(this.route.snapshot.paramMap.get('id'));

  chosenMovie: Movie | null | undefined = null;
  isInFavorites: boolean = false;
  isInWatchList: boolean = false;

  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.movieService
      .getMovieById(this.movieID)
      .subscribe((result) => {
        this.chosenMovie = result;

        this.isInFavorites = this.movieService
          .getFavoriteMoviesList()
          .some((movie: Movie) => movie.id === this.chosenMovie?.id)
          ? true
          : false;

        this.isInWatchList = this.movieService
          .getWatchList()
          .some((movie: Movie) => movie.id === this.chosenMovie?.id)
          ? true
          : false;
      });
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

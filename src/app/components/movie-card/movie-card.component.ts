import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateOfIssuePipe } from '../../pipes/date-of-issue.pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  imports: [CommonModule, DateOfIssuePipe],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Output() addToFavorite = new EventEmitter<any>();
  @Output() addToWatchLists = new EventEmitter<any>();

  public id: number = 0;

  ngOnInit() {
    this.id = this.movie.id;
  }
  addToFavorites() {
    this.addToFavorite.emit(this.id);
  }
  addToWatchList() {
    this.addToWatchLists.emit(this.id);
  }
}

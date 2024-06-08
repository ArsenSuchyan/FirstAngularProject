import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Output() addToFavorite = new EventEmitter<any>();
  @Output() addToWatchLists = new EventEmitter<any>();

  public data: any;

  ngOnInit() {
    this.data = this.movie;
  }
  addToFavorites() {
    this.addToFavorite.emit(this.data);
  }
  addToWatchList() {
    this.addToWatchLists.emit(this.data);
  }
}

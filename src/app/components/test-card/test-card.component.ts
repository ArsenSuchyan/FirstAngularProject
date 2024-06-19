import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DateOfIssuePipe } from '../../pipes/date-of-issue.pipe';

@Component({
  selector: 'app-test-card',
  standalone: true,
  templateUrl: './test-card.component.html',
  styleUrl: './test-card.component.scss',
  imports: [CardModule, ButtonModule, DateOfIssuePipe],
})
export class TestCardComponent {
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

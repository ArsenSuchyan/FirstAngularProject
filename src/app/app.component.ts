import { Component } from '@angular/core';
import {
  RouterOutlet,
  Router,
  RouterModule,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MovieCardComponent,
    MovieListComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateToFavorites() {
    this.router.navigate([{}]);
  }
}

import { Component, OnInit } from '@angular/core';
import {
  RouterOutlet,
  Router,
  RouterModule,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieServiceService } from './services/movie-service.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    MovieCardComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
  ],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private movieService: MovieServiceService
  ) {}

  ngOnInit() {
    // this.movieService.setDataFromAPI();
  }
  navigateToFavorites() {
    this.router.navigate([{}]);
  }
}

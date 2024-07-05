import { Routes } from '@angular/router';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { TopRatePageComponent } from './pages/top-rate-page/top-rate-page.component';
import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';
import { WatchListPageComponent } from './pages/watch-list-page/watch-list-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'now-playing', pathMatch: 'full' },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'watch-list', component: WatchListPageComponent },
  { path: 'now-playing', component: NowPlayingPageComponent },
  { path: 'popular', component: PopularPageComponent },
  { path: 'top-rate', component: TopRatePageComponent },
  { path: 'upcoming', component: UpcomingPageComponent },
  { path: 'movie-details/:id', component: MovieDetailsPageComponent },
];

import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiModel, Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor(private httpClient: HttpClient) {}

  baseApiUrl: string = 'https://api.themoviedb.org/3/movie';

  apiKey: string = 'b3343fd46dc12d206323968e2a599487';

  getNowPlayingList(): Observable<ApiModel> {
    return this.httpClient.get<ApiModel>(
      `${this.baseApiUrl}/now_playing?api_key=${this.apiKey}`
    );
  }
  getPopularList(): Observable<ApiModel> {
    return this.httpClient.get<ApiModel>(
      `${this.baseApiUrl}/popular?api_key=${this.apiKey}`
    );
  }
  getTopRateList(): Observable<ApiModel> {
    return this.httpClient.get<ApiModel>(
      `${this.baseApiUrl}/top_rated?api_key=${this.apiKey}`
    );
  }
  getUpcomingList(): Observable<ApiModel> {
    return this.httpClient.get<ApiModel>(
      `${this.baseApiUrl}/upcoming?api_key=${this.apiKey}`
    );
  }

  getMovieById(movieID: number): Observable<Movie> {
    return this.httpClient.get<Movie>(
      `${this.baseApiUrl}/${movieID}?api_key=${this.apiKey}`
    );
  }
}

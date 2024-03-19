import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private apiUrl = environment.weatherApiUrl;
  private apiKey = environment.weatherApiKey;

  constructor(private http: HttpClient) {}

  getWeatherDatas(city: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?q=${city}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    );
  }
}

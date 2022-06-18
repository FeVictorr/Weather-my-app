import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import { IFiveDayWeather, ITodayWeather } from '../model/weather.model';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_URL_FORECAST = 'https://api.openweathermap.org/data/2.5/forecast?'
const API_KEY = 'b35dcb87015fecea5b70cd3b2834bbea';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCityName(cityName: string): Observable<ITodayWeather> {
    return this.http.get<ITodayWeather>(`${API_URL}q=${cityName}&appid=${API_KEY}&lang=en&units=metric`);
  }
  getFiveDayWeatherByCityName(cityName: string): Observable<IFiveDayWeather> {
    return this.http.get<IFiveDayWeather>(`${API_URL_FORECAST}q=${cityName}&appid=${API_KEY}&lang=en&units=metric`);
  }
}

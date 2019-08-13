import { Component, OnInit } from '@angular/core';
import {ForecastMode, TemperatureScale, WeatherLayout, WeatherSettings} from 'angular-weather-widget';
import {CURRENT_WATHER_MOCK, FORECAST_MOCK} from './open-weather-map.mock';
import {CurrentWeather, Forecast} from 'angular-weather-widget/services/api/weather.api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})


export class WeatherComponent implements OnInit {

  settings: WeatherSettings = {
    location: {
      cityName: 'Tel Aviv'
    },
    scale: TemperatureScale.CELCIUS,
    backgroundColor: '#3f51b5',
    color: '#222222',
    width: '100%',
    height: '350px',
    showWind: true,
    showDetails: true,
    showForecast: true,
    forecastMode: ForecastMode.GRID,
    language: 'en',
    layout: WeatherLayout.NARROW,
  };

  currentWeather: CurrentWeather = CURRENT_WATHER_MOCK;
  forecast: Forecast[] = FORECAST_MOCK;

  constructor() { }

  ngOnInit() {
  }

}

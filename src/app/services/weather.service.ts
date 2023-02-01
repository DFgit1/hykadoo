import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weather:any[]= [];

  constructor(private http:HttpClient) { }

  getWeather(){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=51.1762&lon=-115.5698&units=metric&appid=ca55b20dd0c0e1bbd5e0bfc508ddc1d2");
  
    }


}

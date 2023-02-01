import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  @Input() weather!:any;

  constructor(private weatherService:WeatherService) { 

    weatherService.getWeather().subscribe((results)=>{
      this.weather = results;
      console.log(results);
    });
  }

  ngOnInit() {

    
  }

}

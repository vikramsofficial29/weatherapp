import { createInjectableType } from '@angular/compiler';
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  myweather: any;
  temperature : number=0;
  humidity : number=0;
  feels : number =0 ;
  pressure : number = 0;
  summary : string = '';
  iurl : string = '';
  cname : string = '';
  units : string = 'imperial';
  cod : number = 404 ;
 
 

  search(city){
    this.cname = city.value;
    this.ngOnInit()
  }



  constructor( private weatherservice : WeatherService) {}

  ngOnInit(): void {

    this.weatherservice.getweather( this.cname, this.units ).subscribe({
      
      next : (res) => {
        console.log(res)
        this.myweather = res;
        console.log(this.myweather);
        this.temperature = this.myweather.main.temp;
        this.feels = this.myweather.main.feels_like;
        this.humidity = this.myweather.main.humidity;
        this.pressure = this.myweather.main.pressure;
        this.summary = this.myweather.weather[0].main;
        this.cname = this.myweather.name;
        this.iurl = 'https://openweathermap.org/img/wn/' + this.myweather.weather[0].icon + '@2x.png';

        



  
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
    }
      
  )

  }

}

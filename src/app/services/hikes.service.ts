import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ihike } from '../interfaces/ihike';

@Injectable({
  providedIn: 'root'
})
export class HikesService {

  constructor(private http:HttpClient) { }

  getHikes(){
    return this.http.get<Ihike[]>("http://localhost:3000/hikes");
  }

  getRatings(hike:any) {
    return this.http.get<number[]>('http://localhost:3000/ratings/' + hike);
  }


}
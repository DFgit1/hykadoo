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

}
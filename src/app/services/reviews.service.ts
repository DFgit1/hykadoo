import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http:HttpClient) { }

  getReviews(){
    return this.http.get("http://localhost:3000/reviews");
  }

  addReview(formData:any){
  return this.http.post('http://localhost:3000/reviews', formData);
}
}




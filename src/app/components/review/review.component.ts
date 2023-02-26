import { Component, Input, OnInit } from '@angular/core';
import { Ihike } from 'src/app/interfaces/ihike';

import { ReviewsService } from 'src/app/services/reviews.service';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  public data :any;

  @Input() hike!:Ihike
  @Input() reviews!:any;
  User!:any;
  //Reviews!:any;
 



  constructor(private star:ReviewsService, private reviewService: ReviewsService, private userService:UserService) { 
    // reviewService.getReviews().subscribe((results)=>{
    //   this.Reviews = results;
    // });
    
  
     
  }

  ngOnInit() {}

  
  countStar(star: number) {
    this.selectedValue = star;
    this.data = this.selectedValue;
    console.log(this.data);
  }
  


   isReadonly() {
    return this.isReadonly;   //return true/false 
  }
  


}

import { Component, Input, OnInit } from '@angular/core';

import { ReviewsService } from 'src/app/services/reviews.service';




@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  isMouseover = true;
  public data :any;

  @Input() reviews!:any;



  constructor(private star:ReviewsService) { 

  
     
  }

  ngOnInit() {}

  
  countStar(star: number) {
    this.isMouseover = false;
    this.selectedValue = star;
    this.data = this.selectedValue;
    console.log(this.data);
  }
  
   addClass(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
      console.log(this.selectedValue);
      
    }
   }
  
   removeClass() {
     if (this.isMouseover) {
        this.selectedValue = 0;
        console.log(this.selectedValue);
     }
   }

   isReadonly() {
    return this.isReadonly;   //return true/false 
  }
  


}

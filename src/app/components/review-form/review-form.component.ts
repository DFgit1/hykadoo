import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent implements OnInit {

  reviewForm;
  currentUser:any;

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  isMouseover = true;
  public data :any;

  constructor(private formbuilder: FormBuilder, private service: ReviewsService, private alertController: AlertController, private currentUserService:UserService) { 

  this.reviewForm = formbuilder.group({
    user_id: ["", [Validators.required]],
    rating: ['', [Validators.required]],
    message: ["", [Validators.required]],
    trail_id: ["", [Validators.required]],
  });
}



ngOnInit(): void{
   this.currentUser = this.currentUserService.get_current_user(); 
  }


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


onSubmitReview() {
  this.service.addReview(this.reviewForm.value).subscribe((result) => {
    console.log(result);
    this.reviewForm.reset();
    this.presentAlert("Success", "Your rating was added successfully.");
  });
}
  async presentAlert(header: string, message: string) {
  const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK'],
  });

  await alert.present();
}

}

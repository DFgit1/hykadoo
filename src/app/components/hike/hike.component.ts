import { Component, Input, OnInit } from '@angular/core';
import { Ihike } from 'src/app/interfaces/ihike';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ToastController } from '@ionic/angular';
import { HikesService } from 'src/app/services/hikes.service';
import { FavouritesService } from 'src/app/services/favourites.service';
import { UserService } from 'src/app/services/user.service';
import { reduce } from 'rxjs';



@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.scss'],
})
export class HikeComponent implements OnInit {

  @Input() hike!: Ihike;
  Reviews!: any;
  hikes!: any;
  
  favLike!: boolean;
  favs!:any;
  favHikeIds!: number[];
  currentUser!: any;
  Ratings: any;
  


  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  isMouseover = true;
  public data :any;
  



  constructor(private service: ReviewsService, private toastController: ToastController, public hikeService: HikesService, public favService: FavouritesService, public currentUserService: UserService) {

    service.getReviews().subscribe((results) => {
      this.Reviews = results;
    });
    hikeService.getHikes().subscribe((results) => {
      this.hikes = results;
    });

    favService.getFavHikes().subscribe((results) => {
      this.favs = results;
    });

  }

  ngOnInit() {
    this.currentUser = this.currentUserService.get_current_user();
  
    this.favService.getHikeIds().subscribe((result)=>{
      this.favHikeIds = result;
    });

    this.hikeService.getRatings(this.hike.id).subscribe((results)=>{
      this.Ratings = results;
      console.log(results);
      const sum = results.reduce((a, b)=> a + b, 0);
      this.selectedValue = Number((sum/results.length).toFixed(2)) || 0;
      console.log(`The sum is: ${sum}. The average is: ${this.selectedValue}.`);
    });


   
  }





  addUserHike(hike: any) {
    this.favService.addUserHikes(this.hike.id).subscribe((result) => {
      this.favHikeIds.push(this.hike.id)
      console.log(result)
    });

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






  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Added to My Hykes!',
      duration: 1000,
      cssClass: 'custom-toast',
      position: position
    });

    await toast.present();
  }


}

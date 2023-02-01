
import { Component, Input, OnInit } from '@angular/core';
import { Ihike } from 'src/app/interfaces/ihike';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ToastController } from '@ionic/angular';
import { HikesService } from 'src/app/services/hikes.service';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-user-hike',
  templateUrl: './user-hike.component.html',
  styleUrls: ['./user-hike.component.scss'],
})
export class UserHikeComponent implements OnInit {

@Input() hike!: Ihike;
@Input() userHike!: any;
Reviews!:any;
Hikes!: any;
userHikes!: any;

  constructor(private service:ReviewsService, private toastController: ToastController, private hikeService:HikesService, private favService:FavouritesService) {

    service.getReviews().subscribe((results)=>{
      this.Reviews = results;
    });

    hikeService.getHikes().subscribe((results)=>{
      this.Hikes = results
    });

    favService.getUserHikes().subscribe((results)=>{
      this.userHikes = results;
  });


   }
  
  ngOnInit() {}

  async presentToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: 'Removed from My Hykes!',
      duration: 1500,
      cssClass: 'custom-toast',
      position: position
    });

    await toast.present();
  }


}

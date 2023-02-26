
import { Component, Input, OnInit } from '@angular/core';
import { Ihike } from 'src/app/interfaces/ihike';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ToastController } from '@ionic/angular';
import { HikesService } from 'src/app/services/hikes.service';
import { FavouritesService } from 'src/app/services/favourites.service';
import { Router } from '@angular/router';

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
favHikeIds!:number[];





  constructor(private service:ReviewsService, private toastController: ToastController, private hikeService:HikesService, public favService:FavouritesService, private router:Router) {

    service.getReviews().subscribe((results)=>{
      this.Reviews = results;
    });

    hikeService.getHikes().subscribe((results)=>{
      this.Hikes = results
    });

    favService.getUserHikes().subscribe((results)=>{
      this.userHikes = results;
  });

  favService.getHikeIds().subscribe((results) => {
    this.favHikeIds = results;
  });


   }
  
  ngOnInit() {}


  deleteUserHike(fav_id:any, itemIndex:number) {
      this.favService.removeUserHike(fav_id).subscribe((result) => {
        this.userHike.Hikes.splice(itemIndex, 1);
      });
      this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['Your actualComponent']);
    }); 
    }




  async presentToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: 'Removed from My Hykes!',
      duration: 1000,
      cssClass: 'custom-toast',
      position: position
    });

    await toast.present();
  }


}

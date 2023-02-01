import { Component, Input, OnInit } from '@angular/core';
import { Ihike } from 'src/app/interfaces/ihike';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ToastController } from '@ionic/angular';
import { HikesService } from 'src/app/services/hikes.service';
import { FavouritesService } from 'src/app/services/favourites.service';


@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.scss'],
})
export class HikeComponent implements OnInit {

  @Input() hike!: Ihike;
  Reviews!: any;
  hikes!: any;



  constructor(private service: ReviewsService, private toastController: ToastController, private hikeService: HikesService, public favService: FavouritesService) {

    service.getReviews().subscribe((results) => {
      this.Reviews = results;

    });
    hikeService.getHikes().subscribe((results) => {
      this.hikes = results;
    });


  }

  ngOnInit() { }
  
  addUserHike(hike: any) {
    this.favService.addUserHikes(this.hike.id).subscribe((result) => {
      console.log(result)
    });

  }


  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Added to My Hykes!',
      duration: 1500,
      cssClass: 'custom-toast',
      position: position
    });

    await toast.present();
  }


}

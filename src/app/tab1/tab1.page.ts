import { Component, ViewChild } from '@angular/core';
import { Ihike } from '../interfaces/ihike';
import { HikesService } from '../services/hikes.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { ReviewsService } from '../services/reviews.service';
import { FavouritesService } from '../services/favourites.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
 
})
export class Tab1Page {
  @ViewChild(IonModal) modal!: IonModal;
  
  hikes!: Ihike[];
  currentUser: any;
  Reviews!:any;
  favHikeIds: any;



 
 
  
 

  constructor(private service:HikesService, public currentUserService: UserService, private router:Router, private reviewService:ReviewsService, private favService:FavouritesService) {
   

  }

  ionViewWillEnter(){
    this.service.getHikes().subscribe((results)=>{
      this.hikes = results;
    });
    this.reviewService.getReviews().subscribe((results)=>{
      this.Reviews = results;
    });

    

  }
  
  ngOnInit(){
    this.currentUser = this.currentUserService.get_current_user();
    

   }  



  
  logout(){
    localStorage.removeItem("currentUser");
    alert("user logged out");
    this.router.navigate(['login']);
  }
  modalDismiss(){
    this.modal.dismiss()
  }



 
}

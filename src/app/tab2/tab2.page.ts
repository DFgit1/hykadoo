import { Component, Input, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FavouritesService } from '../services/favourites.service';
import { HikesService } from '../services/hikes.service';
import { Ihike } from '../interfaces/ihike';
import { IonModal } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']

})
export class Tab2Page {
  hike!: Ihike[];
  userHikes: any;
  Hikes!: any;
  currentUser: any;
  favHikeIds!:number[];

  @ViewChild(IonModal) modal!: IonModal;

  constructor(private router: Router, public currentUserService: UserService, private favService: FavouritesService, private hikeService: HikesService) {

    // favService.getUserHikes().subscribe((results) => {
    //   this.userHikes = results;
      
    // });

    // hikeService.getHikes().subscribe((results) => {
    //   this.Hikes = results;
    // });
  }


  ngOnInit(){
    this.currentUser = this.currentUserService.get_current_user();
   }  


  logout() {
    localStorage.removeItem("currentUser");
    alert("user logged out");
    this.router.navigate(['login']);
  }
  modalDismiss() {
    this.modal.dismiss()
  }

  ionViewWillEnter() {
    this.favService.getUserHikes().subscribe((results) => {
      this.userHikes = results;
    });

    this.hikeService.getHikes().subscribe((results) => {
      this.Hikes = results;
    });

    this.favService.getHikeIds().subscribe((results) => {
      this.favHikeIds = results;
    });
  }



}

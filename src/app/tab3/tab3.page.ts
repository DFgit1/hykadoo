import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  @ViewChild(IonModal) modal!: IonModal;
  
  
  

  constructor(private router:Router) {}

  openExternalPage(){
    window.open('https://parks.canada.ca/pn-np/ab/banff');
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

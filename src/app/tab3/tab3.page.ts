import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {


  currentUser: any;
  @ViewChild(IonModal) modal!: IonModal;
  
  
  

  constructor(private router:Router, public currentUserService:UserService) {}

  ngOnInit(){
    this.currentUser = this.currentUserService.get_current_user();
   }  


  openExternalPage(){
    window.open('https://parks.canada.ca/pn-np/ab/banff');
}

openExternalPage2(){
  window.open('https://www.banfflakelouise.com/park-pass-purchase?gclid=CjwKCAiA_6yfBhBNEiwAkmXy50_rWOt15ClPHbSW1QftSoRMmtIARun4_BORWIHZR7HRSnSTJ7frRRoCR84QAvD_BwE&gclsrc=aw.ds');
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

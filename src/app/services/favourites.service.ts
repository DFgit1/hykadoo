import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
 


  constructor(private http:HttpClient, public currentUserService: UserService) { }

 public currentUser: any = this.currentUserService.get_current_user();


  getUserHikes(){
    return this.http.get('http://localhost:3000/users' + '?id=' + this.currentUser.id);
  }

  addUserHikes(hike:any){
    return this.http.post('http://localhost:3000/favourites', {user_id: this.currentUser.id, trail_id: hike});
  }




}




// addFavourite(){
//   const favourites: Favourite {id: number, user_id: number}
//   this.http.post("http://localhost:3000/favourites", favourites)
//   .subscribe(()=>{
//    this.favourites.push(favourites);
//    this.favsUpdated.next([...this.favourites]);
//   });
// }


// deleteFavourite(favId: string){
// this.http.delete("http://localhost:3000/favourites/" + favId).subscribe(()=>{
//   const updatedFavs = this.favourites.filter(post => favourites.id !==favId);
//   this.favourites = updatedFavs;
//   this.favsUpdated.next([...this.favourites]);
// });
// }
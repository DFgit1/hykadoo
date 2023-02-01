import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ReviewFormComponent } from '../components/review-form/review-form.component';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { WeatherComponent } from '../components/weather/weather.component';
import { UserHikeComponent } from '../components/user-hike/user-hike.component';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
  ],
  declarations: [Tab2Page, ReviewFormComponent, WeatherComponent, UserHikeComponent]
})
export class Tab2PageModule {}

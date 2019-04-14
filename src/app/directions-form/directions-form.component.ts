import { Component } from '@angular/core';
import { Directions } from '../directions';
import { ApiService } from '../api.service';

@Component({
  selector: 'directions-form',
  templateUrl: './directions-form.component.html',
  styleUrls: ['./directions-form.component.css'],
  providers: [ApiService]
})
export class DirectionsFormComponent {
  constructor (private data: ApiService) {}
  directions;
  directionsModel = new Directions("", "", 0);
  minutes;
  submitted = null;

  onSubmit() {
    let punctuationlessOrder = this.directionsModel.orderAddress.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let orderString = punctuationlessOrder.replace(/\s{2,}/g," ");
    let punctuationlessRestaurant = this.directionsModel.restaurantAddress.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    
    let restaurantString = punctuationlessRestaurant.replace(/\s{2,}/g," ");

    let finalOrderString = orderString.split(' ').join('+');
    let finalRestaurantString = restaurantString.split(' ').join('+');
    console.log(finalOrderString);
    console.log(finalRestaurantString);
    this.data.getApiDirections(finalOrderString, finalRestaurantString).subscribe(data => { 
      this.directions = data;
      this.directionsModel.minutes = Math.ceil(this.directions.route.formattedTime.split(':').reduce (function (seconds, v) {
        return +v + seconds * 60;
      }, 0) / 60);
      console.log(this.directionsModel.minutes);
      this.submitted = true;
    })
  }
}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from './api-keys';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }


  getApiDirections(orderAddress, restaurantAddress) {
    return this.http.get('https://www.mapquestapi.com/directions/v2/route?key=' + apiKey + '&from=' + orderAddress + '&to=' + restaurantAddress + '&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false');
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  geocoder = new google.maps.Geocoder();
  places = new google.maps.places.PlacesService(document.createElement('div'));

  constructor(
    private zone: NgZone
  ) { }

  getCurrentPosition(): Promise<any> {

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
        error => {
          reject(error);
        }
      );
    })
  }

  reverseGeocode(latitude: number, longitude: number) {
    // console.log('lat', latitude, '\nlng', longitude);
    const latlng = { lat: latitude, lng: longitude }

    return new Promise((resolve, reject) => {
      this.geocoder.geocode({ location: latlng }, (results: any, status: any) => {

        if (status === 'OK' || results || results.length > 0) {

          const place = this.searchNearbyRestaurant(latlng);

          resolve(place)
        }
      })
    })

  }

  private searchNearbyRestaurant(location: any): Promise<any[]> {

    const request = {
      location: location,
      radius: 2000,
      type: 'restaurant'
    }

    return new Promise((resolve, reject) => {
      this.places.nearbySearch(request, (result: any, status: string) => {
        const nearest10Restaurants = result.slice(0, 10);

        if (status === 'OK' || result || result.length !== 0) {

          const detailPromises = nearest10Restaurants.map((place: any) => {
            return this.fetchPlacesDetail(place.place_id)
          })

          resolve(Promise.all(detailPromises))
        }
      })
    })
  }

  private fetchPlacesDetail(detail: string) {
    const detailsRequest = { placeId: detail }

    return new Promise((resolve, reject) => {


      this.places.getDetails(detailsRequest, (detail: any) => {

        const mapFinalList = {
          place_name: detail.name,
          place_address: detail.formatted_address
        }

        return resolve(mapFinalList);

      })
    })
  }
}

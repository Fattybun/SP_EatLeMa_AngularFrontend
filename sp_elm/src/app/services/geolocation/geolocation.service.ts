import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private _currentLocation = new BehaviorSubject<any>('');
  address: any;

  constructor() { }

  get currentLocation() {
    return this._currentLocation.asObservable();
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((response) => {
      this._currentLocation.next({
        coord: {
          lat: response.coords.latitude,
          lng: response.coords.longitude
        }
      })
    })
  }

  getAddress(lat:any, lng: any) {
    if(navigator.geolocation) {
      let geocoder = new google.maps.Geocoder();
      let latlng = new google.maps.LatLng(lat, lng);
      let request = { latlng: latlng }

      geocoder.geocode(request, (results:any, status:any) => {
        if (status === google.maps.GeocoderStatus.OK) {
          let result = results[0];
          let rsltAdrComponent = result.address_components;
          let resultLength = rsltAdrComponent.length;
          if (result != null) {
            this.address = rsltAdrComponent[resultLength - 8].short_name;
          } else {
            alert('No address available!');
          }
        }
      })
    }
  }

  reverseGeocoder(coord: any) {
    let geocoder = new google.maps.Geocoder();

    return new Promise<string>((resolve, reject) => {
      geocoder.geocode({ location: coord })
        .then((response: any) => {
          if (response.results[0]) {
            resolve(response.results[0].formatted_address);
          } else {
            reject('No results found');
          }
        })
        .catch((error: any) => {
          reject(`Geocoder failed due to: ${error}`);
        });
    })

    console.log(coord)
    geocoder.geocode({ 'address': coord }, (results: any) => {
      console.log('result: ', results)
    });
  }
}

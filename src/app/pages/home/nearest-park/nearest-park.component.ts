import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nearest-park',
  templateUrl: './nearest-park.component.html',
  styleUrls: ['./nearest-park.component.css']
})


export class NearestParkComponent implements OnInit {

  map: any;
  infoWindow: any;
  currentPos: any;

  constructor() { }

  ngOnInit() {
  }


  // initMap() {
  //
  //   let curPost = this.currentPos;
  //   // Try HTML5 geolocation.
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       // tslint:disable-next-line:prefer-const
  //       curPost = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //     });
  //   } else {
  //     // Browser doesn't support Geolocation
  //     console.log('browser doesnt support');
  //   }
  //
  //   const request = {
  //     location: pyrmont,
  //     radius: '500',
  //     type: ['restaurant']
  //   };
  //
  //   service = new google.maps.places.PlacesService(map);
  //   service.nearbySearch(request, callback);
  //
  //   amusement_park
  // }

}



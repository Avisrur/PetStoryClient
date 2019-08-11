import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader, MouseEvent} from '@agm/core';
import {Park, ParkService} from '../../@core/data/park.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})


export class ParksComponent implements OnInit {
  //
  // latitude: number;
  // longitude: number;
  // zoom: number;
  // address: string;
  // private geoCoder;
  //
  // @ViewChild('search')
  // public searchElementRef: ElementRef;
  //
  //
  // constructor(
  //   private mapsAPILoader: MapsAPILoader,
  //   private ngZone: NgZone
  // ) { }
  //
  //
  // ngOnInit() {
  //   // load Places Autocomplete
  //   this.mapsAPILoader.load().then(() => {
  //     this.setCurrentLocation();
  //     this.geoCoder = new google.maps.Geocoder;
  //
  //     const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //       types: ['address']
  //     });
  //     autocomplete.addListener('place_changed', () => {
  //       this.ngZone.run(() => {
  //         // get the place result
  //         const place: google.maps.places.PlaceResult = autocomplete.getPlace();
  //
  //         // verify result
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }
  //
  //         // set latitude, longitude and zoom
  //         this.latitude = place.geometry.location.lat();
  //         this.longitude = place.geometry.location.lng();
  //         this.zoom = 12;
  //       });
  //     });
  //   });
  // }
  //
  // // Get Current Location Coordinates
  // private setCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 8;
  //       this.getAddress(this.latitude, this.longitude);
  //     });
  //   }
  // }
  //
  //
  // markerDragEnd($event: MouseEvent) {
  //   console.log($event);
  //   this.latitude = $event.coords.lat;
  //   this.longitude = $event.coords.lng;
  //   this.getAddress(this.latitude, this.longitude);
  // }
  //
  // getAddress(latitude, longitude) {
  //   this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
  //     console.log(results);
  //     console.log(status);
  //     if (status === 'OK') {
  //       if (results[0]) {
  //         this.zoom = 12;
  //         this.address = results[0].formatted_address;
  //         this.latitude = latitude;
  //         this.longitude = longitude;
  //       } else {
  //         window.alert('No results found');
  //       }
  //     } else {
  //       window.alert('Geocoder failed due to: ' + status);
  //     }
  //
  //   });
  // }
  //
  // addMarker(lat: number, lng: number) {
  //   this.getAddress(lat,lng);
  // }
  //
  // putMarker($event: void) {
  //   let data = $event;
  //   this.getAddress(data['lat'],data['lng']);
  //
  // }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  createMode: boolean;
  private geoCoder;
  private savedParks: Array<Park>;

  constructor(private service: ParkService,
              private router: Router) {
    this.savedParks = new Array<Park>();
    this.createMode = false;


  }

  changeToCreateMode() {
    this.createMode = true;
  }

  ngOnInit() {
    this.geoCoder = new google.maps.Geocoder;
    this.service.getAllParks().subscribe(data => {
      this.savedParks = data['parks'];
      const TA = {lat: 32.100768, lng: 34.811902};
      this.map = new google.maps.Map(this.gmapElement.nativeElement, {zoom: 12, center: TA, mapTypeId: google.maps.MapTypeId.ROADMAP});
      this.savedParks.forEach(park => {
        this.initMarkers(park, this.map);
      });

    });

  }

  initMarkers(park, mapResult) {
    this.geoCoder.geocode({'address': park.address}, function (results, status) {
      const resultsLatLng = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()};
      // mapResult.setCenter(resultsLatLng);
      // mapResult.setZoom(15);
      // const map = new google.maps.Map(document.getElementById('gmap'), {zoom: 10, center: resultsLatLng, mapTypeId: google.maps.MapTypeId.ROADMAP});
      if (status === 'OK') {
        const marker = new google.maps.Marker({
          map: mapResult,
          position: results[0].geometry.location
        });
        marker.addListener('click', function () {
          const contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h5> Name: ' + park.name + '</h5>' +
            '<div id="bodyContent">' +
            '<h5> Address: ' + park.address + '</h5>' +
            '<div id="bodyContent">' +
            '<h5> Likes: ' + park.likes + '</h5>' +
            '<div id="bodyContent">'
          ;

          const infowindow = new google.maps.InfoWindow({
            content: contentString
          }).open(mapResult, marker);
        });
      }
    });
  }


  getMarker($event) {
    const mapResult = this.map;
    console.log($event);
    this.geoCoder.geocode({'address': $event.address}, function (results, status) {
      const resultsLatLng = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}
      mapResult.setCenter(resultsLatLng);
      mapResult.setZoom(15);
      // const map = new google.maps.Map(document.getElementById('gmap'), {zoom: 10, center: resultsLatLng, mapTypeId: google.maps.MapTypeId.ROADMAP});
      if (status === 'OK') {
        const marker = new google.maps.Marker({
          map: mapResult,
          position: results[0].geometry.location
        });
        marker.addListener('click', function () {
          const contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h5> Name: ' + $event.name + '</h5>' +
            '<div id="bodyContent">' +
            '<h5> Address: ' + $event.address + '</h5>' +
            '<div id="bodyContent">' +
            '<h5> Likes: ' + $event.likes + '</h5>' +
            '<div id="bodyContent">'
          ;

          const infowindow = new google.maps.InfoWindow({
            content: contentString
          }).open(mapResult, marker);
        });
      }
    });
  }
}


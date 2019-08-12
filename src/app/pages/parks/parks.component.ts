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

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  createMode: boolean;
  editMode: boolean;
  parkToEdit: Park;
  private geoCoder;
  private savedParks: Array<Park>;

  constructor(private service: ParkService,
              private router: Router) {
    this.savedParks = new Array<Park>();
    this.createMode = false;
    this.editMode = false;
  }

  changeToCreateMode(flag: boolean) {
    this.createMode = flag;
    this.ngOnInit();
  }

  changeToEditMode(parkToEdit: Park) {
    this.editMode = true;
    this.parkToEdit = parkToEdit;
    this.ngOnInit();
  }

  changeToUneditMode($event) {
    this.editMode = false;
    this.ngOnInit();
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


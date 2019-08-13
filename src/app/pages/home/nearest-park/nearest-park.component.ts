import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-nearest-park',
  templateUrl: './nearest-park.component.html',
  styleUrls: ['./nearest-park.component.css']
})


export class NearestParkComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: any;
  infoWindow: any;
  currentPos: any;
  marker: any;

  constructor() {
  }

  ngOnInit() {
    this.initMap();
  }


  initMap() {
    const yarkonParkDefault = {lat: 32.101705, lng: 34.811477};

    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      center: yarkonParkDefault,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      fullscreenControl: false,
      mapTypeControl: false,
      panControl: false,
      rotateControl: false,
      scaleControl: false,
      scrollwheel: false,
      streetViewControl: false,
      zoomControl: false,
      draggable: false,
      clickableIcons: false
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: yarkonParkDefault
    });

    this.findMe();
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        const request = {
          location: location,
          radius: '500',
          type: ['park']
        };

        const service = new google.maps.places.PlacesService(this.map);
        // @ts-ignore
        service.nearbySearch(request, (results) => {
          this.setMarker(results[0]);
        });

      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  setMarker(result) {
    const location = new google.maps.LatLng(result.geometry.location.lat(), result.geometry.location.lng());
    this.map.panTo(location);
    const mapResult = this.map;

    const marker =  new google.maps.Marker({
      position: location,
      map: this.map
    });
    marker.addListener('click', function () {
      const contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h5> Name: ' + result.name + '</h5>' +
        '<div id="bodyContent">' +
        '<h5> Address: ' + result.formatted_address + '</h5>' +
        '<div id="bodyContent">'
      ;

      const infowindow = new google.maps.InfoWindow({
        content: contentString
      }).open(mapResult, marker);
    });

  }
}



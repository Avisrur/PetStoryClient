import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Park} from '../../../@core/data/park.service';

@Component({
  selector: 'app-park-table',
  templateUrl: './park-table.component.html',
  styleUrls: ['./park-table.component.css']
})
export class ParkTableComponent implements OnInit {

  @Output() markerMessage = new EventEmitter<string>();


  @Input() savedParks: Array<Park>;
  displayedColumns = ['name', 'address', 'likes', 'location on map'];


  constructor() {;
  }

  ngOnInit() {

  }

  getMarker(el: any) {
    console.log(el);
    this.markerMessage.emit(el);
  }
}

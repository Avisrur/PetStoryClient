import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Park} from '../../../@core/data/park.service';

@Component({
  selector: 'app-park-table',
  templateUrl: './park-table.component.html',
  styleUrls: ['./park-table.component.css']
})
export class ParkTableComponent implements OnInit {

  @Output() markerMessage = new EventEmitter<string>();
  @Output() editMode = new EventEmitter<Park>();
  @Input() savedParks: Array<Park>;

  displayedColumns = ['name', 'address', 'likes', 'details', 'edit'];


  constructor() {;
  }

  ngOnInit() {

  }

  getMarker(el: any) {
    this.markerMessage.emit(el);
  }

  changeToEditMode(el: Park) {
    this.editMode.emit(el);
  }
}

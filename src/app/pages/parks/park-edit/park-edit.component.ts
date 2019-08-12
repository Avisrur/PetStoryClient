import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Park, ParkService} from '../../../@core/data/park.service';

@Component({
  selector: 'app-park-edit',
  templateUrl: './park-edit.component.html',
  styleUrls: ['./park-edit.component.css']
})
export class ParkEditComponent implements OnInit {

  @Output() editMode = new EventEmitter<boolean>();

  @Input() parkToEdit: Park;

  constructor(private service: ParkService) {
  }

  ngOnInit() {
  }

  updatePark() {
    this.service.updatePark(this.parkToEdit)
      .subscribe((data) => {
          console.log(data);
          alert('park has been updated successfully.');
          this.editMode.emit(false);
        },
        err => {
          console.log(err);
          alert(err.error.message);
        });
  }

}

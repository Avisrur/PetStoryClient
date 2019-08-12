import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Park, ParkService} from '../../../@core/data/park.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-park-create',
  templateUrl: './park-create.component.html',
  styleUrls: ['./park-create.component.css']
})
export class ParkCreateComponent implements OnInit {

  @Output() createMode = new EventEmitter<boolean>();

  parkToRegister: Park = new Park();

  constructor(private service: ParkService) {
  }

  ngOnInit() {
  }

  registerPark() {
    this.parkToRegister.setLikes(0);
    this.service.registerPark(this.parkToRegister)
      .subscribe((data) => {
          console.log(data);
          alert('park has been added successfully.');
          this.createMode.emit(false);
        },
        err => {
          console.log(err);
          alert(err.error.message);
        });
  }
}

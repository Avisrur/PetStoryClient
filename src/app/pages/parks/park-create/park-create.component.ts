import { Component, OnInit } from '@angular/core';
import {Park, ParkService} from '../../../@core/data/park.service';
import {Router} from '@angular/router';
import {Input} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-park-create',
  templateUrl: './park-create.component.html',
  styleUrls: ['./park-create.component.css']
})
export class ParkCreateComponent implements OnInit {
  parkToRegister: Park = new Park();

  constructor(private service: ParkService,
              private router: Router) {}

  ngOnInit() {
  }

  registerPark() {
    this.service.registerPark(this.parkToRegister)
      .subscribe((data) => {
          console.log(data);
          alert('park has been added successfully.');
          this.router.navigate(['/parks']);
        },
        err => {
          console.log(err);
          alert(err.error.message);
        });
  }
}

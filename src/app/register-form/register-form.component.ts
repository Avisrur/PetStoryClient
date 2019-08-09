import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService, User} from '../@core/data/user.service';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  userToRegister: User = new User();

  constructor(private service: UserService,
              private router: Router) {
  }

  // private files = [];
  // private url = 'http://localhost:3000/upload';
  // private uploader: FileUploader;
  //
  // ngOnInit() {
  //   this.uploader = new FileUploader({url: this.url});
  //
  //   this.FileService.showFileNames().subscribe(response => {
  //     for (let i = 0; i < response.json().length; i++) {
  //       this.files[i] = {
  //         filename: response.json()[i].filename,
  //         originalname: response.json()[i].originalname,
  //         contentType: response.json()[i].contentType
  //       };
  //     }                                                                  ------------------->>>> CHECK IF UPLOAD POSSIBLE
  //   });
  // }
  //
  // downloadPdf(filename, contentType) {
  //   this.FileService.downloadPDF(filename, contentType).subscribe(
  //     (res) => {
  //       const file = new Blob([res.blob()], { type: contentType });
  //       const fileURL = URL.createObjectURL(file);
  //       window.open(fileURL);
  //     }
  //   );
  // }

  ngOnInit(): void {
  }

  registerUser() {
    this.service.registerUser(this.userToRegister)
      .subscribe(data => {
          console.log(data);
          alert('user registered successfully.');
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
          alert(err.error.message);
        });
  }
}

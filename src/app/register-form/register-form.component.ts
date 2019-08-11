import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService, User} from '../@core/data/user.service';
import { FileUploadService } from '../@core/data/file-upload.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [FileUploadService]
})
export class RegisterFormComponent implements OnInit {

  userToRegister: User = new User();
  fileToUpload: File = null;

  constructor(private service: UserService,
              private router: Router,
              private fileUploadService: FileUploadService) {
  }

  ngOnInit() {
  } 

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      this.userToRegister.picture = data;
      debugger;

      // do something, if upload success
    }, error => {
      console.log(error);
    });
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

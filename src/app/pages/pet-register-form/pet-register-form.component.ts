import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService, User} from '../../@core/data/user.service';
import { PetService, Pet } from '../../@core/data/pet.service';
import { FileUploadService } from 'app/@core/data/file-upload.service';

@Component({
  selector: 'app-pet-register-form',
  templateUrl: './pet-register-form.component.html',
  styleUrls: ['./pet-register-form.component.css']
})
export class PetRegisterFormComponent implements OnInit {

  petToRegister: Pet = new Pet();
  currentUser: User;
  fileToUpload: File = null;

  constructor(private service: PetService,
              private userService: UserService,
              private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver,
              private fileUploadService: FileUploadService) {

                this.currentUser = userService.getCurrentUser();
                this.petToRegister.userId = this.currentUser._id;
  }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      this.petToRegister.image = data;
      debugger;

      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }

  registerPet() {
    this.service.registerPet(this.petToRegister)
      .subscribe((data) => {
        console.log(data);
        alert('pet has been added successfully.');
        this.router.navigate(['/pages']);
      },
      err => {
        console.log(err);
        alert(err.error.message);
      });
  }
}

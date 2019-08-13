import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { FileUploadService } from 'app/@core/data/file-upload.service';
import { ActivatedRoute } from '@angular/router'
import {User, UserService} from '../../../@core/data/user.service';
import {PetService} from '../../../@core/data/pet.service';

@Component({
  selector: 'app-pet-edit-form',
  templateUrl: './pet-edit-form.component.html',
  styleUrls: ['./pet-edit-form.component.css']
})
export class PetEditFormComponent implements OnInit {

  petToEdit: any;
  currentUser: User;
  fileToUpload: File = null;

  constructor(private service: PetService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private fileUploadService: FileUploadService) {

                this.currentUser = this.userService.getCurrentUser();
                this.petToEdit = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      this.petToEdit.image = data;
      debugger;

      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }

  editPet() {
    this.service.editPet(this.petToEdit)
      .subscribe((data) => {
        console.log(data);
        alert('pet has been updated successfully.');
        this.router.navigate(['/pages/profile']);
      },
      err => {
        console.log(err);
        alert(err.error.message);
      });
  }
}

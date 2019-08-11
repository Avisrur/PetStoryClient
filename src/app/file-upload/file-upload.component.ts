import { Component, OnInit } from '@angular/core';
import { FileUploadService } from "../@core/data/file-upload.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File = null;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      debugger;
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }


}

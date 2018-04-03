import { Component, OnInit } from '@angular/core';
import { UploadFiles } from '../../../model/upload-files';
import { UploadFilesService } from '../../../services/upload-files.service';


@Component({
  selector: 'app-step-2-preference',
  templateUrl: './step-2-preference.component.html',
  styleUrls: ['./step-2-preference.component.css', '../../registration/register.component.css']
})
export class Step2PreferenceComponent implements OnInit {


emergencyContactName;
emergencyContactNr;
EmergencyVetSpendLimit;

petPicture: UploadFiles;
delectedFiles: FileList | null;
petPicUrl: any;


  constructor(
    private uploader: UploadFilesService
    ) { }

  ngOnInit() {
  }



 PetUpload(event: any) {
   const file = (event.target as HTMLInputElement).files
    if (file && file.length === 1) {
    this.petPicture = new UploadFiles(file.item(0));
        this.filePreview(event, 'pet-pic');
        // push profile
     this.uploader.pushUpload(this.petPicture, 'Pet-pics');
       } else {
      console.error('No profile photo found!');
    }

  }


filePreview(event: any, fileType: string) {
    var reader = new FileReader();
    console.log(fileType)

    reader.onload = (event: any) => {
      switch (fileType) {
        case "pet-pic": this.petPicUrl = event.target.result;
          break; 

        default:
          break;
      }

    }

    reader.readAsDataURL(event.target.files[0]);
  }



}

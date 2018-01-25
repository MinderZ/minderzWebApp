import { UploadFiles } from './../../../model/upload-files';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterSitterService } from '../../../services/register-sitter.service';

@Component({
  selector: 'app-step-2-personal-details',
  templateUrl: './step-2-personal-details.component.html',
  styleUrls: ['./step-2-personal-details.component.css',
    '../register-sitter.component.css']
})
export class Step2PersonalDetailsComponent implements OnInit {
  personForm: FormGroup;
  profilePicUrl;
  idCopyUrl;
  consentFormUrl;

  male: boolean;
  female: boolean;
  genderPristine = false;

  constructor(fb: FormBuilder, protected registerService: RegisterSitterService) {
    this.personForm = fb.group({
      profilePic: null
    })
  }

  profileUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      let profilePicture = new UploadFiles(file);
      this.filePreview(event, 'profile-pic');
    }

  }

  idCopyUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      let idCopy = new UploadFiles(file);
      this.filePreview(event, 'copy-of-ID');
    }

  }

  consentFormUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      let consentForm = new UploadFiles(file);
      this.filePreview(event, 'consent-form');
    }

  }

  filePreview(event: any, fileType: string) {
    var reader = new FileReader();
    console.log(fileType)

    reader.onload = (event: any) => {
      switch (fileType) {
        case "profile-pic": this.profilePicUrl = event.target.result;
          break;

        case "copy-of-ID": this.idCopyUrl = event.target.result;
          break;

        case "consent-form": this.consentFormUrl = event.target.result;
          break;

        default:
          break;
      }

    }

    reader.readAsDataURL(event.target.files[0]);
  }

  ngOnInit() {
  }

}

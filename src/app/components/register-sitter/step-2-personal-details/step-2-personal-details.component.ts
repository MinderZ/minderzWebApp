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
  profilePicUrl: any;
  idCopyUrl:any;
  consentFormUrl:any;

  cellphoneNum:string;
  age: string;
  idNum: string;
  emergencyContactName: string;
  emergencyContactNr: string
  male: boolean;
  female: boolean;
  profilePicture: UploadFiles;
  consentForm: UploadFiles;
  idCopy:UploadFiles;
  gender:string;

  genderPristine = false;

  constructor(fb: FormBuilder, protected registerService: RegisterSitterService) {
  }

  profileUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      this.profilePicture = new UploadFiles(file);
      this.filePreview(event, 'profile-pic');
    }

  }

  idCopyUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      this.idCopy = new UploadFiles(file);
      this.filePreview(event, 'copy-of-ID');
    }

  }

  consentFormUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      this.consentForm = new UploadFiles(file);
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

  setGender(gender:string){
    this.gender = gender;
  }

  ngOnInit() {
  }

  next(){

    this.registerService.sitter.profilePicture = this.profilePicture;
    this.registerService.sitter.age = Number(this.age);
    this.registerService.sitter.gender = this.gender;
    this.registerService.sitter.copyOfId = this.idCopy;
    this.registerService.sitter.cellphoneNumber = this.cellphoneNum ;
    this.registerService.sitter.consentForm = this.consentForm;
    this.registerService.sitter.id = this.idNum;
    this.registerService.sitter.emergencyContactName = this.emergencyContactName;
    this.registerService.sitter.emergencyContactNr = this.emergencyContactNr;
    
    console.table(this.registerService.sitter);
    
    this.registerService.next()
  }
}

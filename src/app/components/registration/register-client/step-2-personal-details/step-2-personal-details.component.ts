import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UploadFiles } from '../../../../model/upload-files';
import { ClientRegisterService } from '../../../../services/client-register.service';
import { RegisterService } from '../../../../services/register.service';
import { Router } from '@angular/router';
import { DataRecycleService } from '../../../../services/data-recycle.service';
import { UploadFilesService } from '../../../../services/upload-files.service';


@Component({
  selector: 'app-step-2-personal-details',
  templateUrl: './step-2-personal-details.component.html',
  styleUrls: ['./step-2-personal-details.component.css', '../../register.component.css']
})
export class Step2PersonalDetailsComponent implements OnInit {
  profilePicUrl: any;

  firstname: string;
  lastname: string;

  idCopyUrl: any;
  consentFormUrl: any;

  cellphoneNum: string;
  age: string;
  idNum: string;
  emergencyContactName: string;
  emergencyContactNr: string
  male: boolean;
  female: boolean;
  profilePicture: UploadFiles;
  consentForm: UploadFiles;
  idCopy: UploadFiles;
  delectedFiles: FileList | null;
  gender: string;


  genderPristine = false;

  constructor(
    private dataRecycleService: DataRecycleService,
    private router: Router, 
    fb: FormBuilder,
    protected clientRegisterService: ClientRegisterService,
    private uploader: UploadFilesService,
    private registerService: RegisterService)   {  }



// profileDetect($event: Event) {
//       this.delectedFiles = ($event.target as HTMLInputElement).files;
//   }


  profileDetect(event: any) {
   const file = (event.target as HTMLInputElement).files
    if (file && file.length === 1) {
    this.profilePicture = new UploadFiles(file.item(0));
        this.filePreview(event, 'profile-pic');
        // push profile
     this.uploader.pushUpload(this.profilePicture);
       } else {
      console.error('No profile photo found!');
    }

  }


  idCopyUpload(event: any) {
   const file = (event.target as HTMLInputElement).files
    if (file && file.length === 1) {
    this.idCopy = new UploadFiles(file.item(0));
    this.filePreview(event, 'copy-of-ID');
        // push profile
     this.uploader.pushUpload(this.idCopy);
       } else {
      console.error('No ID Copy found!');
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

  setGender(gender: string) {
    this.gender = gender;
  }

  ngOnInit() {
  }

  submit() {

    this.profilePicture.url = this.clientRegisterService.client.profilePicture;



    this.idCopy.url = this.clientRegisterService.client.copyOfId;
    this.consentForm.url = this.clientRegisterService.client.consentForm;

    this.clientRegisterService.client.profilePicture = this.profilePicture.url;
    this.clientRegisterService.client.fullName = this.firstname + " " + this.lastname;
    this.clientRegisterService.client.age = Number(this.age);
    this.clientRegisterService.client.gender = this.gender;
    this.clientRegisterService.client.copyOfId = this.idCopy.url;
    this.clientRegisterService.client.cellphoneNumber = this.cellphoneNum;
    this.clientRegisterService.client.consentForm = this.consentForm.url;
    this.clientRegisterService.client.id = this.idNum;
    this.clientRegisterService.client.emergencyContactName = this.emergencyContactName;
    this.clientRegisterService.client.emergencyContactNr = this.emergencyContactNr;

    console.table(this.clientRegisterService.client);

    this.dataRecycleService.registerUser(this.clientRegisterService.client);
    this.registerService.next();
    this.router.navigate(['home']);
  }
}

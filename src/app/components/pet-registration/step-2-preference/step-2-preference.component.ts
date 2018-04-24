import { Component, OnInit } from '@angular/core';
import { UploadFiles } from '../../../model/upload-files';
import { UploadFilesService } from '../../../services/upload-files.service';
import { RegisterPetService } from '../../../services/register-pet.service';
import { CacheService } from "../../../services/cache.service";
import { DataRecycleService } from '../../../services/data-recycle.service';
import { Pet} from '../../../model/pet';
import { SitterReferenceObject } from '../../../model/sitterReferenceObject.model';


import { Router } from '@angular/router';

@Component({
  selector: 'app-step-2-preference',
  templateUrl: './step-2-preference.component.html',
  styleUrls: ['./step-2-preference.component.css', '../../registration/register.component.css']
})
export class Step2PreferenceComponent implements OnInit {


EmergencyVetSpendLimit;

petPicture: UploadFiles;
delectedFiles: FileList | null;
petPicUrl: any;


  //Refernces
  creatingReference = false;
  reference: SitterReferenceObject;
  referenceName: string;
  validReferenceName = true;
  referencePhone: string;
  validReferencePhone = true;
  references = new Array();



  constructor(
    private uploader: UploadFilesService,
    private router: Router,
    private dataRecycleService: DataRecycleService,
    private cacheService: CacheService,
    protected registerService:RegisterPetService,

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
      console.error('No pet photo found!');
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



  addReference() {
    if (this.validateReference()) {

      this.reference = new SitterReferenceObject;

      this.reference.referenceName = this.referenceName;
      this.reference.referencePhone = this.referencePhone;

      this.registerService.Pet.references.push(this.reference);

      this.creatingReference = false;
      this.referenceName = '';
      this.referencePhone = '';
    }
  }

  validateReference() {
    if (
      this.referenceName !== undefined &&
      this.referencePhone !== undefined &&
      this.referencePhone.length === 10)
    {
      this.validReferenceName = true;
      this.validReferencePhone = true;
      return true;

    } else if (this.referenceName === undefined && this.referencePhone === undefined) {
      this.validReferenceName = false;
      this.validReferencePhone = false;
      return false;

    } else if (this.referenceName !== undefined && this.referencePhone === undefined || this.referencePhone.length !== 10) {
      this.validReferenceName = true;
      this.validReferencePhone = false;
      return false;
    } else {
      this.validReferenceName = false;
      this.validReferencePhone = true;
      return false;
    }
  }


submit(){
this.registerService.Pet.references = this.references;
this.registerService.Pet.emegergencyVetSpendLimimt = this.EmergencyVetSpendLimit;
this.registerService.Pet.petPicture = this.petPicture.url;
console.log('check for photo url', this.petPicture.url);

console.table(this.registerService.Pet);

this.dataRecycleService.registerPet(this.registerService.Pet);

this.dataRecycleService.getUserPets().subscribe(response =>{
      this.cacheService.currentUserPets = response as Pet; }) 
 this.router.navigate(['petProfile']);
}

}

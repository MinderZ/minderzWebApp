import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RegisterService } from "../../../../services/register.service";



@Component({
  selector: "app-step-3-sitter-preferences",
  templateUrl: "./step-3-sitter-preferences.component.html",
  styleUrls: ["./step-3-sitter-preferences.component.css",'../../register.component.css']
})
export class Step3SitterPreferencesComponent implements OnInit {
  // pricePerWalk;
  pricePerPet;

  petPreferenceOption: string[] = ["small","medium","large"];
  jobDistanceRadiusOption: number[] = [10,20,50];
  numberOption: number[] = [1,2,3,4];
  jobDistanceRadius: number = this.jobDistanceRadiusOption[0];
  petSizePreference: string = this.petPreferenceOption[0];


  serviceMap: {[key:string]: boolean} = {};
  petMap: {[key:string]: boolean} = {};
  // serviceMap: Map<string, boolean> = new Map<string, boolean>();
  // petMap: Map<string, boolean> = new Map<string, boolean>();

  dogWalking= {
    pricePerWalk:1,
    petsPerWalk:this.numberOption[0],
    walksPerDay:this.numberOption[0],
  }

  petSitting= {
    pricePerPet:1,
    petsPerDay:this.numberOption[0],
  }

  houseSitting= {
    pricePerDay:0,
  } 

  dropInVist={
    pricePerVisit:1,
    visitsPerDay:this.numberOption[0],
  }

  constructor(protected registerService: RegisterService) {

    // console.log('pets per walk',this.dogWalking.petsPerWalk);
  }

  ngOnInit() { }

  checkPet(pet: string) {
    this.petMap[pet] = !this.petMap[pet];
  }

  checkService(service: string) {
    this.serviceMap[service] = !this.serviceMap[service];
  }


  setSize(size:string){
    this.petSizePreference = size;
  }

  next(){
    this.registerService.sitter.jobRadius = this.jobDistanceRadius;
    this.registerService.sitter.dogWalking = this.dogWalking;
    this.registerService.sitter.petSitting = this.petSitting;
    this.registerService.sitter.houseSitting = this.houseSitting;
    this.registerService.sitter.dropInVist = this.dropInVist;
    this.registerService.sitter.petsMap = this.petMap;
    this.registerService.sitter.serviceMap = this.serviceMap;

    console.table(this.registerService.sitter);
    // this.registerService.next()

  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms/src/model";

@Component({
  selector: "app-step-3-sitter-preferences",
  templateUrl: "./step-3-sitter-preferences.component.html",
  styleUrls: ["./step-3-sitter-preferences.component.css"]
})
export class Step3SitterPreferencesComponent implements OnInit {
  form: FormGroup;
  
  serviceMap: Map<string, boolean> = new Map<string, boolean>();
  petMap: Map<string, boolean> = new Map<string, boolean>();
  

  pricePerPet?:Number;
  pricePerWalk?:Number;
  pricePerVisit?:Number;

  constructor() {}

  ngOnInit() {}

  checkPet(pet: string) {
    this.petMap[pet] = !this.petMap[pet];
  }

  checkService(service: string) {
    this.serviceMap[service] = ! this.serviceMap[service];
  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms/src/model";

@Component({
  selector: "app-step-3-sitter-preferences",
  templateUrl: "./step-3-sitter-preferences.component.html",
  styleUrls: ["./step-3-sitter-preferences.component.css"]
})
export class Step3SitterPreferencesComponent implements OnInit {
  form: FormGroup;
  servicesMap: Map<string, boolean> = new Map<string, boolean>();

  pricePerPet?:Number;
  pricePerWalk?:Number;
  pricePerVisit?:Number;


  
  constructor() {}

  ngOnInit() {
    
  }

  check(service: string) {
    this.servicesMap[service] = !this.servicesMap[service];
  }

  checkInput(event:any,priceToCheck:number) {

  }


  
}

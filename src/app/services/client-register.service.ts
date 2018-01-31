import { Injectable } from "@angular/core";
import { Client } from "../model/client";

@Injectable()
export class ClientRegisterService {
  step: number = 1;
  formName: string = "Location";
  client: Client;

  constructor() {
    this.client = {
      fullName: "",
      location: "",
      profilePicture: "https://i.redd.it/bmkgfea4tvc01.png",
      age: 0,
      gender: "",
      cellphoneNumber: "",
      id: "",
      copyOfId: "https://i.redd.it/bmkgfea4tvc01.png",
      consentForm: "https://i.redd.it/bmkgfea4tvc01.png",
      emergencyContactName: "",
      emergencyContactNr: "",
      coordinates: {
        lat: 0,
        lng: 0
      },
      isServiceProvider: false,
    };
  }

  getClientProfileObject() {
    return this.client;
  }

  setClientProfileObject(client) {
    this.client = client;
  }

  back() {
    this.step -= 1;
    this.changeFormName(this.step);
  }
  next() {
    this.step += 1;
    this.changeFormName(this.step);
  }

  changeFormName(step: number) {
    switch (step) {
      case 1:
        this.formName = "Location";
        break;
      case 2:
        this.formName = "Personal Details";
        break;
    }
  }

  submit() {
    this.step = 0;
  }
}

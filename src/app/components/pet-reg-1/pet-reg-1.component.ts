import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserPetObject } from '../../model/userPetObject.modal';

@Component({
  selector: 'app-pet-reg-1',
  templateUrl: './pet-reg-1.component.html',
  styleUrls: ['./pet-reg-1.component.css']
})
export class PetReg1Component implements OnInit {
  step1 = true;
  constructor(
    private userservice: UserService,
    private userPet: UserPetObject
  ) {}

  ngOnInit() {}

  pet1Part(part1) {
    this.userPet.petType = part1.petType;
    this.userPet.petName = part1.petName;
    this.userPet.petGender = part1.pGender;
    this.userPet.petBreed = part1.breed;
    this.userPet.fleeTreating = part1.fleetreatment;
    this.userPet.canStayWithChildren = part1.petandchildren;
    // this.userservice.createProfile(part1);
    this.step1 = false;

  }

  pet2Part(part2) {
    this.userPet.PetPicture = part2.pic;
    this.userPet.EmergencyVetSpendLimit = part2.emergencyvet;
    this.userservice.createPetProfile(this.userPet);
console.log(this.userPet);

  }
}

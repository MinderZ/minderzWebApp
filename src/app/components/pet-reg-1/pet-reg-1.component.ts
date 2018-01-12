import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pet-reg-1',
  templateUrl: './pet-reg-1.component.html',
  styleUrls: ['./pet-reg-1.component.css']
})
export class PetReg1Component implements OnInit {
  step1= true;
  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  pet1Part(part1) {
    this.userservice.createProfile(part1);
  }

  pet2Part(part2) {
    this.userservice.createProfile(part2);
  }

}

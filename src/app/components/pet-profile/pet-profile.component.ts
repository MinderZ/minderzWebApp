import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserPetObject } from '../../model/userPetObject.modal';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  editPetInfo(editpart) { }


}

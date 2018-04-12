import { Component, OnInit } from '@angular/core';
import { RegisterPetService } from '../../services/register-pet.service';
 
@Component({
  selector: 'app-pet-registration',
  templateUrl: './pet-registration.component.html',
  styleUrls: ['./pet-registration.component.css', '../registration/register.component.css']
})
export class PetRegistrationComponent implements OnInit {

  constructor(
  	protected registerService:RegisterPetService
  	) { }

  ngOnInit() {
  }

}

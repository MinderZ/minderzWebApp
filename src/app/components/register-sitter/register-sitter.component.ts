import { Component, OnInit } from '@angular/core';
import { RegisterSitterService } from '../../services/register-sitter.service';

@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.css']
})
export class RegisterSitterComponent implements OnInit {

  step: number = 1;
  formName: string = 'Location';

  constructor(registerService: RegisterSitterService) { }

  ngOnInit() {
  }

  back() {
    this.step -= 1;
    this.changeFormName(this.step);
  }
  next() {
    this.step += 1;
    this.changeFormName(this.step);
  }

  submit() {

  }

  changeFormName(step: number) {
    switch (step) {
      case 1: this.formName = 'Location';
        break;
      case 2: this.formName = 'Personal Details';
        break;
      case 3: this.formName = 'Sitter Preferences';
        break;
      case 4: this.formName = 'Sitter Details';
        break;
    }
  }

}

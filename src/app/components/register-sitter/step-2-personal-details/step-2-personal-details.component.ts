import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterSitterService } from '../../../services/register-sitter.service';

@Component({
  selector: 'app-step-2-personal-details',
  templateUrl: './step-2-personal-details.component.html',
  styleUrls: ['./step-2-personal-details.component.css',
    '../register-sitter.component.css']
})
export class Step2PersonalDetailsComponent implements OnInit {
  personForm: FormGroup;
  pfp: File;

  constructor(fb: FormBuilder, protected registerService: RegisterSitterService) {
    this.personForm = fb.group({
      profilePic: null
    })
  }

  test() {
    console.log(this.personForm.get('profilePic'))
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.personForm.get('profilePic').setValue({
          filename: file.name,
          filetype: file.type,
          // value: reader.result.split(',')[1]
        })
      }
    }
  }

  ngOnInit() {
  }

}

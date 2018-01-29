import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from '../../model/question.model';


@Component({
  selector: 'app-before-asevice-provider',
  templateUrl: './before-asevice-provider.component.html',
  styleUrls: ['./before-asevice-provider.component.css', '../../../assets/styles/mainstyle.css']
})

export class BeforeAseviceProviderComponent implements OnInit {
  checked = true;
  selected = true;


  hide = true;
  from = false;
  constructor(
public router: Router,
public question: Questions
  ) { }

  ngOnInit() {
  }

check() {
      this.checked = !this.checked;
  }

  select() {
      this.selected = !this.selected;
  }


  newsitter() {
// if(this.question.competentForpets ==== false) {
//   window.warn('You are required to answer all questions, in order to procced');
// }


this.router.navigate(['newsitter']);
}



}

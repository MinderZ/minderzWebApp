import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-before-asevice-provider',
  templateUrl: './before-asevice-provider.component.html',
  styleUrls: ['./before-asevice-provider.component.css', '../../../assets/styles/mainstyle.css']
})
export class BeforeAseviceProviderComponent implements OnInit {
  hide = true;

  constructor(
public router: Router
  ) { }

  ngOnInit() {
  }

newsitter() {
  this.router.navigate(['newsitter']);
}

}

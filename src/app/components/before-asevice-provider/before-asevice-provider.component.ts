import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from '../../model/question.model';
import { CacheService } from '../../services/cache.service';


@Component({
  selector: 'app-before-asevice-provider',
  templateUrl: './before-asevice-provider.component.html',
  styleUrls: ['./before-asevice-provider.component.css', '../registration/register.component.css', '../../../assets/styles/mainstyle.css']
})

export class BeforeAseviceProviderComponent{


  constructor(
public router: Router,
private cache: CacheService
  ) {}
}

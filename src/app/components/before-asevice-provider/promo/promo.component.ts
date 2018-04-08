import { Component, OnInit } from '@angular/core';
import { CacheService } from '../../../services/cache.service';


@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  constructor(
  	private cache: CacheService ,
  	) { }

  ngOnInit() {
  }
 
}

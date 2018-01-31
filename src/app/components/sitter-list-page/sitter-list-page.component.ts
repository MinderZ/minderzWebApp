import { CacheService } from './../../services/cache.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Client } from '../../model/client';

@Component({
  selector: 'app-sitter-list-page',
  templateUrl: './sitter-list-page.component.html',
  styleUrls: ['./sitter-list-page.component.css']
})
export class SitterListPageComponent implements OnInit {
  value;

  // sitterList:Client[] = this.filter.filteredList;
  
constructor(
  private filter:FilterService,
  private route:Router,
  private cache:CacheService) { }
  ngOnInit() {
    this.filter.getbyService(this.filter.serviceTerm)

  }

  sitterInfo(sitter: Client) {
    this.cache.selectedSitter = sitter;
    this.route.navigate(['bookingprofile']);
  }

}

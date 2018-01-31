import { Injectable } from '@angular/core';
import { DataRecycleService } from './data-recycle.service';
import { SitterProfileObject } from '../model/sitterProfileObject.model';
import { Client } from '../model/client';
import { NgIf } from '@angular/common/src/directives/ng_if';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilterService {
  filteredList

   serviceTerm;


  constructor(private dataService: DataRecycleService) { }

  
  getbyService(job) {
    this.dataService.getData('users', 'isServiceProvider', '==', true)
      .subscribe(
      (res: Client[]) => {
        this.filteredList = res.filter(service =>
          service.serviceProvider.serviceMap[job]
        )
        console.log(this.filteredList);
      }

      );


  }
}

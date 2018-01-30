import { Injectable } from '@angular/core';
import { DataRecycleService } from './data-recycle.service';
import { SitterProfileObject } from '../model/sitterProfileObject.model';
import { Client } from '../model/client';
import { NgIf } from '@angular/common/src/directives/ng_if';

@Injectable()
export class FilterService {
  filteredList
  constructor(private dataService: DataRecycleService) { }

  // sortByRating(){
  //   this.dataService.getData('users', 'isServiceProvider', '==', true)
  //   .subscribe(
  //   (res: Client[]) => {
  //     this.filteredList = res.sort((a:Client,b:Client)=>{
  //       if (a.serviceProvider < lastPaxB) {
  //         return -1;
  //       } else if (lastPaxA > lastPaxB) {
  //         return 1;
  //       } else {
  //         return 0;
  //       }
  //     })
  //     console.log(this.filteredList);
  //   }

  //   );


  // }

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

import { Injectable } from '@angular/core';
import { DataRecycleService } from './data-recycle.service';
import { SitterProfileObject } from '../model/sitterProfileObject.model';

@Injectable()
export class FilterService {
  // filteredList= new Map
  constructor(private dataService:DataRecycleService) { }

getbyService(job){
  this.dataService.getData('users','isServiceProvider', '==', true)
  .subscribe(
    (res:SitterProfileObject[])=>
  res.filter(service=>
    console.log( service.serviceMap[job]==true)
  )
 
)


}
}

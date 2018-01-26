import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    var limit = 50
    
    if (args) {
      limit = args
    }

    if (value){
      return value.substr(0, limit) + "...";
    }
  }

}

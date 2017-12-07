import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paging'
})
export class PagingPipe implements PipeTransform {

  transform(array: any, args?: any): any {
    array.filter()
    return null;
  }

}

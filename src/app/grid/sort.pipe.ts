import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(array: any, args?: any): any {
    array.sort((a: any, b: any) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}

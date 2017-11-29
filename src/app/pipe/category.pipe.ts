import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(category: any, searchText: any): any {
    if (searchText == null) return category;
    return category.filter(function(category){
      return category.CategoryName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

    transform(array: Array<any>, args?: any): any {

      if (array) {

        const sortField = args[0]; // the field we want to sort by
        const sortDirection =  args[1];

        let modifier = 1;

        if (sortDirection === 'desc') {
          modifier = -1;
        }

        array.sort((a: any, b: any) => {

          if (a[sortField] < b[sortField]) {
            return -1 * modifier;
          } else if (a[sortField] > b[sortField]) {
            return 1 * modifier;
          } else {
            return 0;
          }
        });
        array.forEach(element => {console.log(element[sortField]);
        });
        return array;
      }
  }

}

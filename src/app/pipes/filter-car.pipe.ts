import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from 'app/models/carDto';

@Pipe({
  name: 'filterCar'
})
export class FilterCarPipe implements PipeTransform {

  transform(value: CarDto[], filterText: string): CarDto[] {
    filterText = filterText?filterText.toLocaleLowerCase()
    :"";

    return filterText?value
    .filter((c:CarDto) => 
    c.carName.toLocaleLowerCase().indexOf(filterText)!== -1 
    || c.brandName.toLocaleLowerCase().indexOf(filterText)!== -1
    || c.colorName.toLocaleLowerCase().indexOf(filterText)!== -1
    || c.description.toLocaleLowerCase().indexOf(filterText)!== -1
    )
    :value;
  }

}

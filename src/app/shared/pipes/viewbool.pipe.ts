import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewbool'
})
export class ViewboolPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value === true)? "true": "false";
  }

}

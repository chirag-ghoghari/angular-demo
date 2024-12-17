import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if( value !== null && value !== undefined && value !== ''){
    return value;
    }else{
      return 'not avilable value';
    }
  }

}

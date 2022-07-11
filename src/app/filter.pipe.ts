import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,searchText:string) {
    if(value.lenght === 0 || searchText === ''){
      return value;

    }
    const users =[];
    for(const user of value){
      if(user['name']===searchText){
       users.push(user);
      }

    }


    return users;
  }

}

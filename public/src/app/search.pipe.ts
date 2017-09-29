import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(args == undefined){
          return value;
      }
      var results = value.filter((poll)=>{
        return poll.name.indexOf(args) !== -1 ||
        poll.complain.indexOf(args) !== -1
      })
      return results;
  }

}

// return poll.name.toUpperCase().indexOf(args.toUpperCase()) !== -1 ||
// poll.complain.toUpperCase().indexOf(args.toUpperCase()) !== -1

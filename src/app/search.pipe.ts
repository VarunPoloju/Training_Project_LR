import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(dataArray:any[],searchTerm:string): any[] {
    if(!searchTerm){
      return dataArray;
    }
    else
    {
      return dataArray.filter(dataObj=>dataObj.product.productname.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
  }

}

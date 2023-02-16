import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterByType'
})
export class FilterByTypePipe implements PipeTransform {
  transform(contents: Array<Content>, type?: string): Array<Content> {
    if (!type) {
      return contents.filter(content => !content.type);
    }
    return contents.filter(content => content.type === type);
  }
}
